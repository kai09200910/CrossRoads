import { Grid } from '@mui/material';
import React from 'react';
import PropertyTitle from './propertyTitle';
import PropertyDocument from './propertyDocument';
import PropertyDetail from './propertyDetail';
import PropertyMap from './propertyMap';
import PropertyEngagement from './propertyEngagement';
import './propertyview.scss';
import PendingFields from './pendingFields';

const PropertyView = () => {
  return (
    <>
      <Grid container spacing={5} mt={2}>
        <Grid item xs={12} md={12}>
          <PropertyTitle />
        </Grid>
        <Grid item xs={12} md={8}>
          <PropertyDocument />
          <PendingFields />
          <PropertyDetail />
        </Grid>
        <Grid item xs={12} md={4}>
          <PropertyMap />
          <PropertyEngagement />
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyView;
