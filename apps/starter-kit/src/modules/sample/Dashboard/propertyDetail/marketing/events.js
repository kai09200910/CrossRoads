import React from 'react';
import { Box, Button, Stack } from '@mui/material';

const Events = ({ handleBack }) => {
  return (
    <Box
      sx={{
        paddingTop: { xs: 9, xl: 9 },
      }}
    >
      Events Table will dispaly here..
      {/* <Button variant="text" onclick>Text</Button> */}
      <Stack direction='row' alignItems='start' spacing={1}>
        <Button variant='text' onClick={() => handleBack(null)}>
          Back
        </Button>
        <Button
          variant='contained'
          size='large'
          //   onClick={handleBuyerOpen}
          className='primary-btn btn'
        >
          +Add buyer
        </Button>
      </Stack>
    </Box>
  );
};

export default Events;
