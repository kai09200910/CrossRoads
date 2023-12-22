import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  Stack,
  Button,
  RadioGroup,
  Radio,
  InputAdornment,
  ListItemText,
} from '@mui/material';
import { RiAddFill, RiArrowDownSLine, RiSearchLine } from 'react-icons/ri';

const BuyerprofileTab = () => {
  const [activebed, setActivebed] = useState('');
  const [activebath, setActivebath] = useState('');

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  const [personName, setPersonName] = React.useState([]);
  const [person, setPerson] = React.useState([]);
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
      <Box className='personalinfo-tab'>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Box variant='div' component='div'>
                  <label>Location </label>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Search Location'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <RiSearchLine />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box variant='div' component='div'>
                  <label className='empty-label'></label>
                  <Button
                    variant='contained'
                    size='large'
                    className='secondary-btn btn add-location-btn '
                    startIcon={<RiAddFill size={18} />}
                  >
                    Map location
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Property type </label>
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
                  Select Property Type
                </MenuItem>
                <MenuItem value={10}>MLS Exclusive</MenuItem>
                <MenuItem value={20}>General </MenuItem>
                <MenuItem value={30}>Exclusive (not on MLS) </MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={3}>
          {/* <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box variant='div' component='div'>
                  <label>Bedrooms </label>
                  <Stack
                    direction='row'
                    justifyContent='flex-start'
                    alignItems='center'
                    spacing={2}
                    className='bed-bath-wrap'
                  >
                    <RadioGroup
                      row
                      aria-labelledby='demo-row-radio-buttons-group-label'
                      name='row-radio-buttons-group'
                      className='bed-bath-radio-btn-grp'
                      disableRipple
                      onChange={(event) => setActivebed(event.target.value)}
                    >
                      <FormControlLabel
                        value='bedroom0'
                        control={<Radio />}
                        label='0+'
                        disableRipple
                        className={activebed === 'bedroom0' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bedroom1'
                        control={<Radio />}
                        label='1+'
                        disableRipple
                        className={activebed === 'bedroom1' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bedroom2'
                        control={<Radio />}
                        label='2+'
                        disableRipple
                        className={activebed === 'bedroom2' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bedroom3'
                        control={<Radio />}
                        label='3+'
                        disableRipple
                        className={activebed === 'bedroom3' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bedroom4'
                        control={<Radio />}
                        label='4+'
                        disableRipple
                        className={activebed === 'bedroom4' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bedroom5'
                        control={<Radio />}
                        label='5+'
                        disableRipple
                        className={activebed === 'bedroom5' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bedroom6'
                        control={<Radio />}
                        label='6+'
                        disableRipple
                        className={activebed === 'bedroom6' && 'btn-selected'}
                      />
                    </RadioGroup>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box variant='div' component='div'>
                  <label>Bathrooms </label>
                  <Stack
                    direction='row'
                    justifyContent='flex-start'
                    alignItems='center'
                    spacing={2}
                    className='bed-bath-wrap'
                  >
                    <RadioGroup
                      row
                      aria-labelledby='demo-row-radio-buttons-group-label'
                      name='row-radio-buttons-group'
                      className='bed-bath-radio-btn-grp'
                      disableRipple
                      onChange={(event) => setActivebath(event.target.value)}
                    >
                      <FormControlLabel
                        value='bathroom0'
                        control={<Radio />}
                        label='0+'
                        disableRipple
                        className={activebath === 'bathroom0' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bathroom1'
                        control={<Radio />}
                        label='1+'
                        disableRipple
                        className={activebath === 'bathroom1' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bathroom2'
                        control={<Radio />}
                        label='2+'
                        disableRipple
                        className={activebath === 'bathroom2' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bathroom3'
                        control={<Radio />}
                        label='3+'
                        disableRipple
                        className={activebath === 'bathroom3' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bathroom4'
                        control={<Radio />}
                        label='4+'
                        disableRipple
                        className={activebath === 'bathroom4' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bathroom5'
                        control={<Radio />}
                        label='5+'
                        disableRipple
                        className={activebath === 'bathroom5' && 'btn-selected'}
                      />
                      <FormControlLabel
                        value='bathroom6'
                        control={<Radio />}
                        label='6+'
                        disableRipple
                        className={activebath === 'bathroom6' && 'btn-selected'}
                      />
                    </RadioGroup>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid> */}

          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box variant='div' component='div'>
                  <label>Bedrooms</label>
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
              <Grid item xs={12} md={6}>
                <Box variant='div' component='div'>
                  <label>Bathrooms</label>
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
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Price range ($)</label>
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
                  placeholder='$Min '
                />

                <TextField
                  fullWidth
                  id='outlined-basic'
                  type='number'
                  variant='outlined'
                  placeholder='$Max  '
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={8}>
            <Box variant='div' component='div'>
              <label>Lot acreage </label>
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
                  Select Lot acreage
                </MenuItem>
                <MenuItem value={10}>Lot acreage 123</MenuItem>
                <MenuItem value={20}>Lot acreage 456</MenuItem>
                <MenuItem value={30}>Lot acreage 789</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Interior size (sq. ft.): </label>
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
                  placeholder='Min '
                />

                <TextField
                  fullWidth
                  id='outlined-basic'
                  type='number'
                  variant='outlined'
                  placeholder='Max  '
                />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div' className='multiple-selection'>
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
                    <MenuItem key={name} value={name} className='li-menu'>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={10}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={5}>
                <Box variant='div' component='div'>
                  <label>This contact currently: </label>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <FormControlLabel
                      value='owns'
                      control={<Radio />}
                      label='Owns  '
                    />
                    <FormControlLabel
                      value='rents'
                      control={<Radio />}
                      label='Rents '
                    />
                  </RadioGroup>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <Box variant='div' component='div'>
                  <label>Brokerage: </label>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <FormControlLabel
                      value='All'
                      control={<Radio />}
                      label='All  '
                    />
                    <FormControlLabel
                      value='Brokerage only'
                      control={<Radio />}
                      label='Brokerage only  '
                    />
                    <FormControlLabel
                      value='MLS only'
                      control={<Radio />}
                      label='MLS only'
                    />
                  </RadioGroup>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BuyerprofileTab;
