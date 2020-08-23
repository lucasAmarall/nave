import { createGlobalStyle } from "styled-components";

import montaSerratRegular from "@assets/fonts/Montserrat-Regular.ttf";
import montaSerratSemiBold from "@assets/fonts/Montserrat-SemiBold.ttf";

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
    background: ${({theme}) => theme.backgrounds.primary}
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
    font-family: 'Montserrat';
    src:  url('${montaSerratRegular}');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Montserrat';
    src:  url('${montaSerratSemiBold}');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }
`;

export default BaseCss;
