import React, { useState } from 'react';
import {
  Box,
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
} from '@mui/material';
import { RiAddFill, RiArrowDownSLine, RiSearchLine } from 'react-icons/ri';

const SellerprofileTab = () => {
  const [activebed, setActivebed] = useState('');
  const [activebath, setActivebath] = useState('');

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  return (
    <>
      <Box className='personalinfo-tab'>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Listing </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Search listing #'
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
                    {' '}
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
                  Select Property type
                </MenuItem>
                <MenuItem value={10}>MLS Exclusive</MenuItem>
                <MenuItem value={20}>General </MenuItem>
                <MenuItem value={30}>Exclusive (not on MLS) </MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={6}>
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
        </Grid>

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={8}>
            <Box variant='div' component='div'>
              <label>People per household </label>
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
                  Select People
                </MenuItem>
                <MenuItem value={10}>5 People</MenuItem>
                <MenuItem value={20}>10 People</MenuItem>
                <MenuItem value={30}>15 People</MenuItem>
                <MenuItem value={40}>20 People</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={12}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4} md={4}>
                <Box variant='div' component='div'>
                  <label>This contact currently: </label>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <FormControlLabel
                      value='Owns'
                      control={<Radio />}
                      label='Owns  '
                    />
                    <FormControlLabel
                      value='Rents'
                      control={<Radio />}
                      label='Rents '
                    />
                  </RadioGroup>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Box variant='div' component='div'>
                  <label>Brokerage: </label>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <FormControlLabel
                      value='Brokerage only '
                      control={<Radio />}
                      label='Brokerage only  '
                    />
                    <FormControlLabel
                      value='MLS'
                      control={<Radio />}
                      label='MLS '
                    />
                  </RadioGroup>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Box variant='div' component='div'>
                  <label>Pets allowed?</label>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <FormControlLabel
                      value='Yes'
                      control={<Radio />}
                      label='Yes  '
                    />
                    <FormControlLabel
                      value='No'
                      control={<Radio />}
                      label='No '
                    />
                  </RadioGroup>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Box variant='div' component='div'>
                  <label>Children allowed? </label>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <FormControlLabel
                      value='Yes'
                      control={<Radio />}
                      label='Yes '
                    />
                    <FormControlLabel
                      value='No'
                      control={<Radio />}
                      label='No '
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

export default SellerprofileTab;
