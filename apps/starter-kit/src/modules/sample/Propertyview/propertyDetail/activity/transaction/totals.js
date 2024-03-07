import React from 'react';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(commission, expenses, brokergrossrevenue) {
  return { commission, expenses, brokergrossrevenue };
}

const rows = [createData('$398,451.42 ', '$46,3957 ', '$145,4651.53')];

const Totals = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: { xs: 0, xl: 0 },
          width: '100%',
        }}
      >
        <Typography
          variant='h4'
          component='h4'
          sx={{
            paddingBottom: { xs: 3, xl: 3 },
          }}
        >
          Totals
        </Typography>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper activity-table'
        >
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              aria-label='simple table'
              className='table-with-footer'
            >
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Commission/fees payable </TableCell>
                  <TableCell align='left'>Expenses </TableCell>
                  <TableCell align='left'>Broker gross revenue </TableCell>
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
                    <TableCell component='th' scope='row' className='total-row'>
                      {row.commission}
                    </TableCell>
                    <TableCell align='left' className='total-row'>
                      {row.expenses}{' '}
                    </TableCell>
                    <TableCell align='left' className='total-row'>
                      {row.brokergrossrevenue}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Totals;
