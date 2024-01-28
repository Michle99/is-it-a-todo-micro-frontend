import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo } from '../../TodoApp/components/TodoApp';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onToggle, 
  onDelete, 
  onUpdate 
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onUpdate={(_, newText) => onUpdate(todo.id, newText)}
        />
      ))}
    </List>
  );
};

export default TodoList;