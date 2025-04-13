import React from 'react';
import { 
  Box, 
  Container,
  Grid,
  Link,
  Typography,
  Divider,
  IconButton,
  useTheme
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  MedicalServices as MedicalIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        backgroundColor: theme.palette.mode === 'light' 
          ? theme.palette.grey[100] 
          : theme.palette.grey[900],
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Hospital Information */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <MedicalIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6" color="primary">
                MedTrack Pro
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Comprehensive medical equipment maintenance solution for healthcare facilities.
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">
                123 Medical Drive, Hospital City, HC 12345
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">
                <Link href="tel:+1234567890" color="inherit">
                  (123) 456-7890
                </Link>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">
                <Link href="mailto:support@medtrack.com" color="inherit">
                  support@medtrack.com
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column">
              <Link href="/equipment" color="textSecondary" underline="hover" sx={{ mb: 1 }}>
                Equipment List
              </Link>
              <Link href="/faults/report" color="textSecondary" underline="hover" sx={{ mb: 1 }}>
                Report Fault
              </Link>
              <Link href="/maintenance" color="textSecondary" underline="hover" sx={{ mb: 1 }}>
                Maintenance
              </Link>
              <Link href="/reports" color="textSecondary" underline="hover">
                Reports
              </Link>
            </Box>
          </Grid>

          {/* Emergency Contacts */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              Emergency Contacts
            </Typography>
            <Box display="flex" flexDirection="column">
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Biomedical Dept:</strong> Ext. 5555
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>IT Support:</strong> Ext. 4444
              </Typography>
              <Typography variant="body2">
                <strong>After Hours:</strong> (123) 456-EMER
              </Typography>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
            </Box>
            
            <Box mt={3}>
              <Typography variant="caption" display="block">
                HIPAA Compliant • ISO 13485 Certified
              </Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                v{process.env.REACT_APP_VERSION || '1.0.0'}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="textSecondary" align="center">
          © {currentYear} MedTrack Pro. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;