import {useState} from "react";
import postToDo from "../apis/postToDo";
import {buttonStyle, inputStyle} from "../utils/globalStyle";

function ToDoForm({toDos, setToDos, accessToken}) {
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
      const response = await postToDo(pathData, accessToken);
      setToDos([...toDos, response]);
      setToDo("");
    } catch (error) {}
  };

  return (
    <form className='w-full flex justify-between'>
      <input
        data-testid='new-todo-input'
        value={toDo}
        onChange={handleChangeToDo}
        className={`${inputStyle} w-full mr-1`}
      />
      <button
        data-testid='new-todo-add-button'
        onClick={handleClick}
        className={`${buttonStyle} w-20`}>
        추가
      </button>
    </form>
  );
}

export default ToDoForm;
