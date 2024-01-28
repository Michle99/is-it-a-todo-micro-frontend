import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '10px' }}>
      <TextField
        label="New Todo"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleAddTodo}>
        Add Todo
      </Button>
    </Paper>
  );
};

export default TodoForm;