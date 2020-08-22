import React from "react";

import { Container, Avatar, Name, Role, IconsContainer } from "./styles";
import { INaverItemProp } from "@interfaces/NaverItemProps.interace";

const naverItem = ({onEdit, onDelete, ...props}: INaverItemProp) => {
  return (
    <Container>
      <Avatar src={props.url} alt={`foto de ${name}`} />
      <Name>{props.name}</Name>
      <Role>{props.job_role}</Role>
      <IconsContainer>
        <span className="icon-delete" onClick={() => onEdit(props)} />
        <span className="icon-edit" onClick={() => onDelete(props)} />
      </IconsContainer>
    </Container>
  );
};


export default naverItem;