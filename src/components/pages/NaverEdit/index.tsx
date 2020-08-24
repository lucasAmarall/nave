import React, { useEffect } from "react";
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
import NaverEditFrom from "@templates/NaverEditForm";
import { useParams, useLocation } from "react-router-dom";
import { INaver } from "@interfaces/INaver.interface";

const NaverEdit = () => {
  const params = useParams<{id: string}>();
  const { state } = useLocation<INaver>();
  const id = params.id;
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(state);
  },[params, state]);
  
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
                Editar Naver
              </Title>
            </HeadingLevel2>
          </TitleContainer>
        </div>
        <FormContainer>
          <NaverEditFrom naver={state} id={id} />
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
export default NaverEdit;