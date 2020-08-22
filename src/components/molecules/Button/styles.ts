import styled from "styled-components";

export const Container = styled.button`
  display: block;
  background: ${({theme}) => theme.backgrounds.secondary};
  padding: ${({theme}) => theme.padding(2)} 0;
  border: none;
  appearance: none;
`;