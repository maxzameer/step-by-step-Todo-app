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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { format } from "date-fns";
import axios from "axios";
import ListBox from "./listitem";

const Completed = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const visibility = {
    hide: "none",
    show: "inline-block",
  };

  const handleDeleteTodo = (index) => {
    let a = todos[index].id;
    axios.delete("http://localhost:8080/todo/delete/" + a);
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/todo")
      .then((response) => {
        setTodos(response.data.filter((data) => data.state === "completed"));
      })
      .catch((err) => {
        console.error("Network Error: ", err);
      });
  }, []);

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
        <h4 style={{ textAlign: "left" }}>Completed</h4>
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
                  index={index}
                  show={visibility.hide}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
};

export default Completed;
