import React from 'react';
import { Paper, Box, Button, Grid, Stack, Typography } from '@mui/material';

const CreateCampaign = () => {
  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography
          variant='h3'
          component='h3'
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
          }}
        >
          Listing Campaigns
        </Typography>
        <Button variant='outlined' size='small' className='edit-btn'>
          +New campaign
        </Button>
      </Stack>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box
              sx={{
                padding: { xs: 5, xl: 5 },
              }}
              className=''
            >
              <Typography variant='h4' component='h4'>
                Email Selection
              </Typography>
              <Box variant='div' component='div' className=''>
                <Grid spacing={5} mt={5}>
                  <Grid item xs={12} md={6}>
                    Image
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack
                      direction='column'
                      justifyContent='space-between'
                      alignItems='flex-start'
                      spacing={0}
                    >
                      New Listing (2 images) 1 cover, 1 thumb images
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
                          size='small'
                          // onClick={handleClose}
                          className='outline-btn btn'
                        >
                          Preview
                        </Button>
                        <Button
                          variant='contained'
                          size='small'
                          autoFocus
                          // onClick={handleClose}
                          className='primary-btn btn'
                        >
                          Select
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                spacing={2}
                sx={{
                  paddingBottom: { xs: 2, xl: 3 },
                }}
                className='title-wrap'
              ></Stack>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Box
              sx={{
                padding: { xs: 5, xl: 5 },
              }}
              className=''
            >
              <Typography
                variant='h3'
                component='h3'
                sx={{
                  paddingBottom: { xs: 4, xl: 4 },
                }}
              >
                Preview
              </Typography>

              <Button
                variant='contained'
                size='small'
                autoFocus
                // onClick={handleClose}
                className='primary-btn btn'
              >
                Select
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateCampaign;
