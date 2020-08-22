import React from "react";

import { Container } from "./styles";
import { TextLevel4 } from "@atoms/Typograph";
import { IButtonProps } from "@interfaces/ButtonProps.interface";

const Button = ({ children, onClick }: IButtonProps) => (
  <Container onClick={onClick}>
    <TextLevel4 color="secondary">
      {children}
    </TextLevel4>
  </Container>
);

export default Button;