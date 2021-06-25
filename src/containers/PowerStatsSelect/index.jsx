import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as HeroesActions from '../../store/actions/heroes';

import { Container } from './styles';

const PowerStatsSelect = ({data, addCurrentOption}) => {
  const [powerStatsOptions, setPowerStatsOptions] = useState([]);
  const [filterPowerStats, setFilterPowerStats] = useState('');
 
  useEffect(() => {
    if(data.length > 1) {
      const obj = data[0].powerstats;
      let powerStats = Object.keys(obj).map(key => {
        return {
          label: key, 
          value: obj[key]
        }
      });
      setPowerStatsOptions(powerStats)
    }
  }, [data])

  useEffect(() => {
    if(!filterPowerStats) {
      return;
    }
    
    addCurrentOption(filterPowerStats)
    setFilterPowerStats('');
  }, [filterPowerStats, addCurrentOption])

  return (
    <>
    {data.length > 1 &&(
      <Container>
        <select 
          onChange={event => setFilterPowerStats(event.target.value)}
        >
          {!filterPowerStats && (
            <option>Order by Power</option>
          )}

          {powerStatsOptions.map(power => (
            <option value={power.label} key={power.value}>
              {power.label}
            </option>
          ))}
        </select>
        </Container>
      )
    }  
    </>
  );
};

const mapStateToProps = (state) => ({ 
  data: state.heroes.heroResults,
});

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(HeroesActions, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(PowerStatsSelect);
