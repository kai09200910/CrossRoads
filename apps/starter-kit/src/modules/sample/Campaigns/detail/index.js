import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        <Button
          variant='outlined'
          size='small'
          className='edit-btn secondary-btn-small'
        >
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
              Photo Selection - BREADCRUM
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
                Photo slection
              </Typography>
              <Button
                variant='contained'
                size='small'
                autoFocus
                // onClick={handleClose}
                className='primary-btn btn'
              >
                Review list
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateCampaign;
