import React from 'react';
import { Box } from '@mui/material';
import Header from './modules/Header/components/Header';
import TodoApp from './modules/TodoApp/components/TodoApp';
import Footer from './modules/Footer/components/Footer';

const App: React.FC = () => {

  return (
    <Box >
      <Header/>
      <TodoApp/>
      <Footer/>
    </Box>
  );
};

export default App;