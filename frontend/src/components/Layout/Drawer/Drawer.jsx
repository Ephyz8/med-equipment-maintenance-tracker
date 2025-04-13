import React from 'react';
import { 
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  MedicalServices as EquipmentIcon,
  Warning as FaultsIcon,
  Schedule as MaintenanceIcon,
  Report as ReportsIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Drawer = ({ open, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Equipment', icon: <EquipmentIcon />, path: '/equipment' },
    { text: 'Maintenance', icon: <MaintenanceIcon />, path: '/maintenance' },
    { text: 'Fault Reports', icon: <FaultsIcon />, path: '/faults' },
    { text: 'Reports', icon: <ReportsIcon />, path: '/reports' },
  ];

  return (
    <MuiDrawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': { 
          width: drawerWidth,
          boxSizing: 'border-box'
        },
      }}
    >
      <Toolbar /> {/* Spacer for AppBar */}
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;