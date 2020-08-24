import React from "react";

import { Container, GhostText } from "./styles";
import { ILogoProps } from "@interfaces/ILogoProps.interface";

const Logo = ({small = false}: ILogoProps) => (
  <a href="/">
    <Container small={small}>
      <GhostText>nave.rs</GhostText>
      <span className="icon-logo" />
    </Container>
  </a>
);

export default Logo;