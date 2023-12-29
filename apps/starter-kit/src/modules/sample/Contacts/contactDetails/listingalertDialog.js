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
                <Grid item xs={12} sm={6} md={12}>
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
                <Grid item xs={12} sm={6} md={8}>
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
                <Grid item xs={12} sm={12} md={4}>
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
                <Grid item xs={12} sm={12} md={8}>
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
                  <Box
                    variant='div'
                    component='div'
                    className='multiple-selection'
                  >
                    <label>Amenities </label>
                    <FormControl>
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
