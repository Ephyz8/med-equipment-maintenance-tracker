import React from 'react';
import { 
  Card, 
  CardHeader,
  Grid, 
  Button, 
  useTheme 
} from '@mui/material';
import {
  AddCircleOutline,
  ReportProblemOutlined,
  DownloadOutlined
} from '@mui/icons-material';

const QuickActions = () => {
  const theme = useTheme();

  return (
    <Card sx={{ boxShadow: theme.shadows[2] }}>
      <CardHeader
        title="Quick Actions"
        titleTypographyProps={{ variant: 'h6' }}
      />
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddCircleOutline />}
            sx={{ textTransform: 'none' }}
          >
            Add New Equipment
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<ReportProblemOutlined />}
            sx={{ textTransform: 'none' }}
          >
            Report Fault
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<DownloadOutlined />}
            sx={{ textTransform: 'none' }}
          >
            Generate Report
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default QuickActions;