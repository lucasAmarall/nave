import React from "react";
import Header from "@molecules/Header";
import { Container, HeaderContainer, ContentContainer, FormContainer } from "./styles";
import { HeadingLevel2 } from "@atoms/Typograph";
import NaverCreationForm from "@templates/NaverCreationForm";

const Dashboard = () => {
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
          <HeadingLevel2>
            <span className="icon-left-arrow" />
            Adicionar naver
          </HeadingLevel2>
        </div>
        <FormContainer>
          <NaverCreationForm />
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
export default Dashboard;