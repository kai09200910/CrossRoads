import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  ListItemText,
} from '@mui/material';

import { RiArrowDownSLine, RiCloseLine } from 'react-icons/ri';
import Agentinfo from './agentInfo';

const PropertyDetails = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);

  const [personName, setPersonName] = React.useState([]);
  const [person, setPerson] = React.useState([]);

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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <Box variant='div' component='div' className='propery-detial-form'>
        <Box variant='div' component='div' className='step-title'>
          <Typography variant='h2' component='h2'>
            Property Details
          </Typography>
        </Box>
        <Agentinfo
          isEditClicked={isEditClicked}
          setIsEditClicked={setIsEditClicked}
          personName={personName}
          person={person}
          setPerson={setPerson}
          setPersonName={setPersonName}
        />
        <Box variant='div' component='div' className='property-detial-form'>
          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={4}>
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
                    Select
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
                  <MenuItem value={26}> 26</MenuItem>
                  <MenuItem value={27}> 27</MenuItem>
                  <MenuItem value={28}> 28</MenuItem>
                  <MenuItem value={29}> 29</MenuItem>
                  <MenuItem value={30}> 30</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
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
                    Select
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
                  <MenuItem value={26}> 26</MenuItem>
                  <MenuItem value={27}> 27</MenuItem>
                  <MenuItem value={28}> 28</MenuItem>
                  <MenuItem value={29}> 29</MenuItem>
                  <MenuItem value={30}> 30</MenuItem>
                </Select>
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
                  type='number'
                  variant='outlined'
                  placeholder='1/2 '
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={12}>
              <Box
                variant='div'
                component='div'
                className='amenities-selection'
              >
                <label>Amenities </label>
                <FormControl sx={{ width: '100%' }}>
                  <Select
                    labelId='amenities-selection'
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
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                    Select Water
                  </MenuItem>
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
                    Select Sewer
                  </MenuItem>
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
                    Select Parking
                  </MenuItem>
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
                  type='number'
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
                  type='number'
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
                  type='number'
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
                    Select Appointments
                  </MenuItem>
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
                    Select Occupancy
                  </MenuItem>
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
                    Select Style
                  </MenuItem>
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
                    Select Stories
                  </MenuItem>
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
                    Select Construction
                  </MenuItem>
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
                    Select Exterior Finish
                  </MenuItem>
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
                    Select Air conditioning
                  </MenuItem>
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
                    Select Fee Includes
                  </MenuItem>
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
                  type='number'
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
                    type='number'
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
                    type='number'
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
                  type='number'
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
                    Select Built Year
                  </MenuItem>
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
                    type='number'
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
                    type='number'
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
                  Driving directions{' '}
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
