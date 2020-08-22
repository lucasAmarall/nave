import styled from "styled-components";
import { IBaseFontStyle } from "@interfaces/BaseFontStyle.interface";

const BaseFontStyle = styled.span`
	font-family: Montserrat;
	font-style: normal;
	color: ${({ theme, color }: IBaseFontStyle) => (
    color ? theme.texts[color] : theme.texts.primary
  )};
`;

export const HeadingLevel1 = styled(BaseFontStyle)`
	font-weight: 600;
	font-size: 40px;
	line-height: 48px;
`;

export const HeadingLevel2 = styled(BaseFontStyle)`
	font-weight: 600;
	font-size: 24px;
	line-height: 36px;
`;

export const TextLevel1 = styled(BaseFontStyle)`
	font-size: 16px;
	line-height: 36px;
`;

export const TextLevel2 = styled(BaseFontStyle)`
	font-size: 16px;
	line-height: 24px;
`;

export const TextLevel3 = styled(BaseFontStyle)`
	font-weight: 600;
	font-size: 16px;
	line-height: 18px;
`;

export const TextLevel4 = styled(BaseFontStyle)`
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
`;

export const TextLevel5 = styled(BaseFontStyle)`
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
`;
