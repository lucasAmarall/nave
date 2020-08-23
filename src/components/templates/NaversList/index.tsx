import React, { useEffect, useState, useCallback } from "react";

import NaversService from "@services/NaversService";
import { INaver } from "@interfaces/INaver.interface";
import NaverItem from "@molecules/NaverItem";
import { Container, ItemContainer } from "./style";
import { INaversListProps } from "@interfaces/NaversListProps.interface";


const NaversList = ({onEdit, onDelete}: INaversListProps) => {
  const [navers, setNavers] = useState<INaver[]>([]);

  const fetchList = useCallback(async () => {
    const service = new NaversService();
    setNavers(await service.get());
  }, []);

  useEffect( () => {
    fetchList();
  }, [fetchList]);
  
  return(
    <Container>
      {
        navers.map(naver => (
          <ItemContainer key={naver.id}>
            <NaverItem {...naver} onEdit={onEdit} onDelete={onDelete} />
          </ItemContainer>
        ))
      }
    </Container>
  );
};

export default NaversList;