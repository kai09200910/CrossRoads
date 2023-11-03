import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
// import '../contacts.scss';

const PersonalDetails = () => {
  return (
    <Paper>
      <Box
        sx={{
          padding: { xs: 9, xl: 9 },
        }}
        className='personal-details'
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>John </label>
              <Typography variant='body1' component='span'>
                First name
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>Smith </label>
              <Typography variant='body1' component='span'>
                Present status
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>Fred Ryan </label>
              <Typography variant='body1' component='span'>
                Agent
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>Joe </label>
              <Typography variant='body1' component='span'>
                Nickname
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>Haley Smith </label>
              <Typography variant='body1' component='span'>
                Spouse
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>john.smith@example.com </label>
              <Typography variant='body1' component='span'>
                Email
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>123-456-7891 </label>
              <Typography variant='body1' component='span'>
                Cell Phone
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>242-324-1356 </label>
              <Typography variant='body1' component='span'>
                Home Phone
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>property, agent, bahamas </label>
              <Typography variant='body1' component='span'>
                Tags
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>$500,00-$1,000,000 </label>
              <Typography variant='body1' component='span'>
                Price range
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>Yes </label>
              <Typography variant='body1' component='span'>
                Subscribed to emails
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box variant='div' component='div'>
              <label>Nassau, Bahamas </label>
              <Typography variant='body1' component='span'>
                Location
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PersonalDetails;
