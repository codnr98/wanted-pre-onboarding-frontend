import {useState} from "react";
import putToDo from "../apis/putToDo";
import deleteToDo from "../apis/deleteToDo";

function ToDo({id, todo, isCompleted, toDos, setToDos}) {
  const [title, setTitle] = useState(todo);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [isModify, setIsModify] = useState(false);

  const pathModifyData = {
    todo: "",
    isCompleted: true,
  };

  const handleClickModify = () => {
    setIsModify(true);
  };

  const handleClickCancel = () => {
    setIsModify(false);
    setTitle(todo);
  };

  const handleClickSubmit = async () => {
    pathModifyData.todo = title;
    const response = await putToDo(id, pathModifyData);
    const index = toDos.findIndex((todo) => todo.id === response.id);
    setToDos([...toDos.slice(0, index), response, ...toDos.slice(index + 1)]);
    setIsModify(false);
  };

  const handleChangeTitle = (e) => {
    const {value} = e.target;
    setTitle(value);
  };

  const handleChangeCheckbox = async () => {
    setIsComplete(!isComplete);
    pathModifyData.isCompleted = !isComplete;
    pathModifyData.todo = title;
    await putToDo(id, pathModifyData);
  };

  const handleClickDelete = async () => {
    await deleteToDo(id);
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={isComplete}
          onChange={handleChangeCheckbox}
        />
        {isModify ? (
          <input
            data-testid='modify-input'
            onChange={handleChangeTitle}
            value={title}></input>
        ) : (
          <span>{title}</span>
        )}
      </label>

      {isModify ? (
        <>
          <button data-testid='submit-button' onClick={handleClickSubmit}>
            제출
          </button>
          <button data-testid='cancel-button' onClick={handleClickCancel}>
            취소
          </button>
        </>
      ) : (
        <>
          <button data-testid='modify-button' onClick={handleClickModify}>
            수정
          </button>
          <button data-testid='delete-button' onClick={handleClickDelete}>
            삭제
          </button>
        </>
      )}
    </li>
  );
}

export default ToDo;
