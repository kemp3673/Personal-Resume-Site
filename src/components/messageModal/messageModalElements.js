import styled from 'styled-components';

export const MessageModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  //display: grid;
  display: none;
  align-items: center;
  justify-content: right;
  top: 0;
  left: 0;
  display: ${({ showModal }) => (showModal ? 'grid' : 'none')};
`;

export const MessageModalContent = styled.div`
  animation: 0.5s ease-out 0s 1 slideInRight;
  transition: 0.3s ease-in-out;
  display: grid;
  background: #fff;
  position: relative;
  z-index: 999;
  border-radius: 10px;
  width: 100vw;
  height: 50vh;
  max-width: 400px;
  min-width: 300px;
  max-height: fit-content;
  min-height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  color: #000;
  line-height: 1.8;
  font-size: 1rem;
  margin-right: 20px;


  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    max-height: 100vh;
    max-width: 100vw;
    margin: 0, auto;
    top: 0;
    left: 0;
    position: fixed;
    border-radius: 0px;
    overflow-y: scroll;
    animation: 0.5s ease-out 0s 1 slideInDown;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
    max-height: 100vh;
    max-width: 100vw;
    margin: 0, auto;
    top: 0;
    left: 0;
    position: fixed;
    border-radius: 0px;
    animation: 0.5s ease-out 0s 1 slideInDown;
    transition: 0.3s ease-in-out;
  }
`;

export const MessageModalWrapper = styled.div`
`;

export const MessageModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  height: fit-content;
`;

export const MessageModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

export const MessageModalClose = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  transition:transform 0.1s ease-in-out;
    &:hover {
    transform: scale(1.3);
    }
`;

export const MessageModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
  padding-top: 20px;
`;

export const MessageModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const MessageModalLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const MessageModalInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const MessageModalTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const MessageModalButton = styled.button`
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;
