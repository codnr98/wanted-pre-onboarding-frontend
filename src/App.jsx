import Input from "./components/Input";

function App() {
  return (
    <div>
      <h1 className='text-3xl'>ToDoList</h1>
      <Input placeholder={"Email"} label={"Email"} id={"email"}></Input>
    </div>
  );
}

export default App;
