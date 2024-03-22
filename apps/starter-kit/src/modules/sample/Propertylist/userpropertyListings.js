import React from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import ComingsoonComponent from '../common/comingsoonComponent';

const UserpropertyListings = () => {
  return (
    <>
      <Typography
        variant='h3'
        component='h3'
        sx={{
          paddingBottom: { xs: 3, xl: 2 },
          paddingTop: { xs: 5, xl: 5 },
        }}
      >
        My Listings
      </Typography>

      <Paper className='coming-soon-screen'>
        <Container maxWidth='md'>
          <Box
            sx={{ width: '100%', overflow: 'hidden' }}
            className='document-list-table'
          >
            <Typography
              variant='h3'
              component='h3'
              sx={{
                paddingBottom: { xs: 3, xl: 2 },
                paddingTop: { xs: 5, xl: 5 },
                // height:{100vh},
              }}
            >
              Coming Soon: 'Shared Documents' List Screen
            </Typography>
          </Box>
          <ComingsoonComponent />
        </Container>
      </Paper>
    </>
  );
};

export default UserpropertyListings;
