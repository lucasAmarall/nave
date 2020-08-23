import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.backgrounds.primary};
  padding: ${({theme}) => theme.padding(8)};
  width: 90vw;
  max-width: 592px;
  position: relative;
  box-sizing: border-box;
  min-height: 160px;
  margin-top: -30px;
  border: 1px solid ${({theme}) => theme.borders.primary};
  >span {
    display: block;
  }
`;

export const Title = styled.div`
  margin-bottom: ${({theme}) => theme.margin(6)};
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 23px;
`;