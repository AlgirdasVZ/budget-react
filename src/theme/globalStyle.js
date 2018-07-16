import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import 'react-dates/lib/css/_datepicker.css';

export const appTheme = {
};

injectGlobal`
  ${styledNormalize}
  
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
  
  button { cursor: pointer; }
  
  button:disabled { cursor: default }
`;