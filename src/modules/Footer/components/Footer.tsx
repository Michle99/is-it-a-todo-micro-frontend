import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <Paper elevation={3} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction 
            label="GitHub" 
            icon={<GitHubIcon />} 
            href="https://github.com/Michle99/todo-microfrontend" 
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;