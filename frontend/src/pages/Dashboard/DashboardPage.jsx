import React from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  useTheme, 
  useMediaQuery 
} from '@mui/material';
import {
  MedicalServices,
  Schedule,
  Warning,
  AssignmentTurnedIn,
  AddAlertIcon
} from '@mui/icons-material';
import MetricCard from '../../components/dashboard/MetricCard';
import MaintenanceChart from '../../components/dashboard/MaintenanceChart';
import EquipmentStatusPie from '../../components/dashboard/EquipmentStatusPie';
import RecentActivity from '../../components/dashboard/RecentActivity';
import QuickActions from '../../components/dashboard/QuickActions';
import EquipmentTable from '../../components/dashboard/EquipmentTable';
import FaultReportForm from '../../components/dashboard/FaultReportForm';

const [openFaultModal, setOpenFaultModal] = React.useState(false);

const DashboardPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Temporary data - replace with API calls
  const metrics = {
    totalEquipment: 124,
    upcomingPM: 15,
    activeFaults: 4,
    complianceRate: 98.5
  };

  const recentActivities = [
    {
      id: 1,
      equipment: 'MRI Machine 3',
      type: 'Preventive Maintenance',
      status: 'Completed',
      date: '2024-03-15'
    },
    {
      id: 2,
      equipment: 'CT Scanner 1',
      type: 'Corrective Maintenance',
      status: 'In Progress',
      date: '2024-03-14'
    }
  ];

  const equipmentList = [
    {
      name: 'Infusion Pump A',
      department: 'ICU',
      status: 'Active',
      lastMaintenance: '2024-02-12',
      nextPM: '2024-05-12',
    },
    {
      name: 'Ventilator B',
      department: 'Surgery',
      status: 'Inactive',
      lastMaintenance: '2024-01-10',
      nextPM: '2024-04-10',
    },
  ];
  

  return (
    <Box sx={{ 
      flexGrow: 1,
      p: isMobile ? 2 : 3,
      backgroundColor: theme.palette.background.default
    }}>
      {/* Dashboard Header */}
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1"
          sx={{ 
            fontWeight: 600,
            color: theme.palette.primary.main,
            mb: 1
          }}
        >
          Equipment Dashboard
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Overview of medical equipment maintenance status and activities
        </Typography>
      </Box>

      {/* Key Metrics Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Equipment"
            value={metrics.totalEquipment}
            icon={<MedicalServices fontSize="large" />}
            trend="+2% this month"
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Upcoming PM"
            value={metrics.upcomingPM}
            icon={<Schedule fontSize="large" />}
            trend="3 overdue"
            color={theme.palette.warning.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Active Faults"
            value={metrics.activeFaults}
            icon={<Warning fontSize="large" />}
            trend="1 critical"
            color={theme.palette.error.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Compliance Rate"
            value={`${metrics.complianceRate}%`}
            icon={<AssignmentTurnedIn fontSize="large" />}
            trend="Above target"
            color={theme.palette.success.main}
          />
        </Grid>
      </Grid>

      {/* Main Content Area */}
      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {/* Maintenance Compliance Chart */}
            <Grid item xs={12}>
              <MaintenanceChart />
              <FaultReportForm
               open={openFaultModal}
                handleClose={() => setOpenFaultModal(false)}/>
            </Grid>

            {/* Equipment Status Distribution */}
            <Grid item xs={12}>
              <EquipmentStatusPie />
            <Grid item xs={12}>
             <EquipmentTable equipmentList={equipmentList} />
            </Grid>

            </Grid>
          </Grid>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            {/* Recent Activity */}
            <Grid item xs={12}>
              <RecentActivity activities={recentActivities} />
            </Grid>

            {/* Quick Actions */}
            <Grid item xs={12}>
              <QuickActions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;