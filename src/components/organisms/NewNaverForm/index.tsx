import React from  "react";
import Input from "@molecules/Input";
import Button from "@molecules/Button";
import { Container, SaveButton } from "./styles";
import { INaverCreationForm } from "@interfaces/INaverCreationForm.interface";

const NaverCreationForm = ({naver, onSubmit, onUpdate}: INaverCreationForm) => {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(naver);
  };
  return(
    <Container onSubmit={submit}>
      <Input 
        placeholder="Nome" 
        value={naver.name} 
        onChange={value => onUpdate({...naver, name: value})}
      />
      <Input 
        placeholder="Cargo" 
        value={naver.job_role} 
        onChange={value => onUpdate({...naver, job_role: value})}
      />
      <Input 
        placeholder="Idade" 
        value={naver.birthdate} 
        onChange={value => onUpdate({...naver, birthdate: value})}
      />
      <Input 
        placeholder="Tempo de empresa" 
        value={naver.admission_date} 
        onChange={value => onUpdate({...naver, admission_date: value})}
      />
      <Input 
        placeholder="Projetos que participou" 
        value={naver.project} 
        onChange={value => onUpdate({...naver, project: value})}
      />
      <Input 
        placeholder="URL da foto do Naver" 
        value={naver.url} 
        onChange={value => onUpdate({...naver, url: value})}
      />
      <span/>
      <SaveButton>
        <Button>
          Salvar
        </Button>
      </SaveButton>
    </Container>
  );
};

export default NaverCreationForm;