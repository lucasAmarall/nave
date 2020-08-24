import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: ${({theme}) => theme.padding(6)};
  padding-bottom: ${({theme}) => theme.padding(6)};
`;

export const Logout = styled.span`
  cursor: pointer;
`;