import styled from 'styled-components';

export const EducationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  top: -80px;
  position: relative;
  z-index: 3;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #437C8B 50%, #8BE2E2 100%);
    opacity: 0.8;
    z-index: 1;
  }
`;

export const EducationContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  max-height: 1000px
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EducationH1 = styled.h1`
  color: #fff;
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

export const EducationP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 1.5em;
  text-align: center;
  max-width: 800px;
  max-height: 400px;
  text-shadow: 2px 2px 4px black;

  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 480px) {
    font-size: 1em;
  }
`;

export const EducationWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  justify-content: center;
`;

export const EducationCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const EducationIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const EducationH2 = styled.h2`
  font-size: 1em;
  margin-bottom: 10px;
`;



