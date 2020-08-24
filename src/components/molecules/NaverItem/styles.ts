import styled from "styled-components";
import { TextLevel3, TextLevel2 } from "@atoms/Typograph";

export const Container = styled.article`
	display: inline-block;
	width: 280px;
	overflow: hidden;
`;

export const Avatar = styled.img`
	width: 280px;
	height: 280px;
	object-fit: cover;
	object-position: center;
	margin-bottom: ${({ theme }) => theme.margin(3)};
	cursor: pointer;
	transition: 0.3s ease-in-out all;

	&:hover {
		transform: scale(1.05)
	}
`;

export const Name = styled(TextLevel3)`
	display: block;
	margin-bottom: ${({ theme }) => theme.margin(2)};
`;

export const Role = styled(TextLevel2)`
	display: block;
`;

export const IconsContainer = styled.div`
	font-size: 24px;
	margin-top: ${({ theme }) => theme.margin(2)};
	color: ${({ theme }) => theme.icons.primary};
	span {
		cursor: pointer;
		margin-right: ${({ theme }) => theme.margin(2)}
	}
`;