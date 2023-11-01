import React from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PersonalinfoTab = () => {
  return (
    <>
      <Box className='personalinfo-tab'>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Birthday </label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Anniversary </label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Personal Address </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter Address'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Additional info </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter Additional info'
                multiline
                rows={4}
                maxRows={4}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PersonalinfoTab;
