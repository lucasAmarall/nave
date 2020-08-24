import React from  "react";
import Input from "@molecules/Input";
import Button from "@molecules/Button";
import { Container, SaveButton } from "./styles";
import { INaverCreationForm } from "@interfaces/INaverCreationForm.interface";

const NaverCreationForm = ({naver, onSubmit, onUpdate, loading}: INaverCreationForm) => {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(naver);
  };
  return(
    <Container onSubmit={submit}>
      <Input 
        placeholder="Nome" 
        value={naver.name} 
        onUpdate={value => onUpdate({...naver, name: value})}
        required
      />
      <Input 
        placeholder="Cargo" 
        value={naver.job_role} 
        onUpdate={value => onUpdate({...naver, job_role: value})}
        required
      />
      <Input 
        placeholder="Idade" 
        value={naver.birthdate} 
        onUpdate={value => onUpdate({...naver, birthdate: value})}
        required
      />
      <Input 
        placeholder="Tempo de empresa" 
        value={naver.admission_date} 
        onUpdate={value => onUpdate({...naver, admission_date: value})}
        required
      />
      <Input 
        placeholder="Projetos que participou" 
        value={naver.project} 
        onUpdate={value => onUpdate({...naver, project: value})}
        required
      />
      <Input 
        placeholder="URL da foto do Naver" 
        value={naver.url} 
        onUpdate={value => onUpdate({...naver, url: value})}
        required
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