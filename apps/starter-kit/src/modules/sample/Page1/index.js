import React from 'react';
import {
  Box,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import PropertyCard from './propertyCard';
import { RiArrowDownSLine } from 'react-icons/ri';
import './propertylist.scss';

const Page1 = () => {
  return (
    <>
      <Typography
        variant='h3'
        component='h3'
        sx={{
          paddingBottom: { xs: 4, xl: 4 },
          paddingTop: { xs: 5, xl: 5 },
        }}
      >
        My Listings
      </Typography>
      <Box variant='div' component='div' className='listing-fillter'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          className='detail'
        >
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Listing Type </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Sale or Rent'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>MLS Exclusive</MenuItem>
                  <MenuItem value={20}>General</MenuItem>
                  <MenuItem value={30}>Co-broke </MenuItem>
                  <MenuItem value={40}>Exclusive (not on MLS)</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Island </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select Island'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Island 1</MenuItem>
                  <MenuItem value={20}>Island 2</MenuItem>
                  <MenuItem value={30}>Island 3 </MenuItem>
                  <MenuItem value={40}>Island 4</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Listing Type </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Sale or Rent'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>MLS Exclusive</MenuItem>
                  <MenuItem value={20}>General</MenuItem>
                  <MenuItem value={30}>Co-broke </MenuItem>
                  <MenuItem value={40}>Exclusive (not on MLS)</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Beds & Baths </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select Bed & Baths'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>select Bath 1</MenuItem>
                  <MenuItem value={20}>select Bath 2</MenuItem>
                  <MenuItem value={30}>select Bed 1 </MenuItem>
                  <MenuItem value={40}>select Bed 2</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Listing status </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Sale or Rent'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Listing status 1</MenuItem>
                  <MenuItem value={20}>Listing status 2</MenuItem>
                  <MenuItem value={30}>Listing status 3 </MenuItem>
                  <MenuItem value={40}>Listing status 4</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Sort by </label>
                <FormControlLabel
                  // control={<IOSSwitch  /> <Switch  sx={{ m: 1 }}
                  control={
                    <Switch
                      sx={{ m: 1 }}
                      className='ios-switch-custom fillter-switch'
                      focusVisibleClassName='.Mui-focusVisible'
                      disableRipple
                    />
                  }
                  label=''
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
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
    </>
  );
};

export default Page1;
