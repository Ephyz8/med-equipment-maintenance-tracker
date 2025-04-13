import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',       // Hospital blue (primary actions)
      light: '#63a4ff',      // Light blue
      dark: '#004ba0',       // Dark blue
      contrastText: '#fff'    // White text on blue
    },
    secondary: {
      main: '#dc004e',       // Alert red (for warnings/errors)
      light: '#ff5c8d',
      dark: '#9a0036',
      contrastText: '#fff'
    },
    background: {
      default: '#f5f7fa',    // Light gray background
      paper: '#ffffff'       // White cards/containers
    },
    text: {
      primary: '#2d3748',    // Dark gray for main text
      secondary: '#718096'   // Medium gray for secondary text
    },
    status: {
      active: '#4caf50',     // Green for active equipment
      inactive: '#f44336',   // Red for inactive
      maintenance: '#ff9800' // Orange for under maintenance
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    button: { textTransform: 'none' } // Disable auto-uppercase in buttons
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,    // Rounded corners
          padding: '8px 16px',
          fontWeight: 500
        },
        contained: {
          boxShadow: 'none',  // Remove default shadow
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,   // Rounded cards
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // Soft shadow
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiDataGrid-cell:focus': {
            outline: 'none'   // Remove cell focus outline
          }
        }
      }
    }
  },
  shape: {
    borderRadius: 8          // Global border radius
  }
});

export default theme;