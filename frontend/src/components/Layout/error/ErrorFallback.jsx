import { Button, Typography, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <WarningIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Medical System Error
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {error.message}
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        onClick={resetErrorBoundary}
      >
        Retry
      </Button>
      <Typography variant="body2" sx={{ mt: 3 }}>
        If the problem persists, contact Biomedical IT Support
      </Typography>
    </Box>
  );
}