import React from "react";

import Logo from "@atoms/Logo";
import { Container, Logout } from "./styles";
import { TextLevel4 } from "@atoms/Typograph";
import TokenUtils from "@utils/TokenUtils";

const Header = () => {
  const logout = () => {
    TokenUtils.removeToken();
  };
  return (
    <Container>
      <Logo small/>
      <Logout>
        <TextLevel4 onClick={logout}> Sair </TextLevel4>
      </Logout>
    </Container>
  );
};

export default Header;