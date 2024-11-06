import "./App.css";
import TodoApp from "./page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./task";
import Completed from "./completed";
import NotFound from "./notfound";
import FixedBottomBox from "./bottombox";
import { Box } from "@mui/material";
function App() {
  return (
    <Box className="App" style={{ display: "flex" }}>
      <Box style={{ flex: 1 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoApp />}></Route>
            <Route path="task" element={<Task />} />
            <Route path="completed" element={<Completed />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FixedBottomBox />
        </BrowserRouter>
      </Box>
    </Box>
  );
}

export default App;
