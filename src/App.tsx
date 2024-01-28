import React from 'react';
import { Container } from '@mui/material';
import Header from './modules/Header/components/Header';
import TodoApp from './modules/TodoApp/components/TodoApp';
import Footer from './modules/Footer/components/Footer';

const App: React.FC = () => {

  return (
    <Container component="main" maxWidth="md">
      <Header/>
      <TodoApp/>
      <Footer/>
    </Container>
  );
};

export default App;