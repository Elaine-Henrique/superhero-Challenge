import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeroCard from '../HeroCard';
import * as HeroesActions from '../../store/actions/heroes';

import {
  Container,
} from './styles';

const HeroCardList = ({data, option, updateHeroes}) => {
  const [heroData, setHeroData] = useState();

  useEffect(() => {
    if(data) {
      setHeroData(data)
    }
  }, [data])

  useEffect(() => {
    if(!option) {
      return;
    }

    switch (option) {
      case 'intelligence':
        updateHeroes(
          heroData.sort((a,b) => Number(a.powerstats.intelligence) < Number(b.powerstats.intelligence) ? 1 : Number(b.powerstats.intelligence) < Number(a.powerstats.intelligence) ? -1 : 0)
        )
        break;
      case 'strength':
        updateHeroes(
          heroData.sort((a,b) => Number(a.powerstats.strength) < Number(b.powerstats.strength) ? 1 : Number(b.powerstats.strength) < Number(a.powerstats.strength) ? -1 : 0)
        )
        break;
      case 'speed':
        updateHeroes(
          heroData.sort((a,b) => Number(a.powerstats.speed) < Number(b.powerstats.speed) ? 1 : Number(b.powerstats.speed) < Number(a.powerstats.speed) ? -1 : 0)
        )
        break;
      case 'durability':
        updateHeroes(
          heroData.sort((a,b) => Number(a.powerstats.durability) < Number(b.powerstats.durability) ? 1 : Number(b.powerstats.durability) < Number(a.powerstats.durability) ? -1 : 0)
        )
        break;
      case 'power':
        updateHeroes(
          heroData.sort((a,b) => Number(a.powerstats.power) < Number(b.powerstats.power) ? 1 : Number(b.powerstatpower.power) < Number(a.powerstats.power) ? -1 : 0)
        )
        break;
      case 'combat':
        updateHeroes(
          heroData.sort((a,b) => Number(a.powerstats.combat) < Number(b.powerstats.combat) ? 1 : Number(b.powerstats.combat) < Number(a.powerstats.combat) ? -1 : 0)
        )
        break;
      default:
        return heroData;
    }

  }, [option, heroData, updateHeroes])

  return (
  <>
    {heroData && (
      <Container>
        {heroData.map((hero, index) => (
          <HeroCard 
            id={index}
            key={hero.id}
            name={hero.name}
            image={hero.image.url}
            hero={hero}
          />
        ))}   
      </Container>
    )};
  </>
);
};

const mapStateToProps = (state) => ({ 
  data: state.heroes.heroResults,
  option: state.heroes.option,
});

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(HeroesActions, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(HeroCardList);
