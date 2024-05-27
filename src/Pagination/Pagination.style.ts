import { Pagination } from "@mui/material";
import { styled } from "styled-components";
import theme from "../theme";


export const PaginationContainer = styled(Pagination)<{
	currentSelected: boolean;
}>`
	&& .Mui-selected {
		background: ${(props) =>
			props.currentSelected ? "" : `${theme.color.primary} !important`};
		color: ${(props) =>
			props.currentSelected ? "" : `${theme.color.white} !important`};
	}
`;
