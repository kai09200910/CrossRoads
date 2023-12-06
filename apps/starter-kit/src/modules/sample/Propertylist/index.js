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
} from '@mui/material';
import PropertyCard from './propertyCard';
import { RiArrowDownSLine } from 'react-icons/ri';
import './propertylist.scss';

const PropertyList = () => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

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
                  id='listing-type-1'
                  value={value}
                  defaultValue='none'
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={(e) => setShowPlaceholder(false)}
                  onClose={(e) =>
                    setShowPlaceholder(e.target.value === undefined)
                  }
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem
                    key='0'
                    disabled
                    value='none'
                    className='place-holder'
                  >
                    Select Listing Type
                  </MenuItem>
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
                  id='island'
                  value={value}
                  defaultValue='none'
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={(e) => setShowPlaceholder(false)}
                  onClose={(e) =>
                    setShowPlaceholder(e.target.value === undefined)
                  }
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem
                    key='0'
                    disabled
                    value='none'
                    className='place-holder'
                  >
                    Select Island
                  </MenuItem>
                  <MenuItem value={1}>Island 1</MenuItem>
                  <MenuItem value={2}>Island 2</MenuItem>
                  <MenuItem value={3}>Island 3 </MenuItem>
                  <MenuItem value={4}>Island 4</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Listing Type </label>
                <Select
                  fullWidth
                  id='listing-type-1'
                  value={value}
                  defaultValue='none'
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={(e) => setShowPlaceholder(false)}
                  onClose={(e) =>
                    setShowPlaceholder(e.target.value === undefined)
                  }
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem
                    key='0'
                    disabled
                    value='none'
                    className='place-holder'
                  >
                    Select Listing Type
                  </MenuItem>
                  <MenuItem value={5}>MLS Exclusive</MenuItem>
                  <MenuItem value={6}>General</MenuItem>
                  <MenuItem value={7}>Co-broke </MenuItem>
                  <MenuItem value={8}>Exclusive (not on MLS)</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Beds & Baths </label>
                <Select
                  fullWidth
                  id='beds-baths'
                  value={value}
                  defaultValue='none'
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={(e) => setShowPlaceholder(false)}
                  onClose={(e) =>
                    setShowPlaceholder(e.target.value === undefined)
                  }
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem
                    key='0'
                    disabled
                    value='none'
                    className='place-holder'
                  >
                    Select Beds & Baths
                  </MenuItem>
                  <MenuItem value={11}>select Bath 1</MenuItem>
                  <MenuItem value={12}>select Bath 2</MenuItem>
                  <MenuItem value={13}>select Bed 1 </MenuItem>
                  <MenuItem value={14}>select Bed 2</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box variant='div' component='div'>
                <label>Listing status </label>
                <Select
                  fullWidth
                  id='listing-status'
                  value={value}
                  defaultValue='none'
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={(e) => setShowPlaceholder(false)}
                  onClose={(e) =>
                    setShowPlaceholder(e.target.value === undefined)
                  }
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem
                    key='0'
                    disabled
                    value={value}
                    defaultValue='none'
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                  >
                    Select Listing status
                  </MenuItem>
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
                  sx={{
                    height: '47px',
                  }}
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
    </>
  );
};

export default PropertyList;
