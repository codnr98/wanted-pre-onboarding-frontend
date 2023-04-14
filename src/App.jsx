import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <div className='flex p-4 w-96'>
      <HashRouter basename='wanted-pre-onboarding-frontend'>
        <Switch>
          <Route path='/' element={<Main />} />
          <Route path='/todo' element={<ToDoList />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
