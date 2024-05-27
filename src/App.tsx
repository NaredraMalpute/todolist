// src/components/TodoApp.tsx
import React, { useState } from "react";
import { Todo } from "./types";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "../src/styles/utilities.css";
import Header from "./Components/Header/Header";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const addTodo = (todo: {
    name: string;
    date: string;
    status: string;
    description: string;
  }) => {
    const newTodo: Todo = {
      id: nextId,
      ...todo,
      completed: todo.status === "completed",
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodos = (ids: number[]) => {
    debugger;
    setTodos(todos.filter(todo => !ids.includes(todo.id)));
  };

  const handleToggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <div className="px2 py2">
        <button onClick={handleToggleForm} className="button-cls ml3">
          {isFormVisible ? "Close Todo" : "Open Todo"}
        </button>
        {isFormVisible && <TodoInput addTodo={addTodo} />}
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos} />
      </div>
    </div>
  );
};

export default App;
