import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 450px;
  height: 90vh;
  max-height: 410px;
  border: 1px solid ${({theme}) => theme.borders.primary};
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

export const ErrorMessageContainer = styled.div`
  margin-top: ${({theme}) => theme.margin(2)}
`;