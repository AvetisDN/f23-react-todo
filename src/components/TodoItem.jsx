import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div
      className={`flex gap-4 items-center  px-3 py-2 rounded ${
        todo.completed ? "italic bg-slate-200 text-gray-400" : "bg-gray-50"
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
