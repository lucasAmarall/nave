import styled from "styled-components";
import _Container from "@atoms/Container";

export const Container = styled(_Container)``;

export const HeaderContainer = styled.div`
  margin-bottom: ${({theme}) => theme.margin(9)};
`;

export const Content = styled.div``;

export const Title = styled.h1``;

export const ListHeader = styled.div`
  margin-bottom: ${({theme}) => theme.margin(8)};
`;