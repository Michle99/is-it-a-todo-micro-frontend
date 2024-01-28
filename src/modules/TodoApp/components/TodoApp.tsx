import React, { useState } from 'react';
import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import TodoForm from "../../TodoForm/components/TodoForm"
import TodoList from '../../TodoList/components/TodoList';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string; completed: boolean }[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now().toString(), text, completed: false }]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id: string, newText: string) => {
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