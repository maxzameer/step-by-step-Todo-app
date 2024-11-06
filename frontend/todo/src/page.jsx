import React, { useState } from "react";
import { Container, TextField, Button, Paper, Box, Grid2 } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import { format } from "date-fns";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const [nameValue, setNameValue] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const [dateValue, setdateValue] = useState(null);

  const handleAddTodo = () => {
    if (nameValue.trim()) {
      const data = {
        name: nameValue,
        task: taskValue,
        dueDate: dateValue,
        status: "pending",
      };

      axios
        .post("http://localhost:8080/todo/create", data)
        .then((response) => {
          alert("successfull" + response.data);
        })
        .catch();

      setTodos([...todos, data]);
      setNameValue("");
      setTaskValue("");
      setdateValue(null);
    } else {
      alert("Please fill the fields");
    }
  };

  const handleDateChange = (date) => {
    setdateValue(date);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "md",
          alignItems: "center",
          flexDirection: "column",

          flex: 1,
        }}
      >
        <Container maxWidth="md" style={{ marginBottom: "2rem" }}>
          <h4 style={{ textAlign: "left" }}>Add Task</h4>

          <Paper style={{ padding: "10px" }}>
            <Box
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <TextField
                style={{ marginTop: "1rem" }}
                label="Task Name"
                variant="outlined"
                fullWidth
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
              />

              <TextField
                style={{ marginTop: "1rem" }}
                label="Add a new task"
                variant="outlined"
                fullWidth
                value={taskValue}
                onChange={(e) => setTaskValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Basic date picker"
                    value={dateValue}
                    onChange={handleDateChange}
                    format="MM-DD-YYYY"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </DemoContainer>
              </LocalizationProvider>

              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTodo}
                style={{
                  margin: "1rem",
                  width: "150px",
                  height: "50px",
                  alignSelf: "end",
                }}
              >
                Add
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default TodoApp;
