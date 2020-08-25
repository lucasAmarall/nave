import styled, { keyframes } from "styled-components";
import { IThemedButtonProps } from "@interfaces/IThemedButtonProps.interface";

export const Container = styled.button`
  display: block;
  cursor: pointer;
  padding: ${({theme}) => theme.padding(2)} 0;
  border: none;
  appearance: none;
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme}) => theme.borders.primary};
  background: ${({theme, secondary}: IThemedButtonProps) => 
    theme.backgrounds[secondary ? "primary" : "secondary"]};
  color: ${({theme, secondary}: IThemedButtonProps) => 
    theme.texts[secondary ? "primary" : "secondary"]};
`;

const rotate = keyframes`
  from { transform: rotate(0deg)};
  to { transform: rotate(360deg)};
`;

export const Loading = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid ${({theme, secondary}: IThemedButtonProps) => 
    theme.texts[secondary ? "primary" : "secondary"]};
  border-top-color: transparent;
  margin: 0 auto;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;