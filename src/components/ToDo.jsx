function ToDo({todo, id, isCompleted}) {
  return (
    <li key={id}>
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
