import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <div className='flex p-4'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/todo' element={<ToDoList />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
