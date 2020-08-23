import styled from "styled-components";
import { IThemeLogoProps } from "@interfaces/ThemedLogoProps.interfce";

export const Container = styled.h1`
  font-size: ${({small }: IThemeLogoProps) => small ? 36 : 60}px;
  overflow: hidden;
  color: ${({theme}: IThemeLogoProps) => theme.texts.primary}
`;

export const GhostText = styled.span`
  font-size: 1px;
  opacity: 0;
`;