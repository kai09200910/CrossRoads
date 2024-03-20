import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarEvent = () => {
  const navigate = useNavigate();

  // const [value, onChange] = useState<Value>(new Date());

  return (
    <Paper sx={{ marginTop: 1 }}>
      <Box
        sx={{
          padding: { xs: 5, xl: 5 },
        }}
        className='dashboard-calendar-wrapper'
      >
        <Box
          variant='div'
          component='div'
          className='section-title'
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
          }}
        >
          <Typography variant='h4' component='h4'>
            Calendar
          </Typography>
          {/* <Typography variant='p' component='p' className='section-sub-title'>
            Data based on
            <Typography variant='body1' component='span' className='color-blue'>
              2024
            </Typography>
          </Typography> */}
        </Box>
        <Box variant='div' component='div' className='dashboard-calendar'>
          <Calendar />
        </Box>
      </Box>
    </Paper>
  );
};

export default CalendarEvent;
