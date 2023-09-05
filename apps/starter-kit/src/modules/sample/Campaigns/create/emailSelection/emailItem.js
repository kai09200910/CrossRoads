import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const EmailItem = ({ setPhotoStep }) => {
  return (
    <Grid container spacing={3} className='email-card'>
      <Grid item xs={12} md={6}>
        <img
          src='../../../../assets/images/Email-thumbnail.png'
          alt='template-thumbnail '
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='flex-start'
          spacing={2}
          sx={{ height: '100%' }}
        >
          <Box variant='div' component='div' className='email-campaign-name'>
            <Typography variant='p' component='p'>
              New Listing (2 images)
            </Typography>
            <Typography variant='body1' component='span'>
              1 cover, 1 thumb images
            </Typography>
          </Box>
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={2}
          >
            <Button
              variant='outlined'
              size='small'
              onClick={() => setPhotoStep('preview')}
              className='outline-btn small-btn'
            >
              Preview
            </Button>
            <Button
              variant='contained'
              size='small'
              autoFocus
              onClick={() => setPhotoStep('review')}
              className='primary-btn small-btn'
            >
              Select
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default EmailItem;
