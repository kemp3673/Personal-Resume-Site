import styled from 'styled-components';

export const ContactButton = styled.button`
    background: rgba(0, 0, 0, 0);
    white-space: nowrap;
    max-width: 100%;
    max-height: 100%;
    //padding: 12px 30px;
    /* color: #fff; */
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    position: sticky;
    bottom: 50px;
    right: 50px;
    z-index: 10;
    transition:transform 0.5s ease-in-out;
    &:hover {
    transform: scale(1.3);
    }
    /* animation: blinker 4s linear infinite; */
`;

export const ContactLink = styled.a`
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    filter: drop-shadow(0px 0px 20px #4444dd);
    &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
    filter: drop-shadow(0px 0px 20px white);
    }
`;