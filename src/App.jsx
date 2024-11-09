import React, { useContext, useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ThemeContext } from "./context/Context";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className={theme}>
      <button
        className="fixed top-4 right-4 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-200 w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <SunIcon className="h-6" />
        ) : (
          <MoonIcon className="h-6" />
        )}
      </button>
      <div className="w-full h-screen bg-gray-300 text-gray-700 dark:bg-gray-950 dark:text-gray-200 font-medium grid place-items-center">
        <div className="w-full max-w-96 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-center">React Todo {}</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
