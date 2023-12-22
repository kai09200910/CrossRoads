import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  TextField,
  Select,
  FormControl,
  MenuItem,
  Checkbox,
  ListItemText,
  FormControlLabel,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { useNavigate } from 'react-router-dom';
import './propertylist.scss';
import PropertyCard from './propertyCard';
import ReactFlagsSelect from 'react-flags-select';
import MatchingContacts from '../common/matchingContacts';

const breadcrumbs = [
  <Link
    underline='hover'
    key='1'
    color='inherit'
    // onClick={() => setIsList(false)}
    to='/my-listing'
  >
    All listings
  </Link>,
  <Typography key='3' color='text.primary'>
    Advanced search
  </Typography>,
];
const names = [
  'Wifi',
  'Parking',
  'Pet-friendly ',
  'Fully equipped kitchen',
  'Gym',
  'Pool',
  'Spa',
  'Laundry',
];
const propertytype = [
  'Single Family Home ',
  'Half Duplex ',
  'Condo ',
  'Full Duplex ',
  'Triplex',
  'Fourplex',
  'Farm/Ranch ',
  'Lots/Acreage',
  'Resort/Hotel  ',
  'Private Island ',
  'Sixplex',
  'Apartment Complex ',
  'Dock',
];

const AdvanceSearch = () => {
  const navigate = useNavigate();
  const [personName, setPersonName] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [propertylistName, setPropertylistName] = React.useState([]);
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');
  const [selected, setSelected] = useState('');
  const [breadcrumbsItems, setBreadcrumbsItems] = useState(breadcrumbs);
  const [propertyvalue, setpropertyValue] = useState('none');
  const [showPropertyPlaceholder, setShowPropertyPlaceholder] = useState(
    value === 'none',
  );

  useEffect(() => {
    if (isSubmitted) {
      const resultBreadcrumbs = [
        <Link underline='hover' key='1' color='inherit' to='/my-listing'>
          All listings
        </Link>,
        <Link
          underline='hover'
          key='1'
          color='inherit'
          to='#'
          onClick={() => setIsSubmitted(false)}
        >
          Advanced search
        </Link>,
        <Typography key='3' color='text.primary'>
          Results
        </Typography>,
      ];
      setBreadcrumbsItems(resultBreadcrumbs);
    } else {
      setBreadcrumbsItems(breadcrumbs);
    }
  }, [isSubmitted]);

  const navigateToListing = () => {
    navigate('/my-listing');
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const handlepropertyChange = (event) => {
    const {
      target: { value },
    } = event;
    setPropertylistName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <Paper mt={2}>
        {/* <Container> */}
        <Container className='advanced-search-wrapper'>
          <Box
            sx={{
              padding: { xs: 5, xl: 5 },
              width: '100%',
            }}
            className='advanced-search'
          >
            <Box
              variant='div'
              component='div'
              sx={{
                paddingBottom: { xs: 4, xl: 4 },
              }}
              className='breadcrumb-wrap'
            >
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize='small' />}
                aria-label='breadcrumb'
              >
                {breadcrumbsItems}
              </Breadcrumbs>
            </Box>

            <Box
              sx={{
                paddingTop: { xs: 5, xl: 5 },
              }}
            >
              {!isSubmitted ? (
                <Box
                  sx={{ width: '100%', overflow: 'hidden' }}
                  className='search-form-wrapper'
                >
                  <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                      paddingBottom: { xs: 2, xl: 2 },
                      paddingTop: { xs: 2, xl: 2 },
                    }}
                    className='main-title'
                  >
                    <Typography variant='h3' component='h3'>
                      Advanced Search
                    </Typography>
                  </Stack>
                  <Box
                    variant='div'
                    component='div'
                    className='search-categories'
                  >
                    <Stack
                      spacing={{ xs: 0.5, sm: 1 }}
                      direction='row'
                      useFlexGap
                      flexWrap='wrap'
                    >
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label='Sale'
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label='Rental  '
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label='Co-broke'
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label='Appraisal  '
                      />
                    </Stack>
                  </Box>

                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6} mt={3}>
                      {' '}
                      <Box variant='div' component='div'>
                        <label>Owners first name </label>
                        <TextField
                          fullWidth
                          id='first-name'
                          label=''
                          variant='outlined'
                          placeholder='Enter first name'
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} mt={3}>
                      <Box variant='div' component='div'>
                        <label>Owners last name </label>
                        <TextField
                          fullWidth
                          id='last-name'
                          label=''
                          variant='outlined'
                          placeholder='Enter last name '
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Box variant='div' component='div'>
                        <label>Matching contacts</label>

                        <MatchingContacts />
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mt={3}>
                      <Box variant='div' component='div'>
                        <label> Country </label>
                        <ReactFlagsSelect
                          selected={selected}
                          onSelect={(code) => setSelected(code)}
                          className='country-dropdown'
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4} mt={3}>
                      <Box variant='div' component='div'>
                        <label> Island </label>
                        <Select
                          fullWidth
                          id='primary-agent'
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
                          <MenuItem value={10}>Island 1</MenuItem>
                          <MenuItem value={20}>Island 2</MenuItem>
                          <MenuItem value={30}>Island 3</MenuItem>
                          <MenuItem value={10}>Island 4</MenuItem>
                          <MenuItem value={20}>Island 5</MenuItem>
                          <MenuItem value={30}>Island 6</MenuItem>
                        </Select>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mt={3}>
                      <Box variant='div' component='div'>
                        <label>
                          Area
                          <Typography
                            variant='body1'
                            component='span'
                            className='optional-label'
                          >
                            Optional
                          </Typography>
                        </label>
                        <Select
                          fullWidth
                          id='secondary-agent'
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
                            Select Location
                          </MenuItem>
                          <MenuItem value={10}>Location 1</MenuItem>
                          <MenuItem value={20}>Location 2</MenuItem>
                          <MenuItem value={30}>Location 3</MenuItem>
                          <MenuItem value={10}>Location 4</MenuItem>
                          <MenuItem value={20}>Location 5</MenuItem>
                          <MenuItem value={30}>Location 6</MenuItem>
                        </Select>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} mt={3}>
                      <Box
                        variant='div'
                        component='div'
                        className='date-range-picker'
                      >
                        <label>Date listed </label>
                        {/* <DemoContainer components={['DatePicker']}>
                          <DatePicker sx={{ width: '100%' }} />
                        </DemoContainer> */}
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DateRangeCalendar']}>
                            <DateRangeCalendar calendars={1} />
                          </DemoContainer>
                        </LocalizationProvider> */}
                        <DemoContainer
                          components={['SingleInputDateRangeField']}
                        >
                          <DateRangePicker
                            slots={{ field: SingleInputDateRangeField }}
                            // calendars={1}
                            calendars={2}
                          />
                        </DemoContainer>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} mt={3}>
                      <Box
                        variant='div'
                        component='div'
                        className='date-range-picker'
                      >
                        <label>Date sold </label>
                        <DemoContainer
                          components={['SingleInputDateRangeField']}
                        >
                          <DateRangePicker
                            slots={{ field: SingleInputDateRangeField }}
                            calendars={2}
                          />
                        </DemoContainer>
                        {/* <DemoContainer components={['DatePicker']}>
                          <DatePicker sx={{ width: '100%' }} />
                        </DemoContainer> */}
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} mt={3}>
                      <Box
                        variant='div'
                        component='div'
                        className='date-range-picker'
                      >
                        <label>Date under contract </label>
                        <DemoContainer
                          components={['SingleInputDateRangeField']}
                        >
                          <DateRangePicker
                            slots={{ field: SingleInputDateRangeField }}
                            calendars={2}
                          />
                        </DemoContainer>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} mt={3}>
                      <Box
                        variant='div'
                        component='div'
                        className='date-range-picker'
                      >
                        <label>Date of expiry </label>
                        <DemoContainer
                          components={['SingleInputDateRangeField']}
                        >
                          <DateRangePicker
                            slots={{ field: SingleInputDateRangeField }}
                            calendars={2}
                          />
                        </DemoContainer>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mt={3}>
                      <Box variant='div' component='div'>
                        <label>Bedrooms </label>
                        <Select
                          fullWidth
                          id='secondary-agent'
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
                            Select Bedrooms
                          </MenuItem>
                          <MenuItem value={1}> 1</MenuItem>
                          <MenuItem value={2}> 2</MenuItem>
                          <MenuItem value={3}> 3</MenuItem>
                          <MenuItem value={4}> 4</MenuItem>
                          <MenuItem value={5}> 5</MenuItem>
                          <MenuItem value={6}> 6</MenuItem>
                          <MenuItem value={7}> 7</MenuItem>
                          <MenuItem value={8}> 8</MenuItem>
                          <MenuItem value={9}> 9</MenuItem>

                          <MenuItem value={10}> 10</MenuItem>
                          <MenuItem value={11}> 11</MenuItem>
                          <MenuItem value={12}> 12</MenuItem>
                          <MenuItem value={13}> 13</MenuItem>
                          <MenuItem value={14}> 14</MenuItem>
                          <MenuItem value={15}> 15</MenuItem>
                          <MenuItem value={16}> 16</MenuItem>
                          <MenuItem value={17}> 17</MenuItem>
                          <MenuItem value={18}> 18</MenuItem>
                          <MenuItem value={19}> 19</MenuItem>
                          <MenuItem value={20}> 20</MenuItem>

                          <MenuItem value={21}> 21</MenuItem>
                          <MenuItem value={22}> 22</MenuItem>
                          <MenuItem value={23}> 23</MenuItem>
                          <MenuItem value={24}> 24</MenuItem>
                          <MenuItem value={25}> 25</MenuItem>
                        </Select>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mt={3}>
                      <Box variant='div' component='div'>
                        <label>Bathrooms </label>
                        <Select
                          fullWidth
                          id='secondary-agent'
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
                            Select Bathrooms
                          </MenuItem>
                          <MenuItem value={1}> 1</MenuItem>
                          <MenuItem value={2}> 2</MenuItem>
                          <MenuItem value={3}> 3</MenuItem>
                          <MenuItem value={4}> 4</MenuItem>
                          <MenuItem value={5}> 5</MenuItem>
                          <MenuItem value={6}> 6</MenuItem>
                          <MenuItem value={7}> 7</MenuItem>
                          <MenuItem value={8}> 8</MenuItem>
                          <MenuItem value={9}> 9</MenuItem>

                          <MenuItem value={10}> 10</MenuItem>
                          <MenuItem value={11}> 11</MenuItem>
                          <MenuItem value={12}> 12</MenuItem>
                          <MenuItem value={13}> 13</MenuItem>
                          <MenuItem value={14}> 14</MenuItem>
                          <MenuItem value={15}> 15</MenuItem>
                          <MenuItem value={16}> 16</MenuItem>
                          <MenuItem value={17}> 17</MenuItem>
                          <MenuItem value={18}> 18</MenuItem>
                          <MenuItem value={19}> 19</MenuItem>
                          <MenuItem value={20}> 20</MenuItem>

                          <MenuItem value={21}> 21</MenuItem>
                          <MenuItem value={22}> 22</MenuItem>
                          <MenuItem value={23}> 23</MenuItem>
                          <MenuItem value={24}> 24</MenuItem>
                          <MenuItem value={25}> 25</MenuItem>
                        </Select>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mt={3}>
                      <Box variant='div' component='div'>
                        <label>Partial Bathrooms</label>
                        <Select
                          fullWidth
                          id='secondary-agent'
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
                            Select Partial Bathrooms
                          </MenuItem>
                          <MenuItem value={1}> 1</MenuItem>
                          <MenuItem value={2}> 2</MenuItem>
                          <MenuItem value={3}> 3</MenuItem>
                          <MenuItem value={4}> 4</MenuItem>
                          <MenuItem value={5}> 5</MenuItem>
                          <MenuItem value={6}> 6</MenuItem>
                          <MenuItem value={7}> 7</MenuItem>
                          <MenuItem value={8}> 8</MenuItem>
                          <MenuItem value={9}> 9</MenuItem>

                          <MenuItem value={10}> 10</MenuItem>
                          <MenuItem value={11}> 11</MenuItem>
                          <MenuItem value={12}> 12</MenuItem>
                          <MenuItem value={13}> 13</MenuItem>
                          <MenuItem value={14}> 14</MenuItem>
                          <MenuItem value={15}> 15</MenuItem>
                          <MenuItem value={16}> 16</MenuItem>
                          <MenuItem value={17}> 17</MenuItem>
                          <MenuItem value={18}> 18</MenuItem>
                          <MenuItem value={19}> 19</MenuItem>
                          <MenuItem value={20}> 20</MenuItem>

                          <MenuItem value={21}> 21</MenuItem>
                          <MenuItem value={22}> 22</MenuItem>
                          <MenuItem value={23}> 23</MenuItem>
                          <MenuItem value={24}> 24</MenuItem>
                          <MenuItem value={25}> 25</MenuItem>
                        </Select>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mt={3}>
                      <Box
                        variant='div'
                        component='div'
                        className='multiple-selection'
                      >
                        <label>Property Type</label>
                        <FormControl>
                          <Select
                            labelId='demo-multiple-checkbox-label'
                            id='contact-type-multiple-checkbox'
                            multiple
                            placeholder='Select Contact Type'
                            value={propertylistName}
                            onChange={handlepropertyChange}
                            IconComponent={RiArrowDownSLine}
                            renderValue={(selected) => selected.join(', ')}
                          >
                            {propertytype.map((propertyname) => (
                              <MenuItem key={propertyname} value={propertyname}>
                                <Checkbox
                                  checked={
                                    propertylistName.indexOf(propertyname) > -1
                                  }
                                />
                                <ListItemText primary={propertyname} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mt={3}>
                      <Box variant='div' component='div'>
                        <label>Status </label>
                        <Select
                          fullWidth
                          id='secondary-agent'
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
                            Select Status
                          </MenuItem>
                          <MenuItem value={10}>Listed</MenuItem>
                          <MenuItem value={20}>Offer Pending</MenuItem>
                          <MenuItem value={30}>Under contract</MenuItem>
                          <MenuItem value={40}>Sold</MenuItem>
                        </Select>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mt={3}>
                      <Box variant='div' component='div'>
                        <label>Sq. Ft. </label>
                        <Select
                          fullWidth
                          id='secondary-agent'
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
                            Select Sq. Ft.
                          </MenuItem>
                          <MenuItem value={10}>Sq. Ft. 1</MenuItem>
                          <MenuItem value={20}>Sq. Ft. 2</MenuItem>
                          <MenuItem value={30}>Sq. Ft. 3</MenuItem>
                          <MenuItem value={10}>Sq. Ft. 4</MenuItem>
                        </Select>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Box variant='div' component='div'>
                        <label>Listing price ($) </label>
                        <Stack
                          spacing={{ xs: 1, sm: 2 }}
                          direction='row'
                          useFlexGap
                          alignItems='center'
                        >
                          <TextField
                            fullWidth
                            id='outlined-basic'
                            type='number'
                            variant='outlined'
                            placeholder='Enter minimum '
                          />
                          <TextField
                            fullWidth
                            id='outlined-basic'
                            type='number'
                            variant='outlined'
                            placeholder='Enter maximum'
                          />
                        </Stack>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                      <Box variant='div' component='div'>
                        <label>Land Size </label>
                        <Stack
                          spacing={{ xs: 1, sm: 2 }}
                          direction='row'
                          useFlexGap
                        >
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label='Acres'
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label='Sq. Ft. '
                          />
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Box variant='div' component='div'>
                        <label className='empty-label'></label>

                        <TextField
                          fullWidth
                          id='outlined-basic'
                          type='number'
                          variant='outlined'
                          placeholder='4.758'
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Box
                        variant='div'
                        component='div'
                        className='multiple-selection'
                      >
                        <label>Amenities </label>
                        <FormControl className=''>
                          <Select
                            labelId='amenities-selection'
                            id='contact-type-multiple-checkbox '
                            multiple
                            placeholder='Select Contact Type'
                            value={personName}
                            onChange={handleChange}
                            IconComponent={RiArrowDownSLine}
                            renderValue={(selected) => selected.join(', ')}
                            className=''
                          >
                            {names.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                className='li-menu'
                              >
                                <Checkbox
                                  checked={personName.indexOf(name) > -1}
                                />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                  <Stack
                    direction='row'
                    justifyContent='flex-end'
                    alignItems='center'
                    flexWrap='wrap'
                    spacing={2}
                    sx={{
                      marginTop: { xs: 3, sm: 5, xl: 5 },
                    }}
                    className='search-form-controls'
                  >
                    <Button
                      variant='outlined'
                      size='large'
                      className='outline-btn btn'
                      // onClick={handleClose}
                      onClick={navigateToListing}
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      size='large'
                      onClick={() => setIsSubmitted(true)}
                      className='primary-btn btn'
                    >
                      Search
                    </Button>
                  </Stack>
                </Box>
              ) : (
                <Box className='listing-card-scrollable-content advanced-search-result'>
                  <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                      paddingBottom: { xs: 2, xl: 2 },
                      paddingTop: { xs: 2, xl: 2 },
                    }}
                    className='main-title'
                  >
                    <Typography variant='h3' component='h3'>
                      Results
                    </Typography>
                  </Stack>
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
              )}
            </Box>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default AdvanceSearch;
