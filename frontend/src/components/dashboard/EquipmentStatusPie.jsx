import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const EquipmentStatusPie = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        height: 300,
        bgcolor: 'background.paper',
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      <Typography variant="h6">Equipment Status Distribution</Typography>
      <Box sx={{ 
        height: '85%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: theme.palette.text.secondary
      }}>
        Pie Chart Placeholder
      </Box>
    </Box>
  );
};

export default EquipmentStatusPie;