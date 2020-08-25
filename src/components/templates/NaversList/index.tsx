import React, { useEffect, useState, useCallback } from "react";

import NaversService from "@services/NaversService";
import { INaver } from "@interfaces/INaver.interface";
import NaverItem from "@molecules/NaverItem";
import { Container, ItemContainer, Loading } from "./style";
import { INaversListProps } from "@interfaces/INaversListProps.interface";
import Eventbus from "@utils/Eventbus";
import { HeadingLevel2 } from "@atoms/Typograph";

const NaversList = ({onEdit, onDelete, onDetail}: INaversListProps) => {
  const [navers, setNavers] = useState<INaver[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchList = useCallback(async () => {
    const service = new NaversService();
    setLoading(true);
    setNavers(await (await service.get()).reverse());
    setLoading(false);
  }, []);

  useEffect( () => {
    fetchList();
  }, [fetchList]);

  useEffect(() => {
    Eventbus.$on("reloadList", fetchList);
  }, [fetchList]);
  

  if(loading){
    return(
      <Container>
        <Loading />
      </Container>
    );
  }

  if(!navers.length){
    return(
      <Container>
        <ItemContainer>
          <HeadingLevel2>Nenhum naver cadastrado ainda.</HeadingLevel2>
        </ItemContainer>
      </Container>
    );
  }
  
  return(
    <Container>
      {
        navers.map(naver => (
          <ItemContainer key={naver.id}>
            <NaverItem {...naver} onEdit={onEdit} onDelete={onDelete} onDetail={onDetail} />
          </ItemContainer>
        ))
      }
    </Container>
  );
};

export default NaversList;