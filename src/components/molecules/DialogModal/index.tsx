import React from "react";

import { Container, CloseIcon, Title } from "./styles";
import { HeadingLevel2, TextLevel1} from "@atoms/Typograph";
import { IDialogoModalProps } from "@interfaces/IDialogModalProps.interface";
import Eventbus from "@utils/Eventbus";

const DialogModal = ({title, description, showClose = true, children}: IDialogoModalProps) => {
  const closeModal = () => {
    Eventbus.$emit("closeModal");
  };
  return (
    <Container>
      <Title>
        <HeadingLevel2>{title}</HeadingLevel2>
      </Title>
      <TextLevel1>{description}</TextLevel1>
      {showClose && (<CloseIcon>
        <span className="icon-close" onClick={closeModal}/>
      </CloseIcon> )}
      {children}
    </Container>
  );
};

export default DialogModal;