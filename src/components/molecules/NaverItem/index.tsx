import React, { useState } from "react";

import { Container, Avatar, Name, Role, IconsContainer } from "./styles";
import { INaverItemProp } from "@interfaces/INaverItemProps.interace";
import { TextLevel3 } from "@atoms/Typograph";

const NaverItem = ({onEdit, onDelete, onDetail, ...props}: INaverItemProp) => {
  const [avatarUrl, setAvatarUrl] =  useState(props.url);

  const fallBackImage = () => {
    props.url= "https://via.placeholder.com/550/000000/FFFFFF/?text=link%20quebrado";
    setAvatarUrl("https://via.placeholder.com/550/000000/FFFFFF/?text=link%20quebrado");
  };
  
  return (
    <Container>
      <Avatar 
        src={avatarUrl} 
        onError={fallBackImage} 
        alt={`foto de ${name}`} 
        onClick={() => onDetail(props)}
      />
      <Name><TextLevel3>{props.name}</TextLevel3></Name>
      <Role>{props.job_role}</Role>
      <IconsContainer>
        <span className="icon-delete" onClick={() => onDelete(props)} />
        <span className="icon-edit" onClick={() => onEdit(props)} />
      </IconsContainer>
    </Container>
  );
};


export default NaverItem;