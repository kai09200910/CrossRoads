import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  RadioGroup,
  Radio,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const HgcassociateprofileTab = () => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');
  return (
    <>
      <Box className='genral-tab'>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Date of employment </label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Termination date </label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Employment role </label>
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
                  Select Employment role
                </MenuItem>
                <MenuItem value={10}>Sales Agent </MenuItem>
                <MenuItem value={20}>Sales Agent/Appraiser </MenuItem>
                <MenuItem value={30}>Sales Assistant </MenuItem>
                <MenuItem value={40}>Office Support Representative </MenuItem>
                <MenuItem value={50}>Sales Manager/Broker </MenuItem>
                <MenuItem value={10}>Accounting Administrator </MenuItem>
                <MenuItem value={20}>Marketing Administrator</MenuItem>
                <MenuItem value={30}>HR Administrator</MenuItem>
                <MenuItem value={40}>System Administrator</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Supervisor </label>
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
                  Select Supervisor
                </MenuItem>
                <MenuItem value={10}>Supervisor 1</MenuItem>
                <MenuItem value={20}>Supervisor 2</MenuItem>
                <MenuItem value={30}>Supervisor 3</MenuItem>
                <MenuItem value={40}>Supervisor 4</MenuItem>
                <MenuItem value={50}>Supervisor 5</MenuItem>
                <MenuItem value={60}>Supervisor 6</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Gender </label>
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
                  Select Gender
                </MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female </MenuItem>
                <MenuItem value={30}>Others </MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>NIB Number </label>
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
                  Select NIB Number
                </MenuItem>
                <MenuItem value={10}>NIB Number 12</MenuItem>
                <MenuItem value={20}>NIB Number 23</MenuItem>
                <MenuItem value={30}>NIB Number 34</MenuItem>
                <MenuItem value={40}>NIB Number 45</MenuItem>
                <MenuItem value={50}>NIB Number 56</MenuItem>
                <MenuItem value={60}>NIB Number 67</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Biography (Will display on site) </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter biography to display on site '
                multiline
                rows={3}
                maxRows={3}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Job description </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter job description '
                multiline
                rows={3}
                maxRows={3}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Base salary </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                type='number'
                placeholder='Enter Salary'
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>CR Account Status </label>
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
                  Select Account Status
                </MenuItem>
                <MenuItem value={10}>Active</MenuItem>
                <MenuItem value={20}>Inactive</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Employment status </label>
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
                  Select Employment status
                </MenuItem>
                <MenuItem value={10}>Full-Time</MenuItem>
                <MenuItem value={20}>Part-Time</MenuItem>
                <MenuItem value={30}>Terminated</MenuItem>
                <MenuItem value={40}>Resigned</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Date effective</label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Reason for status change </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Additional comment'
                multiline
                rows={3}
                maxRows={3}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Display on site? </label>
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
                <FormControlLabel value='No ' control={<Radio />} label='No ' />
              </RadioGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HgcassociateprofileTab;
