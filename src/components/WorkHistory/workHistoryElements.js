import styled from 'styled-components'


export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  min-height: 100vh;
  /* top: -80px; */
  position: relative;
  z-index: 3;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #020024 10%, #6A96A2 75%);
    z-index: 1;
  }
`;

export const HistoryContent = styled.div`
  margin: 0 auto;
  z-index: 3;
  height: 100%;
  max-width: 1200px;
  min-height: 100vh;
  position: relative;
  justify-content: center;
`;

export const HistoryH1 = styled.h1`
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

export const HistoryP = styled.p`
  margin-top: 10px;
  color: black;
  font-size: 16px;
  text-align: left;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HistoryWrapper = styled.div`
  z-index: 3;
  height: 380px;
  width: 500px;
  position: relative;
  margin: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    height: 280px;
    width: 260px;
    margin: 5px;
  }
`;

export const HistoryCard = styled.div`
  height: fit-content;
  max-height: 400px;
  background: #fff;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 3px gray;

  @media screen and (max-width: 768px) {
    height: 280px;
    width: 260px;
  }
`;

export const HistoryIcon = styled.img`
  max-height: 160px;
  max-width: 160px;
  margin-bottom: 10px;
  border-radius: 75%;
`;

export const HistoryH2 = styled.h2`
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-weight: bold;
    font-size: 1.1em;
  }
`;

export const HistoryItems = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;