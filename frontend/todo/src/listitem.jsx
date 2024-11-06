import React from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
} from "@mui/material";
import { padding, styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { format } from "date-fns";

function ListBox(props) {
  const handleDelete = () => {
    props.deletebutton(props.index);
  };

  const handleComplete = () => {
    props.completebutton(props.index);
  };

  const handleEdit = () => {
    props.editbutton(props.index);
  };

  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        height: "80px",
        padding: "5px",
        flexDirection: "column",
      }}
    >
      <Typography style={{ textAlign: "start" }}>
        Title : {props.data.name}
      </Typography>
      <Typography style={{ textAlign: "start" }}>
        Description : {props.data.task}
      </Typography>
      <Box
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Typography style={{ textAlign: "start", flex: 1, marginTop: "5px" }}>
          Date : {format(props.data.dueDate, "MM-dd-yyyy")}
        </Typography>

        <Box
          style={{
            display: "flex",
            alignSelf: "end",
          }}
        >
          <IconButton
            edge="end"
            aria-label="completed"
            sx={{ display: props.show }}
            onClick={handleComplete}
          >
            <CheckIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="edit"
            sx={{ display: props.show }}
            onClick={handleEdit}
          >
            <EditIcon />
          </IconButton>

          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ListBox;
