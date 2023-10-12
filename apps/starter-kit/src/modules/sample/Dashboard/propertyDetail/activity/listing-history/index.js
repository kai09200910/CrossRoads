import React, { useState } from 'react';
import { Box, Button, Typography, Breadcrumbs } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ListingnoteDialog from './listingnoteDialog';
import { Link } from 'react-router-dom';

function createData(name, date, by, action) {
  return { name, date, by, action };
}

const rows = [
  createData('New note   ', '05/07/24', 'John Smith  '),
  createData('Listing active ', '05/07/24', 'John Smith '),
  createData('New note   ', '05/07/24', 'John Smith  '),
  createData('New note   ', '05/07/24', 'John Smith  '),
  createData('New note   ', '05/07/24', 'John Smith  '),
  createData('New note   ', '05/07/24', 'John Smith  '),
  createData('Listing active ', '05/07/24', 'John Smith '),
  createData('New note   ', '05/07/24', 'John Smith  '),
  createData('New note   ', '05/07/24', 'John Smith  '),
];

const ListingHistory = ({ handleBack }) => {
  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      onClick={() => handleBack(null)}
    >
      Activity
    </Link>,
    <Typography key='3' color='text.primary'>
      History
    </Typography>,
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };
  return (
    <>
      <Box
        variant='div'
        component='div'
        sx={{
          paddingBottom: { xs: 4, xl: 5 },
        }}
        className='breadcrumb-wrap'
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>

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
        sx={{
          paddingTop: { xs: 0, xl: 0 },
        }}
      >
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper scrollable-table'
        >
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              aria-label='simple table'
              className='listing-history-table'
            >
              <TableHead>
                <TableRow>
                  <TableCell>Activity </TableCell>
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
                      {row.name}
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

export default ListingHistory;
