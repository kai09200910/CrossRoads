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

const RenterprofileTab = () => {
  const [activebed, setActivebed] = useState('');
  const [activebath, setActivebath] = useState('');

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  return (
    <>
      <Box className='personalinfo-tab'>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={8}>
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
              <Grid item xs={12} sm={4} md={4}>
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
                <MenuItem value={10}>Single Family Home </MenuItem>
                <MenuItem value={11}>Half Duplex </MenuItem>
                <MenuItem value={12}>Condo </MenuItem>
                <MenuItem value={13}>Full Duplex </MenuItem>
                <MenuItem value={14}>Triplex </MenuItem>
                <MenuItem value={15}>Fourplex </MenuItem>
                <MenuItem value={16}>Farm/Ranch </MenuItem>
                <MenuItem value={17}>Lots/Acreage </MenuItem>
                <MenuItem value={18}>Resort/Hotel </MenuItem>
                <MenuItem value={19}>Private Island </MenuItem>
                <MenuItem value={20}>Sixplex </MenuItem>
                <MenuItem value={21}>Apartment Complex </MenuItem>
                <MenuItem value={22}>Dock</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
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
              <Grid item xs={12} sm={6} md={6}>
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
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Lot Size (Acres) </label>
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
          <Grid item xs={12} md={4}>
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
                <MenuItem value={10}>1 </MenuItem>
                <MenuItem value={11}>2 </MenuItem>
                <MenuItem value={12}>3 </MenuItem>
                <MenuItem value={13}>4 </MenuItem>
                <MenuItem value={14}>5 </MenuItem>
                <MenuItem value={15}>6 </MenuItem>
                <MenuItem value={16}>7 </MenuItem>
                <MenuItem value={17}>8 </MenuItem>
                <MenuItem value={18}>9 </MenuItem>
                <MenuItem value={19}>10 </MenuItem>
                <MenuItem value={20}>11 </MenuItem>
                <MenuItem value={21}>12 </MenuItem>
                <MenuItem value={22}>13</MenuItem>
                <MenuItem value={23}>14 </MenuItem>
                <MenuItem value={24}>15 </MenuItem>
                <MenuItem value={25}>16 </MenuItem>
                <MenuItem value={26}>17 </MenuItem>
                <MenuItem value={27}>18</MenuItem>
                <MenuItem value={28}>19 </MenuItem>
                <MenuItem value={29}>20</MenuItem>
                <MenuItem value={30}>21 </MenuItem>
                <MenuItem value={31}>22 </MenuItem>
                <MenuItem value={32}>23</MenuItem>
                <MenuItem value={33}>24 </MenuItem>
                <MenuItem value={34}>25 </MenuItem>
                <MenuItem value={35}>26 </MenuItem>
                <MenuItem value={36}>27 </MenuItem>
                <MenuItem value={37}>28</MenuItem>
                <MenuItem value={38}>29 </MenuItem>
                <MenuItem value={39}>30</MenuItem>
              </Select>
            </Box>
          </Grid>
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
          {/* <Grid item xs={12} md={4}></Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default RenterprofileTab;
