import * as React from "react";
import { StyledDataGrid } from "./CustomTableContainer.style";
import { GridSortModel } from "@mui/x-data-grid-pro";

interface ICustomTableContainer {
  tableColumns: any[];
  tableRows: any;
  sortModel?: GridSortModel;
  onSortChange?: (newSortModel: GridSortModel) => void;
  loading?: any;
  checkBoxValue?: boolean;
  onCheckboxChange?: (event: any, row: any) => void;
  headerLeftAlign?: boolean;
}

const CustomTableContainer = ({
  tableColumns,
  tableRows,
  sortModel,
  onSortChange,
  loading,
  checkBoxValue,
  onCheckboxChange,
  headerLeftAlign,
}: ICustomTableContainer) => {
  const CustomNoRowsOverlay = () => {
    return (
      <span className="flex items-center justify-center font-16 pt1">
        No Data Found
      </span>
    );
  };

  return (
    <StyledDataGrid
      rows={tableRows}
      columns={tableColumns}
      disableRowSelectionOnClick
      hideFooterPagination
      hideFooterSelectedRowCount
      hideFooter
      getRowId={(row: any) => row?.id}
      initialState={{
        pinnedColumns: { right: ["actions"] },
      }}
      sortModel={sortModel}
      headerLeftAlign={headerLeftAlign}
      onSortModelChange={onSortChange}
      checkboxSelection={checkBoxValue}
      disableColumnMenu
      disableColumnSelector
      onRowSelectionModelChange={(selectedRows: any) => {
        const isChecked = selectedRows.length > 0; // Check if any row is selected
        tableRows.forEach((row: any) => {
          const isRowSelected = selectedRows.includes(row.Id);
          const checkedValue = isRowSelected ? isChecked : false;

          onCheckboxChange &&
            onCheckboxChange({ target: { checked: checkedValue } }, row);
        });
      }}
      components={{
        NoRowsOverlay: CustomNoRowsOverlay,
      }}
    />
  );
};

export default CustomTableContainer;
