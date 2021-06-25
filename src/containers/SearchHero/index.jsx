import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GetHeroByName from '../../services/getHeroByName';
import Button from '../../components/Button';
import * as HeroesActions from '../../store/actions/heroes';

import { Container, FormContent } from './styles';

const SearchHero = ({updateHeroes}) => {
  const [heroName, setHeroName] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  async function handleSearchHero(event) {
    event.preventDefault();

    try {
      const response = await GetHeroByName(heroName);
      updateHeroes(response.results);

    } catch (error) {
      throw error;
    } finally {
      setHeroName('');
      setButtonDisabled(true);
    }
  }
  
  useEffect(() => {
    if(heroName) {
      if(heroName.length > 2) {
        setButtonDisabled(false);
        return;
      }
      setButtonDisabled(true);
      return;
    }
  }, [heroName])

  return (
    <Container>
      <FormContent onSubmit={handleSearchHero}>
        <input
					type="text"
					placeholder="Search for a hero by name..."
          value={heroName}
					onChange={event => {
            setHeroName(event.target.value)
          }}
				/>

        <Button 
          type="submit"
          text="Search"
          disabled={buttonDisabled}
        />
			</FormContent>
    </Container>
  );
}

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(HeroesActions, dispatch);

export default connect(null, matchDispatchToProps)(SearchHero);