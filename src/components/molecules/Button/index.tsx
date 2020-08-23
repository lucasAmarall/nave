import React from "react";

import { Container } from "./styles";
import { TextLevel4 } from "@atoms/Typograph";
import { IButtonProps } from "@interfaces/ButtonProps.interface";

const Button = ({ children, onClick, secondary }: IButtonProps) => (
  <Container onClick={onClick} secondary={secondary}>
    <TextLevel4 color={secondary ? "primary" : "secondary"}>
      {children}
    </TextLevel4>
  </Container>
);

export default Button;