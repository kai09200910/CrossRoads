import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
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
  Switch,
  ListItemText,
} from '@mui/material';
import { RiArrowDownSLine, RiSearchLine } from 'react-icons/ri';

const ListingalertDialog = ({ open, handleClose, title }) => {
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
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper add-contact-modal'
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
          >
            {title}
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <>
            <Box className='personalinfo-tab'>
              <Grid container spacing={5} mt={3}>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div'>
                    <label>Name </label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      type='number'
                      variant='outlined'
                      placeholder='Name listing alert  '
                    />
                  </Box>
                </Grid>
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
                            onChange={(event) =>
                              setActivebed(event.target.value)
                            }
                          >
                            <FormControlLabel
                              value='bedroom0'
                              control={<Radio />}
                              label='0+'
                              disableRipple
                              className={
                                activebed === 'bedroom0' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bedroom1'
                              control={<Radio />}
                              label='1+'
                              disableRipple
                              className={
                                activebed === 'bedroom1' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bedroom2'
                              control={<Radio />}
                              label='2+'
                              disableRipple
                              className={
                                activebed === 'bedroom2' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bedroom3'
                              control={<Radio />}
                              label='3+'
                              disableRipple
                              className={
                                activebed === 'bedroom3' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bedroom4'
                              control={<Radio />}
                              label='4+'
                              disableRipple
                              className={
                                activebed === 'bedroom4' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bedroom5'
                              control={<Radio />}
                              label='5+'
                              disableRipple
                              className={
                                activebed === 'bedroom5' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bedroom6'
                              control={<Radio />}
                              label='6+'
                              disableRipple
                              className={
                                activebed === 'bedroom6' && 'btn-selected'
                              }
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
                            onChange={(event) =>
                              setActivebath(event.target.value)
                            }
                          >
                            <FormControlLabel
                              value='bathroom0'
                              control={<Radio />}
                              label='0+'
                              disableRipple
                              className={
                                activebath === 'bathroom0' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bathroom1'
                              control={<Radio />}
                              label='1+'
                              disableRipple
                              className={
                                activebath === 'bathroom1' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bathroom2'
                              control={<Radio />}
                              label='2+'
                              disableRipple
                              className={
                                activebath === 'bathroom2' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bathroom3'
                              control={<Radio />}
                              label='3+'
                              disableRipple
                              className={
                                activebath === 'bathroom3' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bathroom4'
                              control={<Radio />}
                              label='4+'
                              disableRipple
                              className={
                                activebath === 'bathroom4' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bathroom5'
                              control={<Radio />}
                              label='5+'
                              disableRipple
                              className={
                                activebath === 'bathroom5' && 'btn-selected'
                              }
                            />
                            <FormControlLabel
                              value='bathroom6'
                              control={<Radio />}
                              label='6+'
                              disableRipple
                              className={
                                activebath === 'bathroom6' && 'btn-selected'
                              }
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
                  <Box variant='div' component='div'>
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
                <Grid item xs={12} md={12}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={8} md={8}>
                      <Box variant='div' component='div'>
                        <label>Brokerage: </label>
                        <RadioGroup
                          row
                          aria-labelledby='demo-row-radio-buttons-group-label'
                          name='row-radio-buttons-group'
                        >
                          <FormControlLabel
                            value='brokerage-only'
                            control={<Radio />}
                            label='Brokerage only  '
                          />
                          <FormControlLabel
                            value='mls'
                            control={<Radio />}
                            label='MLS '
                          />
                          <FormControlLabel
                            value='all'
                            control={<Radio />}
                            label='All '
                          />
                        </RadioGroup>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={1}
                      >
                        <FormControlLabel
                          control={
                            <Switch
                              sx={{ marginRight: 0.2 }}
                              className='ios-switch-custom'
                              focusVisibleClassName='.Mui-focusVisible'
                              disableRipple
                              defaultChecked
                            />
                          }
                          label=''
                        />
                        <label>Listing alert active </label>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
              </Grid>
            </Box>
          </>
        </DialogContent>

        <DialogActions align='right' className=''>
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={2}
            sx={{
              padding: { xs: 3, sm: 6, xl: 6 },
            }}
          >
            <Button
              variant='outlined'
              size='large'
              className='outline-btn btn'
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant='contained'
              size='large'
              autoFocus
              className='primary-btn btn'
            >
              Save changes
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListingalertDialog;
