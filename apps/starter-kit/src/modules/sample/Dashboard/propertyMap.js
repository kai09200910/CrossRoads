import React from 'react';
import { Box, Paper } from '@mui/material';
import GoogleMap from '../common/googleMap';

const PropertyMap = () => {
  return (
    <Paper>
      <Box
        sx={{
          padding: { xs: 9, xl: 9 },
          height: '310px',
        }}
        className='property-map'
      >
        <Box className='map-container u-vr'>
          <GoogleMap />
        </Box>
      </Box>
    </Paper>
  );
};

export default PropertyMap;
