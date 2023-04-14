import {useState} from "react";
import putToDo from "../apis/putToDo";
import deleteToDo from "../apis/deleteToDo";
import {smButtonStyle, smInputStyle} from "../utils/globalStyle";

function ToDo({id, todo, isCompleted, toDos, setToDos, accessToken}) {
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
    const response = await putToDo(id, pathModifyData, accessToken);
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
    await putToDo(id, pathModifyData, accessToken);
  };

  const handleClickDelete = async () => {
    await deleteToDo(id, accessToken);
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <li className='flex justify-between'>
      <label className='w-10/12'>
        <input
          type='checkbox'
          checked={isComplete}
          onChange={handleChangeCheckbox}
          className='mr-1'
        />
        {isModify ? (
          <input
            data-testid='modify-input'
            onChange={handleChangeTitle}
            value={title}
            className={`${smInputStyle} w-11/12`}></input>
        ) : (
          <span>{title}</span>
        )}
      </label>

      {isModify ? (
        <div>
          <button
            data-testid='submit-button'
            onClick={handleClickSubmit}
            className={smButtonStyle}>
            제출
          </button>
          <button
            data-testid='cancel-button'
            onClick={handleClickCancel}
            className={smButtonStyle}>
            취소
          </button>
        </div>
      ) : (
        <div>
          <button
            data-testid='modify-button'
            onClick={handleClickModify}
            className={smButtonStyle}>
            수정
          </button>
          <button
            data-testid='delete-button'
            onClick={handleClickDelete}
            className={smButtonStyle}>
            삭제
          </button>
        </div>
      )}
    </li>
  );
}

export default ToDo;
