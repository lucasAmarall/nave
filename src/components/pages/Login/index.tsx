/* eslint-disable no-console */
import React, { useState } from "react";
import Logo from "@atoms/Logo";

import { Container, Form, InputContainer, LogoContainer } from "./styles";
import Input from "@molecules/Input";
import Button from "@molecules/Button";

const Login = () => {
  const [email, setEmail] = useState<string >("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    console.log({
      email,
      password,
    });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <InputContainer>
          <Input placeholder="E-mail" value={email} onChange={setEmail} />
        </InputContainer>
        <InputContainer>
          <Input placeholder="Senha" value={password} onChange={setPassword} />
        </InputContainer>
        <Button onClick={onSubmit}>Entrar</Button>
      </Form>
    </Container>
  );
};
export default Login;
