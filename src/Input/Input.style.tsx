import styled from "styled-components";
// import theme from "styles/theme";
import { Typography as MuiTypography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import theme from "../theme";

export const FormInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding-top: 1rem;
	label {
		color: #3d3d3d;
		cursor: pointer;
	}
`;
export const InputBox = styled.div<any>`
	width: ${(props) => (props?.width ? `${props.width} !important` : "auto")};
	height: ${(props) => (props?.height ? `${props.height} !important` : "46px")};
	border: ${(props) =>
		props?.error ? "1px solid red" : `1px solid ${theme.color.borderGray}`};
	background: #fff;
	border-radius: 5px;
	display: flex;
	align-items: center;
	div {
		display: flex;
		align-items: center;
		padding: 10px 9px;
		cursor: pointer;
	}
`;
export const InputField = styled.input<any>`
	border: ${(props) =>
		props.disabled ? `1px solid ${theme.color.borderGray}` : "none"};
	outline: none;
	flex: 2;
	border-radius: 5px;
	padding: 13px;
	background: none;
	color: black;
	background-color: ${(props) => (props.disabled ? theme.color.lightGray : "")};
	&&:hover {
		cursor: ${(props) => (props.disabled ? "no-drop" : "")};
	}
	&&:focus {
		border: none;
	}
`;

export const Error = styled(MuiTypography)`
	color: ${theme.color.red};
`;
export const Typography2 = styled(MuiTypography)`
	font-size: 14px;
	font-weight: normal;
	color: ${theme.color.secondary};
`;

export const CircularLoading = styled(CircularProgress)`
	color: ${theme.color.primary} !important;
`;
