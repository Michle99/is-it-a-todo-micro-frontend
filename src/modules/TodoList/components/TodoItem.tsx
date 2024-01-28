import React, { useState } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState<string>(text);

  const handleToggle = () => {
    onToggle(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDoneEditing = () => {
    if (editedText.trim() !== '') {
      setIsEditing(false);
      onUpdate(id, editedText.toString());
    }
  };

  return (
    <ListItem>
      <Checkbox checked={completed} onChange={handleToggle} />
      {isEditing ? (
        <>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <IconButton edge="end" onClick={handleDoneEditing}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ListItemText
            primary={text}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
