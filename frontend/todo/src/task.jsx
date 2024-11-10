import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Box,
  Grid2,
  hexToRgb,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { format } from "date-fns";
import PopupModal from "./popup";
import ListBox from "./listitem";

const Task = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleComplete = (index) => {
    let a = todos[index].id;

    let data = {
      id: todos[index].id,
      name: todos[index].name,
      dueDate: todos[index].dueDate,
      task: todos[index].task,
      state: "completed",
    };

    axios
      .put("http://localhost:8080/todo/update/" + a, data)
      .then(alert("Task updated successfully!"));
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    let a = todos[index].id;

    axios.delete("http://localhost:8080/todo/delete/" + a).then((response) => {
      alert("delete succesfully");
    });
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const [editdata, setEditdata] = useState({});
  const handleEditTodo = (index) => {
    let a = todos[index].id;

    let data = {
      id: todos[index].id,
      name: todos[index].name,
      dueDate: todos[index].dueDate,
      task: todos[index].task,
      state: "pending",
    };

    setEditdata(data);

    handleClickOpen();
  };

  const [trigger, setTrigger] = useState(false);

  const handleTrigger = () => {
    setTrigger((trigger) => !trigger);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/todo")
      .then((response) => {
        setTodos(response.data.filter((data) => data.state === "pending"));
      })
      .catch((err) => {
        console.error("Network Error: ", err); // Logs the error
      });
  }, [trigger]);

  // Function to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  const visibility = {
    hide: "none",
    show: "inline-block",
  };
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Container style={{ margin: "10px" }}>
        <h4 style={{ textAlign: "left" }}>Task To Complete</h4>
        <Paper style={{ height: "100%" }}>
          <List
            style={{
              marginTop: "10px",
              position: "relative",
              overflow: "auto",
              maxHeight: "100%",
            }}
            subheader={<li />}
          >
            {todos.map((todo, index) => (
              <ListItem
                sx={{
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white",
                  "&:hover": {
                    backgroundColor: "#dcdcdc",
                  },
                }}
                key={index}
              >
                <ListBox
                  data={todo}
                  deletebutton={handleDeleteTodo}
                  completebutton={handleComplete}
                  editbutton={handleEditTodo}
                  index={index}
                  show={visibility.show}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
      <PopupModal
        open={handleClickOpen}
        close={handleClose}
        state={open}
        data={editdata}
        triggerEffect={handleTrigger}
      />
    </Box>
  );
};

export default Task;
