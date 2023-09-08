import React, { useState } from 'react';
import { Box, Button, Stack, Paper, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddeventDialog from '../../dailogs/addeventDialog';

function createData(name, date, time, action) {
  return { name, date, time, action };
}

const rows = [
  createData('Open house  ', '05/07/24', '9:00am-1:30pm '),
  createData('Open house ', '05/07/24', '9:00am-1:30pm '),
  createData('Open house ', '05/07/24', '9:00am-1:30pm '),
  createData('Open house ', '05/07/24', '9:00am-1:30pm '),
  createData('Open house ', '05/07/24', '9:00am-1:30pm '),
  createData('Open house ', '05/07/24', '9:00am-1:30pm '),
];

const Events = ({ handleBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };
  return (
    <>
      <Box
        sx={{
          paddingTop: { xs: 0, xl: 0 },
        }}
      >
        <Typography
          variant='h4'
          component='h4'
          sx={{
            paddingBottom: { xs: 3, xl: 3 },
          }}
        >
          Events
        </Typography>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper'
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='left'>Date</TableCell>
                  <TableCell align='left'>Time</TableCell>
                  <TableCell align='right'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='left'>{row.date}</TableCell>
                    <TableCell align='left'>{row.time}</TableCell>
                    <TableCell align='right'>
                      {' '}
                      <Button
                        variant='outlined'
                        size='small'
                        className='edit-btn secondary-btn-small'
                      >
                        View
                      </Button>{' '}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={1}
          sx={{
            paddingTop: { xs: 4, xl: 4 },
          }}
        >
          <Button variant='text' onClick={() => handleBack(null)}>
            Back
          </Button>
          <Button
            variant='contained'
            size='large'
            onClick={() => setIsSubmitted(true)}
            className='primary-btn btn'
          >
            +New Event
          </Button>
        </Stack>
      </Box>
      <AddeventDialog open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default Events;
