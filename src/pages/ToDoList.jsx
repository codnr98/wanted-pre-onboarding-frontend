import {useEffect, useState} from "react";
import getToDoList from "../apis/getToDoList";
import postToDo from "../apis/postToDo";

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const pathData = {
    todo: "",
  };

  const patchToDoList = async () => {
    const response = await getToDoList();
    console.log(response);
    setToDos(response);
  };

  const handleChangeToDo = (e) => {
    const {value} = e.target;
    setToDo(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    pathData.todo = toDo;
    try {
      await postToDo(pathData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    patchToDoList();
  }, []);

  return (
    <div>
      <h1 className='text-3xl'>ToDo List</h1>

      <form>
        <input
          data-testid='new-todo-input'
          value={toDo}
          onChange={handleChangeToDo}
        />

        <button data-testid='new-todo-add-button' onClick={handleClick}>
          추가
        </button>
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
