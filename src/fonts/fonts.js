import { createGlobalStyle } from 'styled-components';
import Ka1 from './ka1.woff';
import GameOver from './GameOver.woff';

export const GlobalFont = createGlobalStyle`
  /* @font-face {
    font-family: 'Ka1';
    src: local('Ka1'), local('Ka1'),
    url(${Ka1}) format('woff');
    font-weight: 300;
    font-style: normal;
  }, */
  @font-face {
    font-family: 'GameOver';
    src: local('GameOver'), local('GameOver'),
    url(${GameOver}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;