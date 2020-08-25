import styled from "styled-components";
import _Container from "@atoms/Container";

export const Container = styled(_Container)`
`;

export const HeaderContainer = styled.div`
  margin-bottom: ${({theme}) => theme.margin(9)};
`;

export const ContentContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  margin-top: ${({theme}) => theme.margin(8)};
`;

export const TitleContainer= styled.span`
  cursor: pointer;
`;

export const Title = styled.span`
  margin-left: ${({theme}) => theme.margin(4)}
`;