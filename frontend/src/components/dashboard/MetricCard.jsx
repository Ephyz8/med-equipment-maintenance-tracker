import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Stack, 
  Box, 
  useTheme 
} from '@mui/material';

const MetricCard = ({ title, value, icon, trend, color }) => {
  const theme = useTheme();

  return (
    <Card sx={{ 
      height: '100%',
      borderLeft: `4px solid ${color}`,
      boxShadow: theme.shadows[2]
    }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box sx={{ color: color }}>
            {icon}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
              variant="subtitle2" 
              color="textSecondary"
              sx={{ mb: 0.5 }}
            >
              {title}
            </Typography>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: color,
                display: 'flex',
                alignItems: 'center',
                mt: 0.5
              }}
            >
              {trend}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MetricCard;