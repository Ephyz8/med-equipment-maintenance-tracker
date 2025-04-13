import React from 'react';
import { 
  AppBar as MuiAppBar, 
  Toolbar, 
  Typography, 
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  Badge
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { menuItems } from './Drawer';

// Debug imported menuItems
console.log('Imported menuItems:', JSON.stringify(menuItems, null, 2));

const AppBar = ({ onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Remove all whitespace from path
    const cleanPath = String(path).replace(/\s/g, '');
    
    console.log('Navigation triggered:');
    console.log('Original path:', path);
    console.log('Cleaned path:', cleanPath);
    console.log('Current path:', window.location.pathname);
    
    if (window.location.pathname === cleanPath) {
      window.location.reload();
    } else {
      navigate(cleanPath, { replace: true });
    }
  };

  return (
    <MuiAppBar position="fixed" sx={{ 
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: theme.palette.primary.main
    }}>
      <Toolbar>
        {isMobile && (
          <IconButton color="inherit" edge="start" onClick={onDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            cursor: 'pointer',
            fontWeight: 600,
            letterSpacing: 1.1
          }}
          onClick={() => handleNavigation('/')}
        >
          MEDICAL EQUIPMENT TRACKER
        </Typography>

        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                startIcon={item.icon}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', ml: 2 }}>
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;