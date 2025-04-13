import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import theme from './styles/theme';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';

// Initialize QueryClient with medical-app specific defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minute cache for medical data
      retry: (failureCount, error) => {
        // Critical healthcare-specific retry logic
        if (error.response?.status === 404) return false; // Don't retry missing equipment
        if (error.response?.status === 401) return false; // Don't retry unauthorized
        return failureCount < 2; // Retry others twice
      },
      refetchOnWindowFocus: true, // Essential for real-time monitoring
      onError: (error) => {
        console.error('Medical data query error:', error);
        // Add healthcare analytics tracking here
      }
    },
    mutations: {
      onError: (error) => {
        console.error('Medical data mutation error:', error);
        // Alert staff of critical failures
      }
    }
  }
});

// Error Boundary for the root (optional but recommended)
const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools position="bottom-right" />
        )}
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Safe root initialization
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Root />);

  // Healthcare analytics (production only)
  if (process.env.NODE_ENV === 'production') {
    reportWebVitals((metric) => {
      // Integrate with hospital analytics system
      console.log('Medical app performance:', metric);
    });
  }
} else {
  console.error('Failed to find root element! Check public/index.html');
}