import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeTodo} from "../features/todo/todoSlice";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoSlice.todos);
  console.log("Todos", todos);
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.title} <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button></li>;
      })}
    </>
  );
}

export default Todos;
