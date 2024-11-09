import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/Context";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
