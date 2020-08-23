import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: ${({theme}) => theme.padding(8)};
  width: 90vw;
  max-width: 592px;
  position: relative;
  box-sizing: border-box;
  min-height: 160px;

  >span {
    display: block;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 23px;
`;