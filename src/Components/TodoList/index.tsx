import React, { useState, useEffect } from "react";
import { Todo } from "../../types";
import {
  DetailsContainer,
  Heading,
  PageContainer,
  SelectContainer,
  Selects,
} from "./TodoList.style";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import CustomTableContainer from "../../CustomTableContainer/CustomTableContainer";
import { GridSearchIcon, GridSortModel } from "@mui/x-data-grid-pro";
import PaginationBox from "../../Pagination";
import theme from "../../theme";
import { ButtonTheme } from "../../button";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodos: (ids: number[]) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodos }: TodoListProps) => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNo, setPageNo] = useState<number>(1);
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<number[]>([]);

  useEffect(() => {
    const updatedFilteredData = todos.filter((item) =>
      item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(updatedFilteredData);
  }, [searchTerm, todos]);

  const handleSetPageSizeChange = (event: any) => {
    const newPageSize: number = event.target.value as number;
    setPageSize(newPageSize);
    setPageNo(1); // Reset page number to 1 when page size changes
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const TableColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    {
      field: "completed",
      headerName: "Completed",
      width: 130,
      renderCell: (params: any) => (
        <span>{params.row.completed ? "Completed" : "Uncompleted"}</span>
      ),
    },
    {
      field: "description",
      headerName: "Description",
      width: 130,
      renderCell: (params: any) => <span>{params.row.description}</span>,
    },
  ];

  const handleSortChange = (newSortModel: GridSortModel) => {
    setSortModel(newSortModel);
  };

  const startIndex = (pageNo - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredTodos.length);
  const paginatedData = filteredTodos.slice(startIndex, endIndex);

  const handlePaginationChange = (newPage: number) => {
    setPageNo(newPage);
  };

  const handleCheckboxChange = (event: any, row: any) => {
    debugger;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (!selectedCheckboxes?.includes(row.id)) {
        setSelectedCheckboxes((prevSelected) => [...prevSelected, row.id]);
      }
    } else {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((id) => id !== row.id)
      );
    }
  };

  const handleDeleteAll = () => {
    const allIds = filteredTodos.map((todo) => todo.id);
    deleteTodos(allIds);
    setSelectedCheckboxes([]);
  };

  return (
    <div className="px3 py3">
      <PageContainer>
        <DetailsContainer className="flex py2 px2 items-center">
          <Heading className="font-15">Todo List Data</Heading>
          <SelectContainer>
            <Selects
              value={pageSize}
              onChange={handleSetPageSizeChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Selects>
          </SelectContainer>
          <div className="flex items-center relative">
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="search-input"
              placeholder="Search"
            />
            <GridSearchIcon
              className="pointer absolute"
              style={{ right: "5px" }}
            />
          </div>

          <button
            onClick={handleDeleteAll}
            disabled={filteredTodos.length === 0}
            className="delete-cls pointer font-14 border-blue"
          >
            Delete All
          </button>
        </DetailsContainer>
        <div className="flex mx2 mb2">
          <CustomTableContainer
            tableRows={paginatedData}
            tableColumns={TableColumns}
            loading={false}
            sortModel={sortModel}
            onSortChange={handleSortChange}
            checkBoxValue={true}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className="flex justify-between items-center px1 py1 pt2 pb1">
          <PaginationBox
            count={filteredTodos.length}
            onChange={handlePaginationChange}
            pageSize={pageSize}
          />
        </div>
      </PageContainer>
    </div>
  );
};

export default TodoList;
