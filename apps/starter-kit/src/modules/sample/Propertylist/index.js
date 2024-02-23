import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
  Button,
  FormControl,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropertyCard from './propertyCard';
import { RiArrowDownSLine, RiSearchLine } from 'react-icons/ri';
import './propertylist.scss';
import Filters from '../common/filters';
import '../../../assets/styles/base.scss';

const PropertyList = () => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/advanced-search');
  };

  return (
    <>
      <Box variant='div' component='div' className='all-listing-wrapper'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
            paddingTop: { xs: 5, xl: 5 },
          }}
          className='main-title'
        >
          <Typography variant='h3' component='h3'>
            All Listings
          </Typography>
          <Button
            variant='outlined'
            size='small'
            className='edit-btn secondary-btn-small'
            onClick={navigateToCreate}
            startIcon={<RiSearchLine size={14} />}
          >
            Advanced search
          </Button>
        </Stack>

        <Filters />

        <Box className='listing-card-scrollable-content'>
          <Grid container spacing={5} mt={1} className='listing-card'>
            <Grid item xs={12} md={6}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <PropertyCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <PropertyCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PropertyList;
