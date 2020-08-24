import { createGlobalStyle } from "styled-components";

const fontEot = require("@assets/fonts/icomoon.eot");
const fontSvg = require("@assets/fonts/icomoon.svg");
const fontTtf = require("@assets/fonts/icomoon.ttf");
const fontWoff= require( "@assets/fonts/icomoon.woff");

const resetCss = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url('${fontEot}?w9tfil');
    src:  url('${fontEot}?w9tfil#iefix') format('embedded-opentype'),
      url('${fontTtf}?w9tfil') format('truetype'),
      url('${fontWoff}?w9tfil') format('woff'),
      url('${fontSvg}?w9tfil#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-left-arrow:before {
    content: "\\e903";
  }
  .icon-close:before {
    content: "\\e904";
  }
  .icon-delete:before {
    content: "\\e900";
  }
  .icon-edit:before {
    content: "\\e901";
  }
  .icon-logo:before {
    content: "\\e902";
  }
`;

export default resetCss;
