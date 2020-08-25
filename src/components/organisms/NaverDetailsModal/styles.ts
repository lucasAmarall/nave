import styled from "styled-components";
import { TextLevel2, HeadingLevel2 } from "@atoms/Typograph";

export const Container = styled.div`
  background: ${({theme}) => theme.backgrounds.primary};
  height: 90vh;
  max-height: 503px;
  width: 90vw;
  max-width: 1007px;
  display: flex;
  position: relative;
  ${({theme}) => (
    theme.dark && `border: 1px solid ${theme.borders.primary};`
  )}
`;

export const Picture = styled.img`
  flex: 1;
  max-width: 50%;
`;

export const Title = styled(HeadingLevel2)`
  display: block;
  margin-bottom: ${({theme}) => theme.margin(3)};
`;

export const FieldTitle = styled(TextLevel2)`
  display: block;
  font-weight: 600;
  margin-top: ${({theme}) => theme.margin(6)};
  margin-bottom: ${({theme}) => theme.margin(3)};
`;

export const InfoContainer = styled.div`
  flex: 1;
  max-width: 50%;
  overflow: auto;
  padding: ${({theme}) => theme.padding(8)};
  position: relative;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 23px;
  cursor: pointer;
  z-index: 99;
	color: ${({ theme }) => theme.icons.primary};
`;

export const IconsContainer = styled.div`
  font-size: 24px;
  position: absolute;
  bottom: 24px;
  left: 32px;
	margin-top: ${({ theme }) => theme.margin(2)};
	color: ${({ theme }) => theme.icons.primary};
	span {
		cursor: pointer;
		margin-right: ${({ theme }) => theme.margin(2)}
	}
`;