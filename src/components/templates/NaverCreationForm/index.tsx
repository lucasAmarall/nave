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
    "job_role": "","admission_date": "","birthdate": "","project":"","name": "","url": ""
  });

  const submit = async () => {
    setLoading(true);
    try {
      await service.post(naver);
      resetForm();
      Eventbus.$emit("openModal", () => (
        <DialogModal
          title="Naver criado"
          description="Naver criado com sucesso!"
        />
      ));
    } catch {
      Eventbus.$emit("openModal", () => (
        <DialogModal
          title="Houve algum erro..."
          description={`Não foi possível criar ${name || "este naver"}. Por favor tente novamente.`}
        />));
    } finally {
      setLoading(false);
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