import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
`;

export const MediaContainer = styled.div`
  position: relative;
  width: 290px;
  height: 290px;
  border: 1px solid #d3d3d3;

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

export const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export const MediaActionsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  visibility: hidden;
  opacity: 0;

  transition: visibility 0.3s, opacity 0.3s;

  & > button + button {
    margin-top: 30px;
  }
`;

export const MediaButton = styled.button`
  width: 180px;
  height: 45px;
  border: 2px solid #ffffff;
  border-radius: 0.3rem;
  background-color: #52555a;

  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;

  transition: background-color 0.3s;

  &:hover {
    background-color: #34373a;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-break: break-all;
  overflow: hidden;

  height: 50px;
  background: #efefef;
  border: 1px solid #d3d3d3;
  border-top: 0;
`;

export const Name = styled.h3`
  color: #52555a;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
`;
