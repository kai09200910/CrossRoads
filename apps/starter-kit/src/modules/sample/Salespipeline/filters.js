import React, { useState } from 'react';
import {
  Box,
  Grid,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  Stack,
  IconButton,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import CloseIcon from '@mui/icons-material/Close';
import './salespipeline.scss';

const Filters = (props) => {
  const [isAddcontact, setIsAddcontact] = useState(false);
  const handleaddcontactClose = () => {
    setIsAddcontact(false);
  };

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    props.toggleVisibility();
  };


  return (
    <>
   
        <Box variant='div' component='div' className='listing-fillter'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            className='detail'
          >
            <Grid container spacing={3} mt={1}>
              <Grid item xs={12} sm={6} md={2}>
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
              <Grid item xs={12} sm={6} md={2}>
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
              <Grid item xs={12} sm={6} md={2}>
                <Box variant='div' component='div'>
                  <label>Area</label>
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
                      Select Area
                    </MenuItem>
                    <MenuItem value={5}>Sale </MenuItem>
                    <MenuItem value={6}>Rent</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
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
              <Grid item xs={12} sm={6} md={2}>
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
                    <MenuItem value={10}>Listed</MenuItem>
                    <MenuItem value={20}>Sold </MenuItem>
                    <MenuItem value={30}>Under Contract</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
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
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>
     
    </>
  );
};

export default Filters;
