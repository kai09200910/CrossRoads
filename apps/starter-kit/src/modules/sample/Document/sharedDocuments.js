import React from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

// import './contacts.scss';

const SharedDocument = () => {
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
        Shared Documents
      </Typography>

      <Paper>
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
              Shared Document list coming soon
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default SharedDocument;
