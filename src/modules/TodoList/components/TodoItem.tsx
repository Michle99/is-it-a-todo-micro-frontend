import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onDelete, onToggle }) => {
  return (
    <ListItem>
      <Checkbox checked={completed} onChange={onToggle} />
      <ListItemText primary={text} style={{ textDecoration: completed ? 'line-through' : 'none' }} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;