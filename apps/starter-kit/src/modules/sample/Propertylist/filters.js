import React, { useState } from 'react';
import {
  Box,
  Grid,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

const Filters = () => {
  const [isAddcontact, setIsAddcontact] = useState(false);
  const handleaddcontactClose = () => {
    setIsAddcontact(false);
  };

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');
  return (
    <>
      <Box variant='div' component='div' className='search-result-fillter'>
        <Grid
          container
          spacing={3}
          justifyContent='flex-start'
          alignItems='flex-end'
          className='fillter-inner-wrap'
        >
          <Grid item className='listing-type'>
            <label>Listing Type </label>
            <Select
              fullWidth
              id='listing-type-1'
              value={value}
              defaultValue='none'
              onChange={(e) => setValue(e.target.value)}
              onFocus={(e) => setShowPlaceholder(false)}
              onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
              IconComponent={RiArrowDownSLine}
            >
              <MenuItem key='0' disabled value='none' className='place-holder'>
                Select Listing Type
              </MenuItem>
              <MenuItem value={10}>MLS Exclusive</MenuItem>
              <MenuItem value={20}>General</MenuItem>
              <MenuItem value={30}>Co-broke </MenuItem>
              <MenuItem value={40}>Exclusive (not on MLS)</MenuItem>
            </Select>
          </Grid>
          <Grid item className='lsland-selection'>
            <label>Island </label>
            <Select
              fullWidth
              id='island'
              value={value}
              defaultValue='none'
              onChange={(e) => setValue(e.target.value)}
              onFocus={(e) => setShowPlaceholder(false)}
              onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
              IconComponent={RiArrowDownSLine}
            >
              <MenuItem key='0' disabled value='none' className='place-holder'>
                Select Island
              </MenuItem>
              <MenuItem value={1}>Island 1</MenuItem>
              <MenuItem value={2}>Island 2</MenuItem>
              <MenuItem value={3}>Island 3 </MenuItem>
              <MenuItem value={4}>Island 4</MenuItem>
            </Select>
          </Grid>
          <Grid item className='bed-bath-selection'>
            <label>Beds</label>
            <Select
              fullWidth
              id='beds-baths'
              value={value}
              defaultValue='none'
              onChange={(e) => setValue(e.target.value)}
              onFocus={(e) => setShowPlaceholder(false)}
              onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
              IconComponent={RiArrowDownSLine}
            >
              <MenuItem key='0' disabled value='none' className='place-holder'>
                Beds
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3 </MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7 </MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9 </MenuItem>
              <MenuItem value={10}>10</MenuItem>

              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13 </MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17 </MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19 </MenuItem>
              <MenuItem value={20}>20</MenuItem>

              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23 </MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={26}>26</MenuItem>
              <MenuItem value={27}>27 </MenuItem>
              <MenuItem value={28}>28</MenuItem>
              <MenuItem value={29}>29 </MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </Grid>

          <Grid item className='bed-bath-selection'>
            <label>Baths</label>
            <Select
              fullWidth
              id='beds-baths'
              value={value}
              defaultValue='none'
              onChange={(e) => setValue(e.target.value)}
              onFocus={(e) => setShowPlaceholder(false)}
              onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
              IconComponent={RiArrowDownSLine}
            >
              <MenuItem key='0' disabled value='none' className='place-holder'>
                Baths
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3 </MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7 </MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9 </MenuItem>
              <MenuItem value={10}>10</MenuItem>

              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13 </MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17 </MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19 </MenuItem>
              <MenuItem value={20}>20</MenuItem>

              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23 </MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={26}>26</MenuItem>
              <MenuItem value={27}>27 </MenuItem>
              <MenuItem value={28}>28</MenuItem>
              <MenuItem value={29}>29 </MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </Grid>

          <Grid item className='date-range-picker'>
            <label>Date listed </label>
            <DemoContainer components={['SingleInputDateRangeField']}>
              <DateRangePicker
                slots={{ field: SingleInputDateRangeField }}
                // calendars={1}
                calendars={2}
              />
            </DemoContainer>
          </Grid>

          <Grid item className='date-range-picker'>
            <label>Date sold </label>
            <DemoContainer components={['SingleInputDateRangeField']}>
              <DateRangePicker
                slots={{ field: SingleInputDateRangeField }}
                calendars={2}
              />
            </DemoContainer>
          </Grid>

          <Grid item className='sort-by-switch'>
            <label>Sort by </label>
            <FormControlLabel
              sx={{
                height: '47px',
              }}
              control={
                <Switch
                  sx={{ m: 1 }}
                  className='ios-switch-custom fillter-switch'
                  focusVisibleClassName='.Mui-focusVisible'
                  disableRipple
                />
              }
              label=''
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Filters;
