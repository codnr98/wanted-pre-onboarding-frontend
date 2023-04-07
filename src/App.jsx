import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
