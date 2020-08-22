import React from  "react";
import Header from "@molecules/Header";
import NaversList from "@templates/NaversList";
import { Container, HeaderContainer, Content, Title,ListHeader } from "./styles";
import { HeadingLevel1 } from "@atoms/Typograph";

const Dashboard = () => {

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Content>
        <ListHeader>
          <Title>
            <HeadingLevel1> Navers </HeadingLevel1>
          </Title>
        </ListHeader>
        <NaversList />
      </Content>
    </Container>
  );
};
export default Dashboard;