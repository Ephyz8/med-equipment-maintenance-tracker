import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { Warning, Close } from '@mui/icons-material';

const EmergencyAlert = () => {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Box
        sx={{
          backgroundColor: 'error.main',
          color: 'error.contrastText',
          py: 1,
          px: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box display="flex" alignItems="center">
          <Warning sx={{ mr: 1 }} />
          <Typography variant="body2">
            CRITICAL SYSTEM ALERT: Maintenance mode active. Some features disabled.
          </Typography>
        </Box>
        <IconButton
          size="small"
          color="inherit"
          onClick={() => setOpen(false)}
        >
          <Close fontSize="small" />
        </IconButton>
      </Box>
    </Collapse>
  );
};