import React, { useState } from  "react";
import Input from "@molecules/Input";
import Button from "@molecules/Button";
import { Container, SaveButton } from "./styles";
import { INaverCreationForm } from "@interfaces/INaverCreationForm.interface";
import Validator from "@utils/Validator";
import { TextLevel5 } from "@atoms/Typograph";

const NaverCreationForm = ({naver, onSubmit, onUpdate, loading}: INaverCreationForm) => {
  
  const [formValid, setFormValid]= useState(true);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const contract  = (
      Validator.fullName(naver.name) &&
      Validator.strMinLength(naver.job_role, 3) &&
      Validator.date(naver.birthdate) && 
      Validator.date(naver.admission_date) &&
      Validator.strMinLength(naver.url, 5)
    );

    setFormValid(contract);
    if(contract) onSubmit(naver, contract);
  };
  return(
    <Container onSubmit={submit}>
      <Input 
        placeholder="Nome" 
        value={naver.name} 
        onUpdate={value => onUpdate({...naver, name: value})}
        error={!!naver.name && !Validator.fullName(naver.name)}
        required
      />
      <Input 
        placeholder="Cargo" 
        value={naver.job_role} 
        onUpdate={value => onUpdate({...naver, job_role: value})}
        error={!!naver.job_role && !Validator.strMinLength(naver.job_role, 3)}
        required
      />
      <Input 
        placeholder="Idade" 
        value={naver.birthdate} 
        onUpdate={value => onUpdate({...naver, birthdate: value})}
        error={!!naver.birthdate && !Validator.date(naver.birthdate)}
        mask="99/99/9999"
        required
      />
      <Input 
        placeholder="Tempo de empresa" 
        value={naver.admission_date} 
        onUpdate={value => onUpdate({...naver, admission_date: value})}
        error={!!naver.admission_date && !Validator.date(naver.admission_date)}
        mask="99/99/9999"
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
        error={!!naver.url && !Validator.strMinLength(naver.url, 5)}
        required
      />
      <span>
        { !formValid && (
          <TextLevel5>
            Verifique se preencheu todos os campos estão preenchidos e corretos.
          </TextLevel5>
        )}
      </span>
      <SaveButton>
        <Button loading={loading}>
          Salvar
        </Button>
      </SaveButton>
    </Container>
  );
};

export default NaverCreationForm;