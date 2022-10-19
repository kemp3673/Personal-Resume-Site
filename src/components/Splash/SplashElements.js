import styled from 'styled-components';


export const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  top: -80px;
  height: 100vh;
  min-height: 850px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,0,0,0) 50%, rgba(23, 29, 191,1) 100%);
    opacity: 0.8;
    z-index: 2;
  }
`;

export const SplashContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SplashH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;
  text-shadow: 2px 2px 4px black;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SplashP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 1.2em;
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

  margin-top: 100px;
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

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  -o-object-fit: cover;
  object-fit: cover;
`;

