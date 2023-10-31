import React from 'react';
import { Box, Stack, TablePagination, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './contacts.scss';
import Filters from './filters';

function createData(
  firstname,
  lastname,
  contactinfo,
  email,
  lastactive,
  assignedagent,
  creationdate,
) {
  return {
    firstname,
    lastname,
    contactinfo,
    email,
    lastactive,
    assignedagent,
    creationdate,
  };
}

const rows = [
  createData(
    'John',
    'Smith',
    '242-324-1356',
    'john.smith@example.com ',
    '30 Jun 2024',
    'Charles Smith',
    '25 Jun 2024',
  ),
  createData(
    'John',
    'Smith',
    '242-324-1356',
    'john.smith@example.com ',
    '30 Jun 2024',
    'Charles Smith',
    '25 Jun 2024',
  ),
  createData(
    'John',
    'Smith',
    '242-324-1356',
    'john.smith@example.com ',
    '30 Jun 2024',
    'Charles Smith',
    '25 Jun 2024',
  ),
  createData(
    'John',
    'Smith',
    '242-324-1356',
    'john.smith@example.com ',
    '30 Jun 2024',
    'Charles Smith',
    '25 Jun 2024',
  ),
  createData(
    'John',
    'Smith',
    '242-324-1356',
    'john.smith@example.com ',
    '30 Jun 2024',
    'Charles Smith',
    '25 Jun 2024',
  ),
  createData(
    'John',
    'Smith',
    '242-324-1356',
    'john.smith@example.com ',
    '30 Jun 2024',
    'Charles Smith',
    '25 Jun 2024',
  ),
  createData(
    'John',
    'Smith',
    '242-324-1356',
    'john.smith@example.com ',
    '30 Jun 2024',
    'Charles Smith',
    '25 Jun 2024',
  ),
  createData(
    'John',
    'Smith',
    '242-324-1356',
    'john.smith@example.com ',
    '30 Jun 2024',
    'Charles Smith',
    '25 Jun 2024',
  ),
];

const ContactList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Typography
        variant='h3'
        component='h3'
        sx={{
          paddingBottom: { xs: 3, xl: 2 },
          paddingTop: { xs: 5, xl: 5 },
        }}
      >
        Contacts
      </Typography>

      <Filters />
      <Box
        sx={{ width: '100%', overflow: 'hidden' }}
        className='table-wrapper contact-list-table'
      >
        <TableContainer>
          <Table sx={{ minWidth: 400 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>First name </TableCell>
                <TableCell align='left'>Last Name </TableCell>
                <TableCell align='left'>Contact info </TableCell>
                <TableCell align='left'>Last active </TableCell>
                <TableCell align='left'>Assigned agent </TableCell>
                <TableCell align='left'>Creation date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  className={
                    row?.approval === false ? 'resubmitted-approval' : ''
                  }
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell component='th' scope='row' className='field-name'>
                    <Typography variant='body1' component='p'>
                      <Link
                        className='resubmition-btn'
                        onClick={() => setIsSubmitted(true)}
                      >
                        {' '}
                        {row.firstname}{' '}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell align='left'>
                    <Typography variant='span' component='span'>
                      {row.lastname}
                    </Typography>
                  </TableCell>
                  <TableCell align='left'>
                    <Stack
                      direction='column'
                      justifyContent='center'
                      alignItems='flex-start'
                      spacing={2}
                    >
                      <Typography variant='body1' component='p'>
                        {row.contactinfo}
                      </Typography>
                      <Typography variant='span' component='span'>
                        {row.email}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align='left'>
                    <Typography variant='body1' component='p'>
                      {row.lastactive}
                    </Typography>
                  </TableCell>
                  <TableCell align='left'>
                    <Typography
                      variant='body1'
                      component='p'
                      className='listing-number'
                    >
                      {row.assignedagent}
                    </Typography>
                  </TableCell>
                  <TableCell align='left'>
                    <Typography variant='body1' component='p'>
                      {row.creationdate}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
};

export default ContactList;
