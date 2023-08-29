import React from 'react';
import { Box, Button, Stack } from '@mui/material';

const MatchingBuyers = ({ handleBack }) => {
  return (
    <Box
      sx={{
        paddingTop: { xs: 9, xl: 9 },
      }}
    >
      MatchingBuyers Table will dispaly here..
      <Stack direction='row' alignItems='start' spacing={1}>
        <Button variant='text' onClick={() => handleBack(null)}>
          Back
        </Button>
      </Stack>
    </Box>
  );
};

export default MatchingBuyers;
