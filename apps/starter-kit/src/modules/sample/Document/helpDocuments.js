import React from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

// import './contacts.scss';

const HelpDocument = () => {
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
        Help Documents
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
              Help Document list coming soon
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default HelpDocument;
