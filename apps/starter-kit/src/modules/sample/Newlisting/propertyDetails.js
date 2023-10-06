import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { RiArrowDownSLine, RiCloseLine, RiPencilFill } from 'react-icons/ri';

const PropertyDetails = () => {
  return (
    <>
      <Box variant='div' component='div' className='propery-detial-form'>
        <Box variant='div' component='div' className='step-title'>
          <Typography variant='h2' component='h2'>
            Property Details
          </Typography>
          <Typography variant='p' component='p' className='title-agent-detail'>
            Agent:{''}
            <Typography variant='body1' component='span' className=''>
              John Smith
              <IconButton aria-label='edit'>
                <RiPencilFill />
              </IconButton>
            </Typography>
          </Typography>
        </Box>
        <Box variant='div' component='div' className='property-detial-form'>
          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Bedrooms </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Enter Number '
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Bathrooms </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Enter Number '
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>
                  Partial Bathrooms{' '}
                  <Typography
                    variant='body1'
                    component='span'
                    className='optional-label'
                  >
                    Optional
                  </Typography>
                </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='1/2 '
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div'>
                <label>Amenities </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Wifi</MenuItem>
                  <MenuItem value={20}>Parking</MenuItem>
                  <MenuItem value={30}>Pet-friendly </MenuItem>
                  <MenuItem value={40}>Fully equipped kitchen</MenuItem>
                  <MenuItem value={10}>Gym</MenuItem>
                  <MenuItem value={20}>Pool</MenuItem>
                  <MenuItem value={30}>Spa </MenuItem>
                  <MenuItem value={40}>Laundry</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Water </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Water 1</MenuItem>
                  <MenuItem value={20}>Water 2</MenuItem>
                  <MenuItem value={30}>Water 3 </MenuItem>
                  <MenuItem value={40}>Water 4</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Sewer</label>

                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Sewer 1</MenuItem>
                  <MenuItem value={20}>Sewer 2</MenuItem>
                  <MenuItem value={30}>Sewer 3</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Parking</label>

                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Parking 1</MenuItem>
                  <MenuItem value={20}>Parking 2</MenuItem>
                  <MenuItem value={30}>Parking 3</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Unit </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Enter Number '
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Block </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Enter Number '
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Lot number </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='1/2 '
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Appointments </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Appointments 1</MenuItem>
                  <MenuItem value={20}>Appointments 2</MenuItem>
                  <MenuItem value={30}>Appointments 3</MenuItem>
                  <MenuItem value={40}>Appointments 4</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Occupancy</label>

                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Occupancy 1</MenuItem>
                  <MenuItem value={20}>Occupancy 2</MenuItem>
                  <MenuItem value={30}>Occupancy 3</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Style </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Style 1</MenuItem>
                  <MenuItem value={20}>Style 2</MenuItem>
                  <MenuItem value={30}>Style 3</MenuItem>
                  <MenuItem value={40}>Style 4</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Stories </label>

                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>2 Stories</MenuItem>
                  <MenuItem value={20}>3 Stories</MenuItem>
                  <MenuItem value={30}>4 Stories</MenuItem>
                  <MenuItem value={10}>5 Stories</MenuItem>
                  <MenuItem value={20}>6 Stories</MenuItem>
                  <MenuItem value={30}>7 Stories</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Construction </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Construction 1</MenuItem>
                  <MenuItem value={20}>Construction 2</MenuItem>
                  <MenuItem value={30}>Construction 3</MenuItem>
                  <MenuItem value={40}>Construction 4</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Exterior Finish </label>

                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select Agent'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Exterior Finish 7</MenuItem>
                  <MenuItem value={20}>Exterior Finish 8</MenuItem>
                  <MenuItem value={30}>Exterior Finish 9</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Air conditioning </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Air conditioning 2</MenuItem>
                  <MenuItem value={20}>Air conditioning 3</MenuItem>
                  <MenuItem value={30}>Air conditioning 4</MenuItem>
                  <MenuItem value={40}>Air conditioning 5</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Fee Includes </label>

                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select Agent'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>Yes</MenuItem>
                  <MenuItem value={20}>No</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={3}>
              <Box variant='div' component='div'>
                <label>Land Size </label>
                <Stack spacing={{ xs: 1, sm: 2 }} direction='row' useFlexGap>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='Acres'
                  />
                  <FormControlLabel control={<Checkbox />} label='Sq. Ft. ' />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box variant='div' component='div'>
                <label className='empty-label'></label>

                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='4.758'
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>
                  Dimension (ft){' '}
                  <Typography
                    variant='body1'
                    component='span'
                    className='optional-label'
                  >
                    Optional
                  </Typography>
                </label>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction='row'
                  useFlexGap
                  alignItems='center'
                >
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Enter Number '
                  />
                  <Typography variant='caption'>
                    {' '}
                    <RiCloseLine />{' '}
                  </Typography>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Enter Number '
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Building size (Sq. Ft.) </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Enter building size '
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>Year built </label>

                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}>2015</MenuItem>
                  <MenuItem value={20}>2016</MenuItem>
                  <MenuItem value={30}>2017</MenuItem>
                  <MenuItem value={10}>2018</MenuItem>
                  <MenuItem value={20}>2019</MenuItem>
                  <MenuItem value={30}>2020</MenuItem>
                  <MenuItem value={10}>2021</MenuItem>
                  <MenuItem value={20}>2022</MenuItem>
                  <MenuItem value={30}>2023</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div'>
                <label>
                  Dimension (ft){' '}
                  <Typography
                    variant='body1'
                    component='span'
                    className='optional-label'
                  >
                    Optional
                  </Typography>
                </label>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction='row'
                  useFlexGap
                  alignItems='center'
                >
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Enter Number '
                  />
                  <Typography variant='caption'>
                    {' '}
                    <RiCloseLine />{' '}
                  </Typography>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Enter Number '
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div'>
                <label>
                  Driving Directions{' '}
                  <Typography
                    variant='body1'
                    component='span'
                    className='optional-label'
                  >
                    Optional
                  </Typography>
                </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Details about the property  '
                  multiline
                  rows={4}
                  maxRows={4}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PropertyDetails;
