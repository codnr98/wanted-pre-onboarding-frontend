import {useEffect, useState} from "react";
import getToDoList from "../apis/getToDoList";

function ToDoList() {
  const [toDos, setToDos] = useState([]);

  const patchToDoList = async () => {
    const response = await getToDoList();
    console.log(response);
    return response;
  };

  useEffect(() => {
    patchToDoList();
  }, []);

  return (
    <div>
      <h1 className='text-3xl'>ToDo List</h1>

      <form>
        <input data-testid='new-todo-input' />
        <button data-testid='new-todo-add-button'>추가</button>
      </form>

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
