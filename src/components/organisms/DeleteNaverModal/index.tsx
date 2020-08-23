import React, { useEffect, useCallback } from "react";
import Eventbus from "@utils/Eventbus";
import DialogModal from "@molecules/DialogModal";
import Button from "@molecules/Button";
import NaversService from "@services/NaversService";
import { INaver } from "@interfaces/INaver.interface";
import { ConfirmButtonsContainer, ButtonContainer } from "./styles";
import { IDeleteNaverModalProps } from "@interfaces/DeleteNaverModalProps.interface";

const DeleteNaverModal = ({isOpen, onClose, naver}: IDeleteNaverModalProps) => {
  const _deleteNaver = async ({ id, name }: INaver) => {
    try {
      const service = new NaversService();
      await service.delete(id);
      Eventbus.$emit("openModal", () => (
        <DialogModal
          title="Naver excluído"
          description="Naver excluído com sucesso!"
        />
      ));
    } catch (e) {
      Eventbus.$emit("openModal", () => (
        <DialogModal
          title="Houve algum erro..."
          description={`Não foi possível excluir ${name}. Por favor tente novamente.`}
        />
      ));
    }
  };

  const deleteNaver = useCallback((naver?: INaver ) => {
    if(!naver) return;
    Eventbus.$emit("openModal", () => (
      <DialogModal 
        title="Excluir Naver" 
        description="Tem certeza que deseja excluir este Naver?" 
        showClose={false}
      >
        <ConfirmButtonsContainer>
          <ButtonContainer>
            <Button secondary >Cancelar</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button onClick={() => _deleteNaver(naver)}>Excluir</Button>
          </ButtonContainer>
        </ConfirmButtonsContainer>
      </DialogModal>
    ));
  }, []);

  useEffect(() => {
    if(isOpen){
      deleteNaver(naver);
    }
  }, [isOpen, deleteNaver, naver]);

  useEffect(() => {
    Eventbus.$on("closingModal", () => onClose());
  },);

  return null;
};

export default DeleteNaverModal;