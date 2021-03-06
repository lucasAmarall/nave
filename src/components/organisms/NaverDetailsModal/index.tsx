import React, { useEffect, useCallback } from "react";
import Eventbus from "@utils/Eventbus";
import {
  Container,
  Picture,
  InfoContainer,
  FieldTitle,
  Title,
  CloseIcon,
  IconsContainer
} from "./styles";
import { TextLevel2 } from "@atoms/Typograph";
import { INaverDetailsModalProps } from "@interfaces/INaverDetailsModalProps.interface";
import DateUtils from "@utils/DateUtils";
const NaverDetailsModal = ({naver, isOpen, onClose, onEdit, onDelete}: INaverDetailsModalProps) => {
  const closeModal = () => {
    Eventbus.$emit("closeModal");
  };
  
  const open = useCallback(() => {
    const _delete= () => {
      closeModal();
      setTimeout(() => {
        if(naver) onDelete(naver);
      }, 300);
    };
    if(!naver) return;
    Eventbus.$emit("openModal", () => (
      <Container>
        <CloseIcon onClick={closeModal}>
          <span className="icon-close" />
        </CloseIcon>
        <Picture src={naver.url} alt={`Foto de ${naver.name}`} />
        <InfoContainer>
          <Title>{naver.name}</Title>
          <TextLevel2>{naver.job_role}</TextLevel2>

          <FieldTitle>Idade</FieldTitle>
          <TextLevel2>{DateUtils.getFormatedDate(naver.birthdate)}</TextLevel2>

          <FieldTitle>Tempo de empresa</FieldTitle>
          <TextLevel2>{DateUtils.getFormatedDate(naver.admission_date)}</TextLevel2>

          <FieldTitle>Projetos que participou</FieldTitle>
          <TextLevel2>{naver.project}</TextLevel2>
          <IconsContainer>
            <span className="icon-delete" onClick={_delete} />
            <span className="icon-edit" onClick={() => (closeModal(), onEdit(naver))} />
          </IconsContainer>
        </InfoContainer>
      </Container>
    ));
  }, [naver, onDelete, onEdit]);
  
  const shouldOpen = useCallback(() => {
    if(naver) open();
  }, [naver, open]);

  useEffect(() => {
    if(isOpen) shouldOpen();
  }, [isOpen, shouldOpen]);
  
  useEffect(() => {
    Eventbus.$on("closingModal", () => onClose());
  }, [onClose]);

  return null;
};

export default NaverDetailsModal;