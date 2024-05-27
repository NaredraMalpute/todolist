// src/components/TodoInput.tsx
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface TodoInputProps {
  addTodo: (todo: {
    name: string;
    date: string;
    status: string;
    description: string;
  }) => void;
}

const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" &&
        date !== "" &&
        status !== "" &&
        description.trim() !== ""
    );
  }, [name, date, status, description]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      addTodo({ name, date, status, description });
      setName("");
      setDate("");
      setStatus("");
      setDescription("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <Card sx={{ width: "35%" }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            Add Todo
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                label="Name"
                variant="outlined"
                fullWidth
                size="small"
              />

              <TextField
                type="date"
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
                size="small"
                inputProps={{ max: new Date().toISOString().split("T")[0] }} // Set max attribute to current date
              />

              <FormControl fullWidth size="small">
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  label="Status"
                >
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="uncompleted">Uncompleted</MenuItem>
                </Select>
              </FormControl>

              <TextareaAutosize
                minRows={4}
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: "95%",
                  marginTop: "8px",
                  padding: "8px",
                  borderColor: "#c4c4c4",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
                disabled={!isFormValid}
              >
                Add Todo
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TodoInput;
