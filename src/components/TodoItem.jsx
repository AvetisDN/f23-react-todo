import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../context/Context";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodosContext);

  useEffect(() => {
    console.log("item mounted");

    return () => console.log("item unmounted");
  }, []);

  return (
    <div
      className={`flex gap-4 items-center  px-3 py-2 rounded ${
        todo.completed
          ? "italic bg-gray-200 dark:bg-gray-700  text-gray-400"
          : "bg-gray-50 dark:bg-gray-900"
      }`}
    >
      <div className="grow text-xl">{todo.title}</div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="w-6 h-6"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <button
          className="bg-red-500 text-gray-50 w-6 h-6 flex items-center justify-center rounded"
          onClick={() => deleteTodo(todo.id)}
        >
          <XMarkIcon className="h-4" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
