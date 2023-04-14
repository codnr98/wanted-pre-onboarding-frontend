import {useEffect, useState} from "react";
import getToDoList from "../apis/getToDoList";
import ToDoForm from "../components/ToDoForm";
import ToDo from "../components/ToDo";
import {useNavigate} from "react-router";

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  const patchToDoList = async () => {
    try {
      const response = await getToDoList(accessToken);
      setToDos(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/signin");
    }
    patchToDoList();
    console.log(1);
  }, []);

  return (
    <div className='space-y-1 w-full'>
      <h1 className='text-3xl'>ToDo List</h1>
      <ToDoForm toDos={toDos} setToDos={setToDos} />
      <ul className='flex flex-col'>
        {toDos.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            toDos={toDos}
            setToDos={setToDos}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
