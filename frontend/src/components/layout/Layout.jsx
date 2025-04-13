import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import AppBar from './AppBar/AppBar';
import Drawer from './AppBar/Drawer';
import Footer from './Footer/Footer';
import EmergencyAlert from './EmergencyAlert'; // Optional component

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false); // Connect to backend status

  // Drawer toggle for mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Close drawer when resizing to desktop
  React.useEffect(() => {
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
      
      {/* Emergency Alert Banner (Top) */}
      {emergencyMode && <EmergencyAlert />}
      
      {/* AppBar (Fixed at top) */}
      <AppBar onDrawerToggle={handleDrawerToggle} />
      
      {/* Main Layout Container */}
      <Box sx={{ 
        display: 'flex', 
        flexGrow: 1,
        mt: { xs: 0, sm: 0 } // Adjust if AppBar height changes
      }}>
        {/* Responsive Drawer */}
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
        
        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` }, // Account for drawer
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
          {/* Spacer for AppBar */}
          <Toolbar /> 
          
          {/* Page Content */}
          <Box sx={{ 
            maxWidth: 1600, 
            mx: 'auto',
            minHeight: 'calc(100vh - 128px)' // Adjust based on your header/footer height
          }}>
            {children}
          </Box>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;