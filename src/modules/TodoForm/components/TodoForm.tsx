import React, { useState } from 'react';
import { TextField, Button, Paper, Box } from '@mui/material';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>('');

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
      <Box mt={2}>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleAddTodo}
        >
          Add Todo
        </Button>
      </Box>
    </Paper>
  );
};

export default TodoForm;