import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Drawer from './AppBar/Drawer';
import Footer from './Footer/Footer';
import EmergencyAlert from './EmergencyAlert';

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false); // You may connect this to backend

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, mobileOpen]);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default
    }}>
      <CssBaseline />

      {emergencyMode && <EmergencyAlert />}

      <AppBar onDrawerToggle={handleDrawerToggle} />

      <Box sx={{ 
        display: 'flex', 
        flexGrow: 1,
        mt: { xs: 0, sm: 0 }
      }}>
        <Drawer 
          open={mobileOpen} 
          onClose={handleDrawerToggle} 
          variant={isMobile ? 'temporary' : 'permanent'}
          PaperProps={{
            sx: {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.background.paper,
              borderRight: `1px solid ${theme.palette.divider}`
            }
          }}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            ...(mobileOpen && {
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }),
          }}
        >
          <Toolbar />

          <Box sx={{ 
            maxWidth: 1600, 
            mx: 'auto',
            minHeight: 'calc(100vh - 128px)' 
          }}>
            {/* 🔥 Render nested routes */}
            <Outlet />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
