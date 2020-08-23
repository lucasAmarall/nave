import React, { useState } from  "react";
import Header from "@molecules/Header";
import NaversList from "@templates/NaversList";
import DeleteNaverModal from "@organisms/DeleteNaverModal";
import Button from "@molecules/Button";
import { Container, HeaderContainer, Content, Title,ListHeader, NewNaverButton } from "./styles";
import { HeadingLevel1 } from "@atoms/Typograph";
import { INaver } from "@interfaces/INaver.interface";
import { useHistory } from "react-router-dom";
import { pathEnum } from "@constants/path";

const Dashboard = () => {
  const history = useHistory();
  const [naverSelected, setNaverSelected] = useState<INaver | undefined>(undefined);
  const [openDeleteNaver, setOpenDeleteNaver] = useState<boolean>(false);

  const editNaver = () => {
    alert("editNaver");
  };
  const deleteNaver = (naver: INaver) => {
    setNaverSelected(naver);
    setOpenDeleteNaver(true);
  };

  const goToCreation = () => {
    history.push(pathEnum.naver_creation);
  };
  
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
          <NewNaverButton>
            <Button onClick={goToCreation}>
              Adicionar naver
            </Button>
          </NewNaverButton>
        </ListHeader>
        <NaversList onDelete={deleteNaver} onEdit={(editNaver)} />
        <DeleteNaverModal 
          naver={naverSelected} 
          isOpen={openDeleteNaver} 
          onClose={() => setOpenDeleteNaver(false)}
        />
      </Content>
    </Container>
  );
};
export default Dashboard;