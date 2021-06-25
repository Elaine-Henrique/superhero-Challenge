import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 4rem;
  display: flex;
  align-items: center;

  select {
    width: 250px;
    border-radius: 0.3rem;
    padding: 1rem;
    color: var(--grey-light);
    background-color: var(--shape);
    font-size: 1rem;
    
    option {
      font-family: 'Barlow', sans-serif;
      color: var(--grey-light);

      & hover {
        background-color: var(--green);
      }
    }
  }
`