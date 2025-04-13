import { CircularProgress, Box } from '@mui/material';

export default function Spinner({ fullScreen = false }) {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      minHeight={fullScreen ? '100vh' : 'auto'}
    >
      <CircularProgress />
    </Box>
  );
}