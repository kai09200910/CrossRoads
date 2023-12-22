import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import ComingsoonComponent from '../common/comingsoonComponent';

// import './contacts.scss';

const AddTransfer = () => {
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
        Add Transfer
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
              }}
            >
              Coming Soon: 'Add Transfer' List Screen
            </Typography>
          </Box>

          <ComingsoonComponent />
        </Container>
      </Paper>
    </>
  );
};

export default AddTransfer;
