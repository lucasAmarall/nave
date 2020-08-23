import React from "react";

import { Container, GhostText } from "./styles";
import { ILogoProps } from "@interfaces/LogoProps.interface";

const Logo = ({small = false}: ILogoProps) => (
  <Container small={small}>
    <GhostText>nave.rs</GhostText>
    <span className="icon-logo" />
  </Container>
);

export default Logo;