import React from 'react';
import { Box } from '@mui/material';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Box
      sx={{ width: '100%', overflow: 'hidden' }}
      className='google-map-wrapper'
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDZfVO29Iytspv4xz7S68doIoiztiRLhbk',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
      </GoogleMapReact>
    </Box>
  );
};

export default GoogleMap;
