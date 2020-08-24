/* eslint-disable max-len */
import { createGlobalStyle } from "styled-components";

const montSerratTtf =  require("@assets/fonts/Montserrat-Regular.ttf");
const montSerratWoff =  require("@assets/fonts/Montserrat-Regular.woff");
const montSerratWoff2 =  require("@assets/fonts/Montserrat-Regular.woff2");

const montSerraSemiBoldtTtf =  require("@assets/fonts/Montserrat-SemiBold.ttf");
const montSerraSemiBoldtWoff =  require("@assets/fonts/Montserrat-SemiBold.woff");
const montSerraSemiBoldtWoff2 =  require("@assets/fonts/Montserrat-SemiBold.woff2");

const BaseCss = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Montserrat', sans-serif;
    background: ${({theme}) => theme.backgrounds.primary};
    color: ${({theme}) => theme.texts.primary};
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none
  }
  #root {
    min-height: 100vh;
    min-width: 100vw;
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url('${montSerraSemiBoldtWoff2 }') format('woff2'),
        url('${montSerraSemiBoldtWoff}') format('woff'),
        url('${montSerraSemiBoldtTtf}') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat', sans-serif;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('${montSerratWoff2}') format('woff2'),
        url('${montSerratWoff}') format('woff'),
        url('${montSerratTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

`;

export default BaseCss;
