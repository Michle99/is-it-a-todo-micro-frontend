import React from 'react';
import { Container, CssBaseline, Paper, Box, Typography } from '@mui/material';

const App: React.FC = () => {

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', margin: '50px 0' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" variant="h4">
            Micro Frontend Todo App
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default App;