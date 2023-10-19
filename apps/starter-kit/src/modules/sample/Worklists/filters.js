import React from 'react';
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { RiArrowDownSLine, RiSearchLine } from 'react-icons/ri';

const Filters = () => {
  return (
    <>
      <Box variant='div' component='div' className='worklist-fillter'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          className='fillter-inner-wrap'
          spacing={3}
        >
          <Grid container spacing={3} justifyContent='flex-end'>
            <Grid item xs={12} sm={4} md={2}>
              <Box variant='div' component='div' className='search-field'>
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
            <Grid item xs={12} sm={4} md={2}>
              <Box variant='div' component='div'>
                <label>Submitted by </label>
                <Select
                  fullWidth
                  id='demo-simple-select'
                  label=''
                  placeholder='Select users'
                  IconComponent={RiArrowDownSLine}
                >
                  <MenuItem value={10}> User Name </MenuItem>
                  <MenuItem value={20}>User Name 1</MenuItem>
                  <MenuItem value={30}>User Name 2 </MenuItem>
                  <MenuItem value={40}>User Name 3</MenuItem>
                  <MenuItem value={50}>User Name 4</MenuItem>
                  <MenuItem value={60}>User Name 5</MenuItem>
                  <MenuItem value={70}>User Name 6 </MenuItem>
                  <MenuItem value={80}>User Name 7</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='flex-end'
              spacing={2}
              className='btn-group'
            >
              <Button
                variant='contained'
                size='large'
                autoFocus
                // onClick={() =>
                //   isdisapproved ? handleClose() : handleSubmitOpen()
                // }
                className='primary-btn btn'
              >
                Filter
              </Button>
              <Button
                variant='outlined'
                size='large'
                // onClick={() => setIsDisapproved(!isdisapproved)}
                className='outline-btn btn'
              >
                Reset
              </Button>
            </Stack>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default Filters;
