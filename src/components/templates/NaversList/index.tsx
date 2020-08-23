import React, { useEffect, useState } from "react";

import NaversService from "@services/NaversService";
import { INaver } from "@interfaces/INaver.interface";
import NaverItem from "@molecules/NaverItem";
import { Container, ItemContainer } from "./style";
import Eventbus from "@utils/Eventbus";
import DialogModal from "@molecules/DialogModal";

const NaversList = () => {
  const [navers, setNavers] = useState<INaver[]>([]);
  const fetchList = async () => {
    const service = new NaversService();
    setNavers(await service.list());
  };
  const edit = () => {
    Eventbus.$emit("openModal", () => <DialogModal />);
  };
  const del = () => {
    Eventbus.$emit("openModal", () => <DialogModal />);
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