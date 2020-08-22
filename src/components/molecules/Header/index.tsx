import React from "react";

import Logo from "@atoms/Logo";
import { Container } from "./styles";
import { TextLevel4 } from "@atoms/Typograph";

const Header = () => {
  return (
    <Container>
      <Logo small/>
      <TextLevel4> Sair </TextLevel4>
    </Container>
  );
};

export default Header;