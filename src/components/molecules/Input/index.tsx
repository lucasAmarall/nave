import React, { ChangeEvent } from "react";
import { Container, Title } from "./styles";
import { TextLevel2, TextLevel5 } from "@atoms/Typograph";
import { IInputProps } from "@interfaces/InputProps.interface";
import InputMask from "react-input-mask";

const Input = ({ title, placeholder, onUpdate, value, mask, error, ...props }: IInputProps) => {
  const _onChange = (event: Event & ChangeEvent<HTMLInputElement>) => {
    onUpdate(event.target.value);
  };
  return (
    <Container error={error}>
      <Title>
        <TextLevel5>{title || placeholder}</TextLevel5>
      </Title>
      <TextLevel2>
        <InputMask
          mask={mask} 
          {...props} 
          value={value} 
          onChange={_onChange} 
          placeholder={placeholder}
        />
      </TextLevel2>
    </Container>
  );
};
export default Input;
