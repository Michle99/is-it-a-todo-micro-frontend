import React, { useState } from 'react';
import TodoList from './modules/TodoList/components/TodoList'
import TodoForm from './modules/TodoForm/components/TodoForm';
import { Container, CssBaseline, Paper, Box, Typography } from '@mui/material';

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
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', margin: '50px 0' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" variant="h4">
            Micro Frontend Todo App
          </Typography>
          <TodoForm onAdd={handleAddTodo} />
          <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
        </Box>
      </Paper>
    </Container>
  );
};

export default App;