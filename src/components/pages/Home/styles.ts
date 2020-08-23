import styled from "styled-components";
import _Container from "@atoms/Container";

export const Container = styled(_Container)``;

export const HeaderContainer = styled.div`
  margin-bottom: ${({theme}) => theme.margin(9)};
`;

export const NewNaverButton = styled.div`
  width: 176px;
`;

export const Content = styled.div``;

export const Title = styled.h1``;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({theme}) => theme.margin(8)};
  justify-content: space-between;
`;