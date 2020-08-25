import { createGlobalStyle } from "styled-components";

const Theme = createGlobalStyle`
  body {
    background: ${({theme}) => theme.backgrounds.primary};
  }
`;

export default Theme;