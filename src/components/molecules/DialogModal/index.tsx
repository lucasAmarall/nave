import React from "react";

import { Container, CloseIcon } from "./styles";
import { HeadingLevel2, TextLevel1} from "@atoms/Typograph";

const DialogModal = () => (
  <Container>
    <HeadingLevel2>Naver criado</HeadingLevel2>
    <TextLevel1>Naver atualizado com sucesso!</TextLevel1>
    <CloseIcon>
      <span className="icon-close" />
    </CloseIcon>
  </Container>
);

export default DialogModal;