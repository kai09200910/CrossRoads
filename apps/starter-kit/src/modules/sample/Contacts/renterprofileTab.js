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
                label=''
                placeholder='Select'
                IconComponent={RiArrowDownSLine}
              >
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
                label=''
                placeholder='Select'
                IconComponent={RiArrowDownSLine}
              >
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
                label=''
                placeholder='Select'
                IconComponent={RiArrowDownSLine}
              >
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
          <Grid item xs={12} md={8}>
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

export default RenterprofileTab;
