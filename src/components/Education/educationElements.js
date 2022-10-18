import styled from 'styled-components';

export const EducationContainer = styled.div`
  align-items: center;
  //padding: 0 30px;
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
  margin: 0 auto;
  z-index: 3;
  max-width: 1200px;
  max-height: 1000px
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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
  margin-top: 10px;
  color: black;
  font-size: 18px;
  text-align: center;
  max-width: 800px;
  max-height: 400px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const EducationWrapper = styled.div`
  z-index: 3;
  height: 340px;
  flex-basis: 20%;
  -ms-flex: auto;
  width: 300px;
  position: relative;
  margin: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    height: 280px;
    width: 260px;
    margin: 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    height: 240px;
    width: 220px;
    margin: 5px;
  }
`;

export const EducationCard = styled.div`
  background: #fff;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  height: 340px;
  width: 300px;
  padding: 15px;
  box-shadow: 2px 2px 3px gray;

  @media screen and (max-width: 768px) {
    height: 280px;
    width: 260px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    height: 240px;
    width: 220px;
  }
`;

export const EducationIcon = styled.img`
  max-height: 160px;
  max-width: 160px;
  margin-bottom: 10px;
`;

export const EducationH2 = styled.h2`
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 10px;
`;