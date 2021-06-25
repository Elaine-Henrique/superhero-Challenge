import styled from 'styled-components';

export const FooterStyle = styled.footer`
  width: 100vw;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-light);

  position: fixed;
  bottom: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  p {
    font-family: 'Barlow', sans-serif;
    color: var(--grey);
    font-size: 1rem;
  }
`