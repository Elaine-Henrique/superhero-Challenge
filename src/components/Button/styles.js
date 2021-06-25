import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Barlow', sans-serif;
  background: var(--green);
	color: var(--shape);
  width: 70%;
  border-radius: 0.3rem;
  transition: all 0.2s;
  padding: 12px;

  transition: filter 0.2s;
  
  :disabled {
    background-color: var(--grey-light);
    color: var(--grey);
    border-color: transparent;
  }

  :hover,
  :focus {
    filter: brightness(0.9);
  }

  :disabled:hover {
    cursor: not-allowed;
  }
  :not(:disabled):hover {
    cursor: pointer;
  }

  span {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  ${props =>
    props.isLoading &&
    css`
      background: var(--green);
    `}

  & > div {
    height: 22px;
    width: 22px;
  }
`;
export default ButtonStyle;
