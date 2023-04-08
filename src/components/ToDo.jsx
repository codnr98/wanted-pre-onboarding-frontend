import {useState} from "react";
import putToDo from "../apis/putToDo";

function ToDo({id, todo, isCompleted}) {
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
  };

  const handleChange = (e) => {
    const {value} = e.target;
    setTitle(value);
  };

  const handleChangeCheckbox = async () => {
    setIsComplete(!isComplete);
    pathModifyData.isCompleted = !isComplete;
    pathModifyData.todo = title;
    const response = await putToDo(id, pathModifyData);
  };

  return (
    <li>
      <label>
        <input type='checkbox' onChange={handleChangeCheckbox} />
        {isModify ? (
          <input onChange={handleChange} value={title}></input>
        ) : (
          <span>{title}</span>
        )}
      </label>

      {isModify ? (
        <>
          <button data-testid='modify-button' onClick={handleClickSubmit}>
            제출
          </button>
          <button data-testid='delete-button' onClick={handleClickCancel}>
            취소
          </button>
        </>
      ) : (
        <>
          <button data-testid='modify-button' onClick={handleClickModify}>
            수정
          </button>
          <button data-testid='delete-button'>삭제</button>
        </>
      )}
    </li>
  );
}

export default ToDo;
