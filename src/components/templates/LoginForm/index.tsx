import React, { useState } from "react";
import LoginService from "@api/services/LoginService";
import Logo from "@atoms/Logo";
import Input from "@molecules/Input";
import Button from "@molecules/Button";
import { TextLevel5 } from "@atoms/Typograph";
import { 
  Container,
  InputContainer,
  LogoContainer,
  ErrorMessageContainer
} from "./styles";


import TokenUtils from "@utils/TokenUtils";
import Validator from "@utils/Validator";
const LoginForm = () => {
  const service = new LoginService();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("123@nave.rs");
  const [password, setPassword] = useState<string>("nave1234");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(loading) return;
    setLoading(true);
    try {
      const { token } = await service.login({email, password});
      TokenUtils.setToken(token);
    } catch {
      setError(true);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } 
  };
  return(
    <>
      <Container onSubmit={onSubmit}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <InputContainer>
          <Input 
            placeholder="E-mail" 
            value={email} 
            onUpdate={setEmail} 
            type="email"
            error={!!email && !Validator.email(email)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Input 
            placeholder="Senha" 
            value={password} 
            onUpdate={setPassword} 
            type="password"
            error={!!password && !Validator.strMinLength(password, 4)}
            required
          />
        </InputContainer>
        <Button loading={loading}>Entrar</Button>
      </Container>

      <ErrorMessageContainer>
        {error && 
        <TextLevel5 color="error">
          Algum dado está errado, verifique eles e tente novamente
        </TextLevel5>}
      </ErrorMessageContainer> 
    </>
  );
};

export default LoginForm;