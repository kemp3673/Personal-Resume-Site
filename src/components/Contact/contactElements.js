import styled from 'styled-components';


export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    bottom: -80px;
    background: linear-gradient(45deg, #437C8B 50%, #8BE2E2 100%);
    opacity: 0.8;
    z-index: 1;
`;

export const ContactContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  max-height: 1000px;
  width: 100%;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactH1 = styled.h1`
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

export const ContactP = styled.p`
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
`;

export const ContactWrapper = styled.div`
  //display: flex;
  z-index: 1;
  /* height: 50vh; */
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  justify-content: center;
  text-align: center;
`;

/* export const ContactCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.2);
`; */

export const ContactH2 = styled.h2`
color: #fff;
  font-size: 36px;
  text-align: center;
  text-shadow: 2px 2px 4px black;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContactProfileImage = styled.img`
  width: 25vw;
  max-width: 250px;
  min-width: 150px;
  border-radius: 10%;
  border: 2px solid rgb(0, 0, 0);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
`;

export const ContactLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-top: 24px;
  max-width: 1000px;
`;

export const ContactLink = styled.a`
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

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  flew-wrap: wrap;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  width: 75%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 14px;
  }
`;

