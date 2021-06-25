import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 940px;
  max-height: 600px;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  align-content: space-between;
  justify-content: center;

  > div {
    margin: 10px 10px 0 0;
  }
`;
