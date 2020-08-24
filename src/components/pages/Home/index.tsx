import React, { useState } from  "react";
import Header from "@molecules/Header";
import NaversList from "@templates/NaversList";
import DeleteNaverModal from "@organisms/DeleteNaverModal";
import Button from "@molecules/Button";
import { Container, HeaderContainer, Content, Title,ListHeader, NewNaverButton } from "./styles";
import { HeadingLevel1 } from "@atoms/Typograph";
import { INaver } from "@interfaces/INaver.interface";
import { useHistory, useParams } from "react-router-dom";
import { pathEnum } from "@constants/path";
import NaverDetailsModal from "@organisms/NaverDetailsModal";

const Dashboard = () => {
  const history = useHistory();
  const params = useParams();
  const [naverSelected, setNaverSelected] = useState<INaver | undefined>(undefined);
  const [openDeleteNaver, setDeleteNaverModalStatus] = useState<boolean>(false);
  const [openNaverDetails, setNaverDetailsStatus] = useState<boolean>(false);

  const editNaver = () => {
    // eslint-disable-next-line no-console
    console.log(params);
    // history.push(pathEnum.naver_creation, {oi: true});
  };

  const deleteNaver = (naver: INaver) => {
    setNaverSelected(naver);
    setDeleteNaverModalStatus(true);
  };

  const naverDetails = (naver: INaver) => {
    setNaverSelected(naver);
    setNaverDetailsStatus(true);
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
        <NaversList onDelete={deleteNaver} onEdit={(editNaver)} onDetail={naverDetails}/>
        <DeleteNaverModal 
          naver={naverSelected} 
          isOpen={openDeleteNaver} 
          onClose={() => setDeleteNaverModalStatus(false)}
        />
        <NaverDetailsModal 
          onDelete={deleteNaver}
          onEdit={(editNaver)}
          naver={naverSelected} 
          isOpen={openNaverDetails} 
          onClose={() => setNaverDetailsStatus(false)}
        />
      </Content>
    </Container>
  );
};
export default Dashboard;