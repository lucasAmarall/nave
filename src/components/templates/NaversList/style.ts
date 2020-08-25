import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${({theme}) => theme.margin(4)};
  margin-right: -${({theme}) => theme.margin(4)};
`;

export const ItemContainer = styled.div`
  margin: 0 ${({theme}) => theme.margin(4)} ${({theme}) => theme.margin(5)};
`;

const rotate = keyframes`
  from { transform: rotate(0deg)};
  to { transform: rotate(360deg)};
`;

export const Loading = styled.span`
  display: block;
  width: 90px;
  height: 90px;
  margin: 100px auto;
  border: 1px solid ${({theme}) => theme.texts.primary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;