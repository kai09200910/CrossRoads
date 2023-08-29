import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';

const PropertyEngagement = () => {
  return (
    <Paper sx={{ marginTop: 5 }}>
      <Box
        sx={{
          padding: { xs: 5, xl: 5 },
        }}
        className='campaign-engagement-wrapper'
      >
        <Box variant='div' component='div' className='section-title'>
          <Typography variant='h4' component='h4'>
            Campaign Engagements
          </Typography>
          <Typography variant='p' component='p' className='section-sub-title'>
            Data based on last
            <Typography variant='body1' component='span' className='color-blue'>
              30 days
            </Typography>
          </Typography>
        </Box>
        <Box
          variant='div'
          component='div'
          className='pie-chart'
          sx={{
            padding: { xs: 4, xl: 16 },
          }}
        >
          Display Pie Chart here
        </Box>
        <Button
          variant='contained'
          size='large'
          className='primary-btn btn'
          sx={{ width: '100%' }}
        >
          View campaigns
        </Button>
      </Box>
    </Paper>
  );
};

export default PropertyEngagement;
