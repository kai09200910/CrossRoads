import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import EmailItem from './emailItem';

const EmailSelection = ({ setPhotoStep }) => {
  return (
    <Box
      sx={{
        padding: { xs: 5, xl: 5 },
      }}
      className='email-selection-wrapper'
    >
      <Typography variant='h4' component='h4'>
        Email Selection
      </Typography>

      <Box
        variant='div'
        component='div'
        className='email-campaign-list-wrapper'
      >
        <Grid
          container
          spacing={8}
          sx={{
            padding: { xs: 4, xl: 4 },
          }}
          mt={0}
        >
          <Grid item xs={12} md={6}>
            <EmailItem setPhotoStep={setPhotoStep} />
          </Grid>
          <Grid item xs={12} md={6}>
            <EmailItem setPhotoStep={setPhotoStep} />
          </Grid>
          <Grid item xs={12} md={6}>
            <EmailItem setPhotoStep={setPhotoStep} />
          </Grid>
          <Grid item xs={12} md={6}>
            <EmailItem setPhotoStep={setPhotoStep} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EmailSelection;
