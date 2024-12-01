import { useSelector } from 'react-redux';
import Input from './Components/Input/Input';
import TodoItems from './Components/Input/TodoItems/TodoItems';

function App() {
  //عشان اقدر الوب على Array
  const todolist = useSelector((state) => state.todos.todoList);
  console.log(todolist);

  return (
    <>
      <div className="app flex h-screen items-center ">
        <div className="container grid gap-10 p-10 grid-cols-12 bg-slate-800 rounded shadow-lg">
          <div className="col-span-6">
            <Input />
          </div>
          <div className="col-span-6 space-y-2 bg-white p-3 rounded-md">
            {todolist.map((todo) => (
              <TodoItems key={todo.id} info={todo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
