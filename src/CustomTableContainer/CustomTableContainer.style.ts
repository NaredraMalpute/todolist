import { styled } from "@mui/material/styles";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Styled from "styled-components";
import theme from "../theme";
import MainTheme from "../theme";
import { DataGrid } from "@mui/x-data-grid";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: MainTheme.color.customBlue + "10",
    color: MainTheme.color.customBlue,
    border: "none", // avoid bottom border of header(<th>)

    // header(<th>)'s first child border left CSS
    "&:first-child": {
      borderRadius: "10px 0 0 10px",
    },
    // tab <tr>'s last child border left CSS
    "&:last-child": {
      borderRadius: "0 10px 10px 0",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  // Add a fixed width for the "Action" column
  minWidth: "200px",
  // Make the "Action" column sticky to the right
  position: "sticky",
  right: 0,
  zIndex: 1,
  backgroundColor: "#fff", // Add a background color for the fixed column
  boxShadow: "0 2px 2px -1px rgba(0, 0, 0, 0.1)", // Add a shadow for separation
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   "&:nth-of-type(odd)": {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // hide last border

  "&:last-child td, &:last-child th": {
    border: "none",
  },
}));
export const StyledDataGrid = styled(DataGrid)<any>`
  width: 100%;
  height: 100%;
  border: none;
  transition: all ease 1s;
  overflow-x: auto !important; /* Add this line to enable horizontal scrolling */

  /* && .MuiDataGrid-columnHeaderTitleContainer {
		justify-content: ${(props) =>
    props.headerLeftAlign ? "left" : "center"} !important;
	} */
  && .MuiDataGrid-iconButtonContainer {
    // make sort icon visible by default
    visibility: visible !important;
  }
  && .MuiDataGrid-sortIcon {
    opacity: inherit !important;
  }
  && .MuiDataGrid-sortIcon path {
    color: ${MainTheme.color.customBlue};
  }

  && .MuiDataGrid-columnHeaders {
    background-color: ${MainTheme.color.customBlue + "10"};
    border-radius: 10px;
    border: none;
  }
  && .MuiDataGrid-pinnedColumnHeaders {
    padding-right: 0px !important;
    background-color: #f3f2fe;
  }
  && .MuiDataGrid-columnHeaderTitle {
    color: ${MainTheme.color.customBlue};
  }
  && .MuiDataGrid-columnSeparator {
    background-color: ${MainTheme.color.customBlue + "10"};
    visibility: visible;
    display: none;
    width: 0;
  }
  && .muidatagrid-pinnedcolumns {
    background: white;
  }

  && .MuiDataGrid-cell--withRenderer {
    background: white;
  }
  && .MuiDataGrid-cell:focus {
    outline: none; // Hides the focus border on cell selection
  }
  && .MuiDataGrid-virtualScroller::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  && .MuiDataGrid-cell {
    overflow: auto;
    white-space: inherit !important;
  }

  && .MuiDataGrid-virtualScroller {
    min-height: 45px;
  }

  && .MuiDataGrid-cellContent {
    text-overflow: inherit !important;
  }
  && .MuiDataGrid-row:hover {
    background-color: inherit; /* Prevent hover color */
  }
  && .MuiDataGrid-row.Mui-selected {
    background-color: ${theme.color.white};
  }
  // For OutLine None When We click on Columns
  && .MuiDataGrid-cell:focus-within {
    outline: none !important;
  }
  && .MuiDataGrid-columnHeader:focus-within {
    outline: none !important;
  }
`;

// export const StyledDataGrid = styled(DataGridPro)`
// 	&& .muidatagrid-iconbuttoncontainer {
// 		visibility: "visible";
// 	}
// 	&& .MuiDataGrid-virtualScroller {
// 		min-height: "160px !important";
// 	}
// 	&& .MuiDataGrid-sortIcon {
// 		opacity: "inherit !important";
// 		/* color: "#3E35F1", */
// 	}
// 	&& .MuiDataGrid-pinnedColumns {
// 		background-color: white;
// 	}

// 	&& .MuiDataGrid-cell--withRenderer {
// 		background-color: white;
// 	}

// 	&& .MuiDataGrid-cell:focus {
// 		outline: "none"; // Hides the focus border on cell selection
// 	}
// 	&& .MuiDataGrid-virtualScroller::-webkit-scrollbar {
// 		width: "1px";
// 	}
// 	&& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track {
// 		background: "#f1f1f1";
// 	}
// 	&& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb {
// 		background-color: "#BFBFFF";
// 	}
// 	&& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover {
// 		background-color: "#BFBFFF";
// 	}
// `;

