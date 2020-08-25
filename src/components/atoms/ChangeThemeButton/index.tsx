import React from "react";

import { Container } from "./styles";
import { TextLevel5 } from "@atoms/Typograph";

const ChangeThemeButton = ({onUpdate, checked}:{onUpdate: () => void, checked: boolean}) => {
  return(
    <Container >
      <label>
        <input type="checkbox" checked={checked} onChange={onUpdate}/>
        <TextLevel5>Desligar a luz?</TextLevel5>
      </label>
    </Container>
  );
};


export default ChangeThemeButton;