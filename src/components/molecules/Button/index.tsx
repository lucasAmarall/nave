import React from "react";

import { Container, Loading } from "./styles";
import { TextLevel4 } from "@atoms/Typograph";
import { IButtonProps } from "@interfaces/IButtonProps.interface";

const Button = ({ children, onClick, secondary, loading }: IButtonProps) => (
  <Container onClick={onClick} secondary={secondary}>
    <TextLevel4 color={secondary ? "primary" : "secondary"}>
      {loading ? <Loading secondary={secondary} /> :children }
    </TextLevel4>
  </Container>
);

export default Button;
