import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import MediaTabs from './mediaTabs';
import { RiSearchLine, RiUpload2Line } from 'react-icons/ri';

const PropertyMedia = () => {
  return (
    <>
      <Box variant='div' component='div' className='listing-media-form'>
        <Box variant='div' component='div' className='step-title'>
          <Typography variant='h3' component='h3'>
            Media
          </Typography>
        </Box>
        <Box variant='div' component='div' className='property-detial-form'>
          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>Keywords </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Enter descriptive words '
                  multiline
                  rows={5}
                  maxRows={5}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div'>
                <label>
                  Browser Description{' '}
                  <Typography
                    variant='body1'
                    component='span'
                    className='optional-label'
                  >
                    140/140 remaining
                  </Typography>
                </label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Enter descriptive words '
                  multiline
                  rows={5}
                  maxRows={5}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div'>
                <label>
                  Video link{' '}
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
                  placeholder='Enter video link '
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div'>
                <label>
                  3D Tour{' '}
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
                  placeholder='Enter 3D tour link '
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div'>
                <label>
                  Brochure Link{' '}
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
                  placeholder='Enter brochure link '
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
              <Box
                variant='div'
                component='div'
                className='listing-profile-photo-wrap'
              >
                <label>Listing profile photo</label>

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
          <Box
            sx={{
              paddingTop: { xs: 9, xl: 16 },
            }}
          >
            <MediaTabs />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PropertyMedia;
