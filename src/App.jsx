import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import todosInit from "./data";

const App = () => {
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

  return (
    <div className="w-full h-screen bg-gray-300 text-gray-700 font-medium grid place-items-center">
      <div className="w-full max-w-96 p-6 bg-gray-100 rounded-xl shadow-xl flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-center">React Todo</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
