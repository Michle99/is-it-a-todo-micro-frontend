import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import { useState } from "react";
import TodoList from "../../TodoList/components/TodoList";
import TodoForm from "../../TodoForm/components/TodoForm";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
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
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
          <Typography component="h1" variant="h5">
            Todo App
          </Typography>
          <TodoForm onAdd={handleAddTodo} />
          <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </Paper>
      </Container>
    );
};
  
export default TodoApp