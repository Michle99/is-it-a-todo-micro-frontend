import React from 'react';
import { List, Paper } from '@mui/material';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '10px' }}>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => onDelete(todo.id)}
            onToggle={() => onToggle(todo.id)}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;