import styled from "styled-components";
import theme from "../../theme";
import { Select } from "@mui/material";

export const PageContainer = styled.div`
	width: auto;
	min-width: 80%;
	height: auto;
	border: 1px solid ${theme.color.borderGray};
	background: white;
	border-radius: 10px;
`;

export const DetailsContainer = styled.div`
	width: auto;
	min-width: 90%;
`;

export const Heading = styled.div`
	font-family: "Poppins";
	min-width: 11%;
	width: auto;
`;

export const SelectContainer = styled.div`
	min-width: 10%;
	width: auto;
`;

export const Selects = styled(Select)`
	height: 33px;
`;