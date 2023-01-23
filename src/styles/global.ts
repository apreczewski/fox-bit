import { createGlobalStyle } from 'styled-components';
import { colors } from '@/styles/colors';
import { scrollbarThin } from './scroll';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors['bg-global'][50]};
    -webkit-font-smoothing: antialiased;
    ${scrollbarThin}
  }

  body, input, button {
    font: 400 16px "Open Sans", serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
