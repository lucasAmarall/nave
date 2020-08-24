import styled from "styled-components";
import { IThemedButtonProps } from "@interfaces/IThemedButtonProps.interface";

export const Container = styled.button`
  display: block;
  cursor: pointer;
  padding: ${({theme}) => theme.padding(2)} 0;
  border: none;
  appearance: none;
  width: 100%;
  border: 1px solid ${({theme}) => theme.borders.primary};
  background: ${({theme, secondary}: IThemedButtonProps) => 
    theme.backgrounds[secondary ? "primary" : "secondary"]};
  color: ${({theme, secondary}: IThemedButtonProps) => 
    theme.texts[secondary ? "primary" : "secondary"]};
`;