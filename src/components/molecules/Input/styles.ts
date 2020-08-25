import styled from "styled-components";
import { IThemedInputProps } from "@interfaces/IThemedInputProps.interface";

export const Container = styled.label`
  border: 1px solid ${({theme, error}: IThemedInputProps) => (
    theme.borders[error? "error":  "primary"]
  )};
  position: relative;
  width: 100%;
  padding: ${({theme}) => theme.padding(1.5)};
  box-sizing: border-box;
  margin-top: ${({theme}) => theme.margin(6)};
  text-align: left;
  display: block;

  input {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    border: none;
    outline: none;
    background: none;
    width: calc(100% - ${({theme}) => theme.padding(2)});
  }
`;
export const Title = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: ${({theme}) => theme.padding(1)};
  transform: translateY(-100%);
`;