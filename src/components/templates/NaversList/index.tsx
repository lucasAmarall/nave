/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import NaversService from "@services/NaversService";
import { INaver } from "@interfaces/KKINaver.interface";
import NaverItem from "@molecules/NaverItem";
import { Container, ItemContainer } from "./style";

const NaversList = () => {
  const [navers, setNavers] = useState<INaver[]>([]);
  const fetchList = async () => {
    const service = new NaversService();
    setNavers(await service.list());
  };
  const edit = (value: any) => {
    alert("edit");
    console.log(value);
  };
  const del = (value: any) => {
    alert("del");
    console.log(value);
  };
  useEffect( () => {
    fetchList();
  }, []);

  return(
    <Container>
      {
        navers.map(naver => (
          <ItemContainer key={naver.id}>
            <NaverItem {...naver} onEdit={edit} onDelete={del} />
          </ItemContainer>
        ))
      }
    </Container>
  );
};

export default NaversList;