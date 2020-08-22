import styled from "styled-components";

export const Container = styled.h1`
  font-size: 60px;
  overflow: hidden;
  color: ${({theme}) => theme.texts.primary}
`;

export const GhostText = styled.span`
  font-size: 1px;
`;