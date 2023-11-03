import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  RiAddLine,
  RiArrowDownSLine,
  RiDownload2Line,
  RiSearchLine,
  RiUpload2Line,
} from 'react-icons/ri';
import AddcontactDialog from './addcontactDialog';

const Filters = () => {
  const [isAddcontact, setIsAddcontact] = useState(false);
  const handleaddcontactClose = () => {
    setIsAddcontact(false);
  };
  return (
    <>
      <Box variant='div' component='div' className='contact-fillter'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='flex-end'
          spacing={2}
        >
          <Grid
            container
            spacing={3}
            justifyContent='flex-start'
            alignItems='flex-end'
            className='fillter-inner-wrap'
          >
            <Grid item xs={12} sm={8} md={8}>
              <Grid container spacing={3} justifyContent='flex-start'>
                <Grid item xs={12} sm={4} md={4}>
                  <Box variant='div' component='div'>
                    <label>Contact Type </label>
                    <Select
                      fullWidth
                      id='demo-simple-select'
                      label=''
                      placeholder='Select '
                      IconComponent={RiArrowDownSLine}
                    >
                      <MenuItem value={10}>Buyer</MenuItem>
                      <MenuItem value={20}>Seller </MenuItem>
                      <MenuItem value={30}>Renter </MenuItem>
                      <MenuItem value={40}>Landlord </MenuItem>
                      <MenuItem value={50}>Appraisal client </MenuItem>
                      <MenuItem value={60}>Co-broke agent </MenuItem>
                      <MenuItem value={70}>Merchant/supplier </MenuItem>
                      <MenuItem value={80}>HGC Associate</MenuItem>
                    </Select>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
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
                <Grid item xs={12} sm={4} md={4}>
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
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
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
          </Grid>

          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={2}
          >
            <Button
              variant='contained'
              endIcon={<RiAddLine />}
              className='add-btn primary-btn btn green-btn'
              onClick={() => setIsAddcontact(true)}
            >
              Add
            </Button>

            <Typography
              variant='body1'
              component='span'
              className='primary-btn-small upld-btn secondary-btn purple-btn'
            >
              Upload
              <RiUpload2Line size={20} />
              <TextField type='file' className='upload'></TextField>
            </Typography>

            <Button
              variant='contained'
              endIcon={<RiDownload2Line />}
              className='dwnload-btn primary-btn btn blue-btn'
            >
              Download
            </Button>
          </Stack>
        </Stack>
      </Box>
      <AddcontactDialog
        open={isAddcontact}
        handleClose={handleaddcontactClose}
      />
    </>
  );
};

export default Filters;
