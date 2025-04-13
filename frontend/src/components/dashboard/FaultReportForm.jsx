import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography
} from '@mui/material';

const FaultReportForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    equipment: '',
    description: '',
    department: '',
    severity: 'Medium',
    dateReported: new Date().toISOString().slice(0, 10)
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = () => {
    // Simulate submission
    console.log('Fault submitted:', formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Report Equipment Fault</DialogTitle>
      <DialogContent dividers>
        <TextField
          fullWidth
          margin="normal"
          label="Equipment Name"
          name="equipment"
          value={formData.equipment}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          margin="normal"
          label="Fault Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Department</InputLabel>
          <Select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <MenuItem value="ICU">ICU</MenuItem>
            <MenuItem value="Surgery">Surgery</MenuItem>
            <MenuItem value="Radiology">Radiology</MenuItem>
            <MenuItem value="Maternity">Maternity</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Severity</InputLabel>
          <Select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="Date Reported"
          name="dateReported"
          type="date"
          value={formData.dateReported}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FaultReportForm;
