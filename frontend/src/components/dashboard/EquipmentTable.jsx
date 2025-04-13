import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const EquipmentTable = ({ equipmentList }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Equipment Registry
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Maintenance</TableCell>
              <TableCell>Next PM Due</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipmentList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.lastMaintenance}</TableCell>
                <TableCell>{item.nextPM}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EquipmentTable;
