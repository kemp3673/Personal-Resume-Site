import styled from 'styled-components';


export const ContactOuter = styled.nav`
  //background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

