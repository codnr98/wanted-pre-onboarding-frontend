import {useEffect, useState} from "react";
import getToDoList from "../apis/getToDoList";
import ToDoForm from "../components/ToDoForm";

function ToDoList() {
  const [toDos, setToDos] = useState([]);

  const patchToDoList = async () => {
    const response = await getToDoList();
    console.log(response);
    setToDos(response);
  };

  useEffect(() => {
    patchToDoList();
  }, []);

  return (
    <div>
      <h1 className='text-3xl'>ToDo List</h1>
      <ToDoForm />
      <ul>
        <li>
          <label>
            <input type='checkbox' />
            <span>TODO 1</span>
          </label>
          <button data-testid='modify-button'>수정</button>
          <button data-testid='delete-button'>삭제</button>
        </li>
      </ul>
    </div>
  );
}

export default ToDoList;
