import React from "react";
import Header from "@molecules/Header";
import { 
  Container,
  HeaderContainer,
  ContentContainer,
  FormContainer,
  Title,
  TitleContainer
} from "./styles";
import { HeadingLevel2 } from "@atoms/Typograph";
import NaverCreationForm from "@templates/NaverCreationForm";

const NaverCreation = () => {
  
  const goBack = () => {
    window.history.back();
  };
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <div onClick={goBack}>
          <TitleContainer>
            <HeadingLevel2>
              <span className="icon-left-arrow" />
              <Title>
                Adicionar Naver
              </Title>
            </HeadingLevel2>
          </TitleContainer>
        </div>
        <FormContainer>
          <NaverCreationForm />
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
export default NaverCreation;