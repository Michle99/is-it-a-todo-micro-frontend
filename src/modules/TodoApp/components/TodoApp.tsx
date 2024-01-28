import React, { useState } from 'react';
import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import TodoForm from "../../TodoForm/components/TodoForm"
import TodoList from '../../TodoList/components/TodoList';

export interface Todo {
  id: number; 
  text: string; 
  completed: boolean
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  console.log("Todo:", todos);

  const handleAddTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text, completed: false }]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
        <Typography component="h1" variant="h5">
          Todo App
        </Typography>
        <TodoForm onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onUpdate={handleUpdateTodo}
        />
      </Paper>
    </Container>
  );
};

export default TodoApp;