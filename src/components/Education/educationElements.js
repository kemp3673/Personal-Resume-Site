import styled from 'styled-components';

export const EducationContainer = styled.div`
  align-items: center;
  height: max-content; min-height: 100vh;
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

    background: linear-gradient(180deg, #000001 0%, #01030F 90%);
    z-index: 1;
  }
`;

export const EducationContent = styled.div`
  height: fit-content;
  margin: 0 auto;
  z-index: 2;
  max-width: 1200px;
  position: relative;
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
  margin-top: 4px;
  color: white;
  font-size: 20px;
  text-align: center;
  text-shadow: 2px 2px 2px black;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const EducationWrapper = styled.div`
  z-index: 3;
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
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  width: 375px;
  padding: 15px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 18px;
    height: fit-content;
    width: 260px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 14px;
    height: fit-content;
    width: 220px;
  }
`;

export const EducationIcon = styled.img`
  max-height: 280px;
    max-width: 260px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 4px black;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    max-height: 280px;
    max-width: 260px;
  }

  @media screen and (max-width: 480px) {
    max-height: 240px;
    max-width: 220px;
  }
`;

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;