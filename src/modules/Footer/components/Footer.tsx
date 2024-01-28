import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <Paper elevation={3} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <BottomNavigation showLabels>
        <Box display="flex" justifyContent="space-between" alignItems="center" px={2}>
            <Typography variant="body2" color="textSecondary">
              &copy; {new Date().getFullYear()} Todo App
            </Typography>
            <BottomNavigationAction 
              label="GitHub" 
              icon={<GitHubIcon />} 
              href="https://github.com/Michle99/todo-microfrontend" 
            />
          </Box>
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;