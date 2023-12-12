import React, { useState } from 'react';
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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';
import './propertylist.scss';

const AdvanceSearch = () => {
  const breadcrumbs = [
    // <Link underline='hover' key='1' color='inherit' to='/campaigns'>
    //   All listings
    // </Link>,
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

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

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

  const navigate = useNavigate();
  const navigateToListing = () => {
    navigate('/my-listing');
  };

  return (
    <>
      <Paper mt={2}>
        <Container>
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
                {breadcrumbs}
              </Breadcrumbs>
            </Box>
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
              sx={{
                paddingTop: { xs: 6, xl: 6 },
              }}
            >
              <Box
                sx={{ width: '100%', overflow: 'hidden' }}
                className='search-form-wrapper'
              >
                <Grid item xs={12} md={6}>
                  <Box variant='div' component='div'>
                    <Stack
                      spacing={{ xs: 1, sm: 2 }}
                      direction='row'
                      useFlexGap
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
                </Grid>

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
                      <label>Location</label>
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

                  <Grid item xs={12} md={4} mt={3}>
                    <Box variant='div' component='div'>
                      <label>Listing price </label>
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
                          Select Price
                        </MenuItem>
                        <MenuItem value={10}>Price 1</MenuItem>
                        <MenuItem value={20}>Price 2</MenuItem>
                        <MenuItem value={30}>Price 3</MenuItem>
                        <MenuItem value={10}>Price 4</MenuItem>
                        <MenuItem value={20}>Price 5</MenuItem>
                        <MenuItem value={30}>Price 6</MenuItem>
                      </Select>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} mt={3}>
                    <Box variant='div' component='div'>
                      <label>Date listed </label>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker sx={{ width: '100%' }} />
                      </DemoContainer>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} mt={3}>
                    <Box variant='div' component='div'>
                      <label>Date sold </label>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker sx={{ width: '100%' }} />
                      </DemoContainer>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} mt={3}>
                    <Box variant='div' component='div'>
                      <label>Date under contract </label>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker sx={{ width: '100%' }} />
                      </DemoContainer>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} mt={3}>
                    <Box variant='div' component='div'>
                      <label>Date of expiry </label>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker sx={{ width: '100%' }} />
                      </DemoContainer>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4} mt={3}>
                    <Box variant='div' component='div'>
                      <label>Property Type</label>
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
                          Select Property Type
                        </MenuItem>
                        <MenuItem value={10}>MLS Exclusive</MenuItem>
                        <MenuItem value={20}>General </MenuItem>
                        <MenuItem value={30}>Exclusive (not on MLS) </MenuItem>
                      </Select>
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
                        <MenuItem value={10}> 1</MenuItem>
                        <MenuItem value={20}> 2</MenuItem>
                        <MenuItem value={30}> 3</MenuItem>
                        <MenuItem value={10}> 4</MenuItem>
                        <MenuItem value={20}> 5</MenuItem>
                        <MenuItem value={30}> 6</MenuItem>
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
                        <MenuItem value={10}> 1</MenuItem>
                        <MenuItem value={20}> 2</MenuItem>
                        <MenuItem value={30}> 3</MenuItem>
                        <MenuItem value={10}> 4</MenuItem>
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
                        <MenuItem value={10}> 1</MenuItem>
                        <MenuItem value={20}> 2</MenuItem>
                        <MenuItem value={30}> 3</MenuItem>
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
                        <MenuItem value={10}>Status 1</MenuItem>
                        <MenuItem value={20}>Status 2</MenuItem>
                        <MenuItem value={30}>Status 3</MenuItem>
                        <MenuItem value={10}>Status 4</MenuItem>
                      </Select>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Box
                      variant='div'
                      component='div'
                      className='amenities-selection'
                    >
                      <label>Amenities </label>
                      <FormControl>
                        <Select
                          labelId='demo-multiple-checkbox-label'
                          id='contact-type-multiple-checkbox'
                          multiple
                          placeholder='Select Contact Type'
                          value={personName}
                          onChange={handleChange}
                          IconComponent={RiArrowDownSLine}
                          renderValue={(selected) => selected.join(', ')}
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
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
              </Box>
              <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
                spacing={2}
                sx={{
                  marginTop: { xs: 3, sm: 5, xl: 5 },
                }}
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
                  // onClick={() => setIsSubmitted(true)}
                  className='primary-btn btn'
                >
                  Search
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default AdvanceSearch;
