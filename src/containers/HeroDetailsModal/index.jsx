import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import {
  Container,
} from './styles';

const HeroDetailsModal = ({isOpen, onRequestClose, hero}) => {
  const [appearance, setAppearance] = useState({})
  const [biography, setBiography] = useState({})
  const [powerStats, setPowerStats] = useState({})

  useEffect(() => {
    if(!hero) {
      return;
    }
    setAppearance(hero.appearance);
    setBiography(hero.biography);
    setPowerStats(hero.powerstats);
  }, [hero])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName = "react-modal-overlay"
      className = "react-modal-content"
      >
      
      <button 
        onClick={onRequestClose}
        className = "react-modal-close"
      >X</button>

    <Container>
      {appearance && ( 
        <div>
          <h3>Appearance</h3>
          <div>Gender:<p>{ appearance.gender}</p> </div>
          <div>Eye Color: <p>{ appearance['eye-color']}</p></div>
          <div>Hair Color: <p>{ appearance['hair-color']}</p></div>
          <div>Height: 
            {appearance.height && appearance.height.map(height => (
              <p key={height}>{height}</p>
            ))}
          </div>
          <div>Race: <p>{ appearance.race}</p></div>
          <div>weight: 
            {appearance.height && appearance.weight.map(weight => (
              <p key={weight}>{weight}</p>
            ))}
          </div>
        </div>
      )}

      {biography && ( 
        <div>
          <h3>Biografy</h3>
          <div> Aliases:
            {biography.aliases && biography.aliases.map(alias => (
              <span key={alias}>{alias}</span>
            ))} 
          </div>
          <div>Alignment: <p>{biography.alignment}</p></div>
          <div>Alter-egos: <p>{biography['alter-egos']}</p></div>
          <div>First Appearance: <p>{biography['first-appearance']}</p></div>
          <div>Full-name: <p>{biography['full-name']}</p></div>
          <div>Place Of Birth: <p>{biography['place-of-birth']}</p></div>
          <div>Publisher: <p>{biography.publisher}</p></div>
        </div>
      )}

      {powerStats && ( 
        <div>
          <h3>Power</h3>
          <div>Combat: <p>{powerStats.combat}</p></div>
          <div>Durability: <p>{powerStats.durability}</p></div>
          <div>Intelligence: <p>{powerStats.intelligence}</p></div>
          <div>Power: <p>{powerStats.power}</p></div>
          <div>Speed: <p>{powerStats.speed}</p></div>
          <div>Strength: <p>{powerStats.strength}</p></div>
        </div>
      )}
    </Container>    
  
  </Modal>
  )
}

export default HeroDetailsModal;