import React from "react";

import { Container } from "./styles";
import { TextLevel5 } from "@atoms/Typograph";

const ChangeThemeButton = ({onChange, checked}:{onChange: () => void, checked: boolean}) => {
  return(
    <Container>
      <label>
        <input type="checkbox" onChange={onChange} checked={checked}/>
        <TextLevel5>Desligar a luz?</TextLevel5>
      </label>
    </Container>
  );
};


export default ChangeThemeButton;