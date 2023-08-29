import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import MediaTable from './mediaTable';
import MediaTabs from './mediaTabs';

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
                  placeholder='Enter Number '
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
                  placeholder='Enter Number '
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
                  placeholder='Enter Number '
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} mt={4}>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div'>
                <label>
                  Custom Website{' '}
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
                  placeholder='Enter Number '
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              paddingTop: { xs: 9, xl: 16 },
            }}
          >
            <MediaTabs />
            <MediaTable />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PropertyMedia;
