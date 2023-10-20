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
import {
  RiAddLine,
  RiArrowDownSLine,
  RiDownload2Line,
  RiSearchLine,
  RiUpload2Line,
} from 'react-icons/ri';

const Filters = () => {
  return (
    <>
      <Box variant='div' component='div' className='contact-fillter'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='flex-end'
          spacing={2}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            className='fillter-inner-wrap'
            spacing={3}
          >
            <Grid container spacing={3} justifyContent='flex-start'>
              <Grid item xs={12} md={2}>
                <Box variant='div' component='div'>
                  <label>Contact Type </label>
                  <Select
                    fullWidth
                    id='demo-simple-select'
                    label=''
                    placeholder='Sale or Rent'
                    IconComponent={RiArrowDownSLine}
                  >
                    <MenuItem value={10}>MLS Exclusive</MenuItem>
                    <MenuItem value={20}>General</MenuItem>
                    <MenuItem value={30}>Co-broke </MenuItem>
                    <MenuItem value={40}>Exclusive (not on MLS)</MenuItem>
                  </Select>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={2}>
                <Box variant='div' component='div' className='search-field'>
                  <label>Search </label>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Search contacts'
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
                  <label>Agent </label>
                  <Select
                    fullWidth
                    id='demo-simple-select'
                    label=''
                    placeholder='Select agent(s)'
                    IconComponent={RiArrowDownSLine}
                  >
                    <MenuItem value={10}>Agent Name </MenuItem>
                    <MenuItem value={20}>Agent Name 1</MenuItem>
                    <MenuItem value={30}>Agent Name 2 </MenuItem>
                    <MenuItem value={40}>Agent Name 3</MenuItem>
                    <MenuItem value={50}>Agent Name 4</MenuItem>
                    <MenuItem value={60}>Agent Name 5</MenuItem>
                    <MenuItem value={70}>Agent Name 6 </MenuItem>
                    <MenuItem value={80}>Agent Name 7</MenuItem>
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

          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={2}
          >
            <Button
              variant='contained'
              endIcon={<RiAddLine />}
              className='add-btn primary-btn btn'
            >
              Add
            </Button>
            <Button
              variant='contained'
              endIcon={<RiUpload2Line />}
              className='upld-btn primary-btn btn'
            >
              Upload
            </Button>
            <Button
              variant='contained'
              endIcon={<RiDownload2Line />}
              className='dwnload-btn primary-btn btn'
            >
              Download
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Filters;
