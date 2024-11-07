import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Paper, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import { format } from "date-fns";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import dayjs from "dayjs";

const PopupModal = (props) => {
  const [nameValue, setNameValue] = useState(props.data.name);
  const [taskValue, setTaskValue] = useState(props.data.task);
  const [dateValue, setdateValue] = useState(dayjs(props.data.dueDate));

  useEffect(() => {
    setNameValue(props.data.name);
    setTaskValue(props.data.task);
    setdateValue(dayjs(props.data.dueDate));
  }, [props.state]);

  const handleAddTodo = () => {
    if (nameValue.trim()) {
      const data = {
        id: props.data.id,
        name: nameValue,
        task: taskValue,
        dueDate: dateValue,
        state: "pending",
      };

      axios
        .put("http://localhost:8080/todo/update/" + data.id, data)
        .then((response) => {
          props.triggerEffect();
          props.close();
          setNameValue("");
          setTaskValue("");
          setdateValue(null);
        })
        .catch();
    } else {
      alert("Please fill the fields");
    }
  };

  const handleDateChange = (date) => {
    setdateValue(date);
  };

  return (
    <div>
      <Dialog
        open={props.state}
        onClose={props.close}
        sx={{ "& .MuiDialog-paper": { width: "600px" } }}
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent style={{ width: "md" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
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
                      Update
                    </Button>
                  </Box>
                </Paper>
              </Container>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupModal;
