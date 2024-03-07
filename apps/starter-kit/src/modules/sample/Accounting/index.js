import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import ComingsoonComponent from '../common/comingsoonComponent';

const MyTransfers = () => {
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
        My Transfers
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
              Coming Soon: ' My Transfers' List Screen
            </Typography>
            <ComingsoonComponent />
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default MyTransfers;
