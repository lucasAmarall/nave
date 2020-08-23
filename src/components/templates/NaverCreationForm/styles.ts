import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 592px;
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 280px 280px;
  grid-gap: 30px 32px;
`;


export const SaveButton = styled.div`
  width:176px;
  justify-self: self-end;
`;