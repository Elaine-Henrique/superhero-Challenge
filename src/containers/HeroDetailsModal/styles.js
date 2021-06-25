import styled from 'styled-components';

export const Container = styled.div`
  max-height: 600px;
  overflow-y: auto;
  > div {
    display: flex;
    flex-direction: column;
    background-color: var(--blue-light);
    border-radius: 1rem;
    margin-bottom: 0.7rem;
    padding: 1rem;

    h3 { 
      color: var(--shape);
      text-align: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      color: var(--black);
      margin-bottom:0.5rem;

      p{ 
        color: var(--shape);
      }

      span{ 
        color: var(--shape);
        margin-left:0.5rem;
      }
    }
  }
`;
