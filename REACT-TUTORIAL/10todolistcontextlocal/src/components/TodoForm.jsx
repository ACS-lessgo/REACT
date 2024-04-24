import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return alert("Please enter todo");
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Add a new task..."
        className="w-full px-3 py-2 border text-gray-600 border-opacity-20 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-blue-700 focus:border-blue-700 active:bg-blue-900"
      >Add</button>
    </form>
  );
}

export default TodoForm;
