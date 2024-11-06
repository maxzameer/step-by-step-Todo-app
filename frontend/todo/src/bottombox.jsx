import React from "react";

import { Button, Box, Typography, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "auto",
  textAlign: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  margin: "10px",
  backgroundColor: "#00796b",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#004d40",
  },
}));

function FixedBottomBox() {
  const navigate = useNavigate();
  return (
    <StyledBox
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "md",
        height: "100px",
        alignItems: "center",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Container maxWidth="md" style={{ marginBottom: "1rem" }}>
        <Paper style={{ padding: "10px" }}>
          <Box
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <StyledButton
              variant="contained"
              color="primary"
              style={{
                margin: "1rem",
                width: "150px",
                height: "50px",
                flex: 1,
              }}
              onClick={() => {
                navigate("/task");
              }}
            >
              Task
            </StyledButton>

            <StyledButton
              variant="contained"
              color="primary"
              style={{
                margin: "1rem",
                width: "150px",
                height: "50px",
                flex: 1,
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Add
            </StyledButton>

            <StyledButton
              variant="contained"
              color="primary"
              style={{
                margin: "1rem",
                width: "150px",
                height: "50px",
                flex: 1,
              }}
              onClick={() => {
                navigate("/completed");
              }}
            >
              Completed
            </StyledButton>
          </Box>
        </Paper>
      </Container>
    </StyledBox>
  );
}

export default FixedBottomBox;
