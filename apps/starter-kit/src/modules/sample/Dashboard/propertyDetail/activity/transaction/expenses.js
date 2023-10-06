import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(number, entrydate, payer, type, payee, status, amount) {
  return { number, entrydate, payer, type, payee, status, amount };
}

const rows = [
  createData(
    'AGV839 ',
    '12/23/23',
    'HGC General',
    'Final payment',
    'VAT ',
    'Complete',
    '$5,000,000',
  ),
  createData(
    'AGV839 ',
    '12/23/23',
    'HGC General',
    'Final payment',
    'CIRE 3% Fee',
    'Complete',
    '$5,000,000',
  ),
  createData(
    'AGV839 ',
    '12/23/23',
    'HGC General',
    'Final payment',
    'Anya Mousis',
    'Complete',
    '$5,000,000',
  ),
  createData(
    'AGV839 ',
    '12/23/23',
    'HGC General',
    'Final payment',
    'Phillip Hillier ',
    'Complete',
    '$5,000,000',
  ),
];

const Expenses = () => {
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
          Expenses
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
                  <TableCell align='left'>Number</TableCell>
                  {/* <TableCell align='left'>Date</TableCell> */}
                  <TableCell align='left'>Entry date</TableCell>
                  <TableCell align='left'>Payer</TableCell>
                  <TableCell align='left'>Type</TableCell>
                  <TableCell align='left'>Payee</TableCell>
                  <TableCell align='left'>Status</TableCell>
                  <TableCell align='left'>Amount</TableCell>
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
                      {row.number}
                    </TableCell>
                    <TableCell align='left'>{row.entrydate}</TableCell>
                    <TableCell align='left'>{row.payer}</TableCell>
                    <TableCell align='left'>{row.type}</TableCell>

                    <TableCell align='left'>{row.payee}</TableCell>
                    <TableCell align='left'>{row.status}</TableCell>
                    <TableCell align='left'>{row.amount}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={7}>
                    <Stack
                      direction={'row'}
                      justifyContent={'flex-end'}
                      className='total-row'
                    >
                      <Typography>Total cost: $398,451.42</Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Expenses;
