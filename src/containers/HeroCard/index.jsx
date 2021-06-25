import { useState } from 'react';
import HeroDetailsModal from '../../containers/HeroDetailsModal';

import {
  Container,
  MediaContainer,
  MediaImage,
  MediaButton,
  MediaActionsContainer,
  NameContainer,
  Name,
} from './styles';

const HeroCard = (props) => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  function handleOpenDetailsModal() {
    setIsDetailsModalOpen(true);
  }

  function handleCloseDetailsModal() {
    setIsDetailsModalOpen(false);
  }

  const { name, image, hero } = props;

  return (
    <Container>
      <MediaContainer>
        <MediaImage src={image} />
        <MediaActionsContainer>
          <MediaButton onClick={handleOpenDetailsModal}>Read more</MediaButton>
        </MediaActionsContainer>
      </MediaContainer>

      <NameContainer>
        <Name>{name}</Name>
      </NameContainer>

      <HeroDetailsModal
        isOpen={isDetailsModalOpen}
        onRequestClose={handleCloseDetailsModal}
        hero={hero}
      />
    </Container>
  );
};

export default HeroCard;