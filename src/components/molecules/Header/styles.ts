import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding-top: ${({theme}) => theme.padding(6)};
  padding-bottom: ${({theme}) => theme.padding(6)};
`;