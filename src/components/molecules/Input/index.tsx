import React, { ChangeEvent } from "react";
import { Container, TextInput, Title } from "./styles";
import { TextLevel2, TextLevel5 } from "@atoms/Typograph";
import { IInputProps } from "@interfaces/InputProps.interface";

const Input = ({ title, placeholder, onChange, value, ...props }: IInputProps) => {
  const _onChange = (event: Event & ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <Container>
      <Title>
        <TextLevel5>{title || placeholder}</TextLevel5>
      </Title>
      <TextLevel2>
        <TextInput {...props} value={value} onChange={_onChange} placeholder={placeholder}/>
      </TextLevel2>
    </Container>
  );
};
export default Input;
