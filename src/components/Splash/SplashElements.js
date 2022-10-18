import styled from 'styled-components';

export const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  top: -80px;
  height: 100vh;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: #2E3B52; */
    background: linear-gradient(45deg, #437C8B 50%, #8BE2E2 100%);
    opacity: 0.8;
    z-index: 2;
  }
`;

export const SplashContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  max-height: 1000px
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SplashH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  text-shadow: 2px 2px 4px black;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SplashP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 1.5em;
  text-align: center;
  max-width: 800px;
  max-height: 400px;
  text-shadow: 2px 2px 4px black;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SplashProfileImage = styled.img`
  margin-top: 24px;
  width: 25vw;
  max-width: 250px;
  min-width: 150px;
  border-radius: 10%;
  border: 2px solid rgb(0, 0, 0);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
`;

export const SplashLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  margin-top: 24px;
  max-width: 1000px;
`;

export const SplashLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;