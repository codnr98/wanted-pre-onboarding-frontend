import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Input from "./components/Input";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <h1 className='text-3xl'>ToDoList</h1>
      <Input placeholder={"Email"} label={"Email"} id={"email"}></Input>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
