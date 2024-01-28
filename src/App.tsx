import React, { useState } from 'react';
import TodoList from './modules/TodoList/components/TodoList'
import TodoForm from './modules/TodoForm/components/TodoForm';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = { id: Date.now().toString(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Micro Frontend Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
    </div>
  );
};

export default App;