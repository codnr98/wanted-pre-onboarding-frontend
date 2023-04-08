import {useEffect, useState} from "react";
import getToDoList from "../apis/getToDoList";
import ToDoForm from "../components/ToDoForm";
import ToDo from "../components/ToDo";
import {useNavigate} from "react-router";

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const navigate = useNavigate();

  const patchToDoList = async () => {
    const response = await getToDoList();
    console.log(response);
    setToDos(response);
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/signin");
    }
    patchToDoList();
  }, []);

  return (
    <div>
      <h1 className='text-3xl'>ToDo List</h1>
      <ToDoForm />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
