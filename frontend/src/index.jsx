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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: (failureCount, error) => {
        if (error.response?.status === 404) return false;
        if (error.response?.status === 401) return false;
        return failureCount < 2;
      },
      refetchOnWindowFocus: true,
      onError: (error) => {
        console.error('Medical data query error:', error);
      }
    },
    mutations: {
      onError: (error) => {
        console.error('Medical data mutation error:', error);
      }
    }
  }
});

// Create a separate AppWrapper component
const AppWrapper = () => (
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
);

const Root = () => {
  // Only apply StrictMode in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <React.StrictMode>
        <AppWrapper />
      </React.StrictMode>
    );
  }
  return <AppWrapper />;
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Root />);

  if (process.env.NODE_ENV === 'production') {
    reportWebVitals((metric) => {
      console.log('Medical app performance:', metric);
    });
  }
} else {
  console.error('Failed to find root element! Check public/index.html');
}