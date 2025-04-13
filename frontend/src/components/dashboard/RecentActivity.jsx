import React from 'react';
import { 
  Card, 
  CardHeader,
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  useTheme 
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const RecentActivity = ({ activities }) => {
  const theme = useTheme();

  return (
    <Card sx={{ boxShadow: theme.shadows[2] }}>
      <CardHeader
        title="Recent Activities"
        titleTypographyProps={{ variant: 'h6' }}
      />
      <List dense>
        {activities.map((activity) => (
          <ListItem 
            key={activity.id}
            sx={{ 
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&:last-child': { borderBottom: 'none' }
            }}
          >
            <ListItemText
              primary={
                <Typography variant="subtitle2">
                  {activity.equipment}
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body2">
                    {activity.type}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    color="textSecondary"
                  >
                    {activity.date} • {activity.status}
                  </Typography>
                </>
              }
            />
            <ArrowForwardIos fontSize="small" color="action" />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default RecentActivity;