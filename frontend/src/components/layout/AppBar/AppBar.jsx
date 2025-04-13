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
import { menuItems } from './Drawer'; // Import shared menu items

const AppBar = ({ onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <MuiAppBar 
      position="fixed"
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.primary.main
      }}
    >
      <Toolbar>
        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* App Title */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            cursor: 'pointer',
            fontWeight: 600,
            letterSpacing: 1.1
          }}
          onClick={() => navigate('/')}
        >
          MEDICAL EQUIPMENT TRACKER
        </Typography>

        {/* Desktop Menu Items */}
        {!isMobile && (
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                startIcon={item.icon}
                onClick={() => navigate(item.path)}
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

        {/* Notification and Profile Icons */}
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