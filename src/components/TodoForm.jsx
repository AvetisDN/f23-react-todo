import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New todo..."
        className="bg-gray-50 py-3 px-4 rounded-md outline-2 outline -outline-offset-2 outline-gray-300 grow focus:outline-2 focus:outline-blue-500 transition"
        onInput={handleInput}
        value={input}
      />
      <button
        type="submit"
        className="bg-blue-500 text-gray-50 aspect-square h-[52px] rounded-md flex justify-center items-center transition hover:bg-blue-600 disabled:opacity-30 disabled:pointer-events-none"
        disabled={input.length < 3}
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </form>
  );
};

export default TodoForm;
