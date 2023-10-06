import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ListingnoteDialog from '../../dailogs/listingnoteDialog';

function createData(activity, date, by, action) {
  return { activity, date, by, action };
}

const rows = [
  createData('New note ', '05/07/2023', 'John Smith'),
  createData('Listing active', '05/07/2023', 'John Smith'),
  createData('New note', '05/07/2023', 'John Smith'),
  createData('New note', '05/07/2023', 'John Smith'),
  createData('New note', '05/07/2023', 'John Smith'),
  createData('New note', '05/07/2023', 'John Smith'),
];

const History = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <Box
        variant='div'
        component='div'
        className='history-tab-content-wrapper'
        sx={{
          padding: { xs: 5, xl: 4 },
        }}
      >
        <Typography
          variant='h4'
          component='h4'
          sx={{
            paddingBottom: { xs: 3, xl: 3 },
          }}
        >
          Listing History
        </Typography>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper'
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Activity</TableCell>
                  <TableCell align='left'>Date</TableCell>
                  <TableCell align='left'>By</TableCell>
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
                      {row.activity}
                    </TableCell>
                    <TableCell align='left'>{row.date}</TableCell>
                    <TableCell align='left'>{row.by}</TableCell>
                    <TableCell align='right'>
                      {' '}
                      <Button
                        variant='outlined'
                        size='small'
                        className='edit-btn secondary-btn-small'
                        onClick={() => setIsSubmitted(true)}
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
      </Box>

      <ListingnoteDialog open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default History;
