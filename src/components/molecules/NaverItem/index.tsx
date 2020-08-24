import React from "react";

import { Container, Avatar, Name, Role, IconsContainer } from "./styles";
import { INaverItemProp } from "@interfaces/INaverItemProps.interace";
import { TextLevel3 } from "@atoms/Typograph";

const naverItem = ({onEdit, onDelete, onDetail, ...props}: INaverItemProp) => {
  return (
    <Container>
      <Avatar src={props.url} alt={`foto de ${name}`} onClick={() => onDetail(props)}/>
      <Name><TextLevel3>{props.name}</TextLevel3></Name>
      <Role>{props.job_role}</Role>
      <IconsContainer>
        <span className="icon-delete" onClick={() => onDelete(props)} />
        <span className="icon-edit" onClick={() => onEdit(props)} />
      </IconsContainer>
    </Container>
  );
};


export default naverItem;