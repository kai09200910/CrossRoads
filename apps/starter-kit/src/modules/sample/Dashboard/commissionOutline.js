import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Doughnut } from "react-chartjs-2";

// Note: Do not import Chart, ArcElement, Tooltip, and Legend from 'chart.js' separately.

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const CommissionOutline = () => {
  const navigate = useNavigate();
  return (
    <Paper sx={{ marginTop: 1 }}>
      <Box
        sx={{
          padding: { xs: 5, xl: 5 },
        }}
        className='commission-outline-wrapper'
      >
        <Box variant='div' component='div' className='section-title'>
          <Typography variant='h4' component='h4'>
          Commission outline
          </Typography>
          <Typography variant='p' component='p' className='section-sub-title'>
            Data based on
            <Typography variant='body1' component='span' className='color-blue'>
              2024
            </Typography>
          </Typography>
        </Box>
        <Box
          variant='div'
          component='div'
          className='pie-chart'
          sx={{
            padding: { xs: 4, xl: 18 },
          }}
        >
          Display Pie Chart here
          {/* <Doughnut data={data} /> */}
        </Box>
      </Box>
    </Paper>
  );
};

export default CommissionOutline;
