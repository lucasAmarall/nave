import styled from "styled-components";
import _Container from "@atoms/Container";

export const Container = styled(_Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 450px;
  height: 90vh;
  max-height: 410px;
  border: 1px solid black;
  padding: 0 ${({theme}) => theme.padding(8)};
  box-sizing: border-box;
  text-align: center;
`;

export const LogoContainer = styled.div`
  margin-top: ${({theme}) => theme.margin(10)};
  margin-bottom: ${({theme}) => theme.margin(8)};
`;

export const InputContainer = styled.div`
  margin-bottom: ${({theme}) => theme.margin(7)};
`;