/* eslint-disable max-len */
import React, { useState } from  "react";
import Input from "@molecules/Input";
import Button from "@molecules/Button";
import NaversService from "@api/services/NaversService";
import Eventbus from "@utils/Eventbus";
import DialogModal from "@molecules/DialogModal";
import { Container, SaveButton } from "./styles";
import { INewNaver } from "@interfaces/INewNaver.interface";

const NaverCreationForm = () => {
  const [loading, setLoading] = useState(false);
  const service = new NaversService();
  const [naver, setNaver] = useState<INewNaver>({
    "job_role": "Desenvolvedor",
    "admission_date": "19/08/2018",
    "birthdate": "12/04/1992",
    "project":"Project Backend Test",
    "name": "Christian Tavares ---",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-YF8M8YsAYndh2rWX3w8u1Lh4kJHgL86g6w&usqp=CAU"
  });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await service.post(naver);
      resetForm();
      setLoading(false);
      Eventbus.$emit("openModal", () => (
        <DialogModal
          title="Naver criado"
          description="Naver criado com sucesso!"
        />
      ));
    } catch {
      setLoading(false);
      Eventbus.$emit("openModal", () => (
        <DialogModal
          title="Houve algum erro..."
          description={`Não foi possível criar ${name || "este naver"}. Por favor tente novamente.`}
        />));
    }
  };

  const resetForm = () => {
    setNaver({
      "job_role": "",
      "admission_date": "",
      "birthdate": "",
      "project": "",
      "name": "",
      "url": ""
    });
  };
  return(
    <Container onSubmit={submit}>
      <Input 
        placeholder="Nome" 
        value={naver.name} 
        onChange={value => setNaver({...naver, name: value})}
      />
      <Input 
        placeholder="Cargo" 
        value={naver.job_role} 
        onChange={value => setNaver({...naver, job_role: value})}
      />
      <Input 
        placeholder="Idade" 
        value={naver.birthdate} 
        onChange={value => setNaver({...naver, birthdate: value})}
      />
      <Input 
        placeholder="Tempo de empresa" 
        value={naver.admission_date} 
        onChange={value => setNaver({...naver, admission_date: value})}
      />
      <Input 
        placeholder="Projetos que participou" 
        value={naver.project} 
        onChange={value => setNaver({...naver, project: value})}
      />
      <Input 
        placeholder="URL da foto do Naver" 
        value={naver.url} 
        onChange={value => setNaver({...naver, url: value})}
      />
      <span/>
      <SaveButton>
        <Button loading={loading}>
          Salvar
        </Button>
      </SaveButton>
    </Container>
  );
};


export default NaverCreationForm;