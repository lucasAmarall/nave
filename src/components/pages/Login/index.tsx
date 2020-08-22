
import React, { useState } from "react";
import Logo from "@atoms/Logo";
import Input from "@molecules/Input";
import Button from "@molecules/Button";
import LoginService from "@api/services/LoginService";
import { TextLevel5 } from "@atoms/Typograph";
import { 
  Container,
  Form,
  InputContainer,
  LogoContainer,
  ErrorMessageContainer
} from "./styles";
import TokenUtils from "@utils/TokenUtils";

const Login = () => {
  const service = new LoginService();
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("009@nave.rs");
  const [password, setPassword] = useState<string>("nave1234");

  const onSubmit = async () => {
    try {
      const { token } = await service.login({email, password});
      TokenUtils.setToken(token);
    } catch {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return ( 
    <Container>
      <Form onSubmit={onSubmit} action="javascript:;">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <InputContainer>
          <Input placeholder="E-mail" value={email} onChange={setEmail} />
        </InputContainer>
        <InputContainer>
          <Input placeholder="Senha" value={password} onChange={setPassword} />
        </InputContainer>
        <Button>Entrar</Button>
      </Form>
      <ErrorMessageContainer>
        {error && 
        <TextLevel5 color="error">
          Algum dado está errado, verifique eles e tente novamente
        </TextLevel5>}
      </ErrorMessageContainer>
    </Container>
  );
};
export default Login;
