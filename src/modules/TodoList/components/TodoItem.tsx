import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';

interface TodoItemProps {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onDelete, onToggle }) => {
  return (
    <ListItem
      button
      sx={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      <Checkbox checked={completed} onChange={onToggle} />
      <ListItemText primary={text} />
      <IconButton onClick={onDelete} aria-label="Delete">
        🗑️
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;