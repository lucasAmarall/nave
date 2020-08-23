import styled from "styled-components";

export const ConfirmButtonsContainer = styled.div`
  width: 100%;
  max-width: 376px;
  height: 40px;
  display: flex;
  flex-wrapa: wrap;
  justify-content: space-between;
  align-self: flex-end;
  float: right;
  margin-top: ${({theme}) => theme.margin(8)};
`;

export const ButtonContainer = styled.div`
  width: 176px;
  height: 40px;
`;