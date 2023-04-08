import {useState} from "react";
import postToDo from "../apis/postToDo";

function ToDoForm({toDos, setToDos}) {
  const [toDo, setToDo] = useState("");

  const pathData = {
    todo: "",
  };

  const handleChangeToDo = (e) => {
    const {value} = e.target;
    setToDo(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    pathData.todo = toDo;
    try {
      const response = await postToDo(pathData);
      setToDos([...toDos, response]);
      console.log(toDos);
      setToDo("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
}

export default ToDoForm;