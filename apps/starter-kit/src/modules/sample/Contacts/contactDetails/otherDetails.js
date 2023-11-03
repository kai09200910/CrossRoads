import React from 'react';
import { Box, Paper } from '@mui/material';

const OtherDetails = () => {
  return (
    <Paper>
      <Box
        sx={{
          padding: { xs: 9, xl: 9 },
          height: '310px',
        }}
      >
        Other Details will be display here
      </Box>
    </Paper>
  );
};

export default OtherDetails;
