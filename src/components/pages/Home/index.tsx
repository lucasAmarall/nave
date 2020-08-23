import React, { useState } from  "react";
import Header from "@molecules/Header";
import NaversList from "@templates/NaversList";
import { Container, HeaderContainer, Content, Title,ListHeader } from "./styles";
import { HeadingLevel1 } from "@atoms/Typograph";
import DeleteNaverModal from "@organisms/DeleteNaverModal";
import { INaver } from "@interfaces/INaver.interface";

const Dashboard = () => {
  const [naverSelected, setNaverSelected] = useState<INaver | undefined>(undefined);
  const [openDeleteNaver, setOpenDeleteNaver] = useState<boolean>(false);

  const editNaver = () => {
    alert("editNaver");
  };
  const deleteNaver = (naver: INaver) => {
    setNaverSelected(naver);
    setOpenDeleteNaver(true);
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