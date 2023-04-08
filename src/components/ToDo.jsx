import {useState} from "react";

function ToDo({todo, isCompleted}) {
  const [isComplete, setIsComplete] = useState(isCompleted);
  return (
    <li>
      <label>
        <input type='checkbox' />
        <span>{todo}</span>
      </label>
      <button data-testid='modify-button'>수정</button>
      <button data-testid='delete-button'>삭제</button>
    </li>
  );
}

export default ToDo;
