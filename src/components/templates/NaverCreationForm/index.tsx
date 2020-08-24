/* eslint-disable max-len */
import React, { useState } from  "react";
import NaversService from "@api/services/NaversService";
import Eventbus from "@utils/Eventbus";
import DialogModal from "@molecules/DialogModal";
import { INewNaver } from "@interfaces/INewNaver.interface";
import NewNaverForm from "@organisms/NewNaverForm";
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

  const submit = async () => {
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
  
  return <NewNaverForm naver={naver} onSubmit={submit} onUpdate={setNaver} loading={loading}/>;
};


export default NaverCreationForm;