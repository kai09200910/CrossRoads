import * as React from 'react';
import {
  Box,
  TextField,
  Typography,
  Grid,
  InputAdornment,
} from '@mui/material';
import { RiUpload2Line } from 'react-icons/ri';
import AdditionallinkApproval from '../../common/additionallinkApproval';

const AdditionallinkTab = ({ isAdmin = false }) => {
  return (
    <>
      {/* <Box variant='div' component='div' className='additional-link-form'>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Video link </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter video link '
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>3D Tour </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter 3D tour link '
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Brochure </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter brochure link '
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>
                Property website{' '}
                <Typography
                  variant='body1'
                  component='span'
                  className='optional-label'
                >
                  Optional
                </Typography>
              </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter Property website  '
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Cover photo</label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter cover photo link '
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              variant='div'
              component='div'
              className='listing-profile-photo-wrap'
            >
              <label>Listing photo</label>

              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <RiUpload2Line size={22} />
                    </InputAdornment>
                  ),
                }}
                variant='outlined'
                placeholder='Click to upload or drag and drop '
                className='upload-text-box'
              />
              <TextField type='file' className='upload'></TextField>
            </Box>
          </Grid>
        </Grid>
      </Box> */}

      <Box
        variant='div'
        component='div'
        className='additional-link-approval'
      >
        < AdditionallinkApproval />
      </Box>
    </>
  );
};

export default AdditionallinkTab;
