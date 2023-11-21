import React from "react";
import Todo from "./Components/Todo";
import { BrowserRouter, Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;