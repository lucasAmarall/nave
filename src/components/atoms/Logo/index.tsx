import React, { useEffect } from "react";

import { Container, GhostText } from "./styles";
import { ILogoProps } from "@interfaces/ILogoProps.interface";

const Logo = ({small = false}: ILogoProps) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("rerender");
  },[]);
  return(
    <a href="/">
      <Container small={small}>
        <GhostText>nave.rs</GhostText>
        <span className="icon-logo" />
      </Container>
    </a>
  );
};

export default Logo;