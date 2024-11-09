import React, { useState } from "react";
import { TodosContext } from "./Context";
import todosInit from "../data";

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosInit);

  const addTodo = (newTodo) => {
    const tmp = todos.slice();
    tmp.push({
      id: tmp.length + 1,
      title: newTodo,
      completed: false,
    });
    setTodos(tmp);
  };

  const toggleTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const tmp = todos.slice();
    tmp[index].completed = !tmp[index].completed;
    setTodos(tmp);
  };

  const deleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const tmp = todos.slice();
    tmp.splice(index, 1);
    setTodos(tmp);
  };

  const ctx = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
