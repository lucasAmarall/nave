import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${({theme}) => theme.margin(4)};
  margin-right: -${({theme}) => theme.margin(4)};
`;

export const ItemContainer = styled.div`
  margin: 0 ${({theme}) => theme.margin(4)} ${({theme}) => theme.margin(5)};
`;