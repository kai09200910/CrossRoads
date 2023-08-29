import React from 'react';
import { Box, Button, Stack } from '@mui/material';

const Inquiries = ({ handleBack }) => {
  return (
    <Box
      sx={{
        paddingTop: { xs: 9, xl: 9 },
      }}
    >
      Recent inquiries Inquiries Table will dispaly here..
      <Stack direction='row' alignItems='start' spacing={1}>
        <Button variant='text' onClick={() => handleBack(null)}>
          Back
        </Button>
      </Stack>
    </Box>
  );
};

export default Inquiries;
