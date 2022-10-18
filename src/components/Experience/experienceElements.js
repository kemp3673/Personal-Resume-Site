import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 0 30px;
  height: 100vh;
  top: -80px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
  }
`;

export const ExperienceContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  max-height: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ExperienceH1 = styled.h1`
  margin: 24px;
  color: white;
  font-size: 48px;
  text-align: center;
  text-shadow: 2px 2px 4px black;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;