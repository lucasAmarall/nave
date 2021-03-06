import React, { useState, useEffect, useCallback } from  "react";
import NaversService from "@api/services/NaversService";
import Eventbus from "@utils/Eventbus";
import DialogModal from "@molecules/DialogModal";
import { INewNaver } from "@interfaces/INewNaver.interface";
import NewNaverForm from "@organisms/NewNaverForm";
import { INaver } from "@interfaces/INaver.interface";
import { useHistory } from "react-router-dom";
import { pathEnum } from "@constants/path";
import DateUtil from "@utils/DateUtils";

const NaverCreationForm = ({naver: _naver, id: _id}: {naver: INaver | undefined, id:string }) => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [naver, setNaver] = useState<INewNaver>({
    "job_role": "Loading...",
    "admission_date": "Loading...",
    "birthdate": "Loading...",
    "project": "Loading...",
    "name": "Loading...",
    "url": "Loading..."
  });

  const fillState = useCallback((naver: INaver) => {
    delete naver.user_id;
    const { id = _id, ...rest} = naver;
    setId(id);
    setNaver({
      ...rest,
      birthdate: DateUtil.getFormatedDate(rest.birthdate),
      admission_date: DateUtil.getFormatedDate(rest.admission_date)
    });
  }, [_id]);

  const loadById = useCallback(async (id: string) => {
    try{
      const service = new NaversService();
      const naverById = await service.getById(id);
      if(naverById) fillState(naverById);
    } catch(e){
      history.push(pathEnum.home);
    }
  }, [fillState, history]);


  const firtsVerification = useCallback(async () =>{
    if(_naver) return fillState(_naver);
    if(_id) return loadById(id);
    history.push(pathEnum.home);
  }, [_id, _naver, fillState, history, id, loadById]);
  
  useEffect( () => {
    firtsVerification();
  }, [firtsVerification]);

  const submit = async () => {
    if(!naver) return;
    try {
      const service = new NaversService();
      await service.update(id, naver);
      resetForm();
      Eventbus.$emit("openModal", () => (
        <DialogModal
          title="Naver atualizado"
          description="Naver atualizado com sucesso!"
        />
      ));
    } catch {
      Eventbus.$emit("openModal", () => (
        <DialogModal
          title="Houve algum erro..."
          description={"Não foi possivel atualizar. Por favor tente novamente."}
        />
      ));
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
  
  return <NewNaverForm naver={naver} onSubmit={submit} onUpdate={setNaver} />;
};


export default NaverCreationForm;