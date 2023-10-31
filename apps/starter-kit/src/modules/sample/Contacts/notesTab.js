import React, { useState } from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { RiAddLine, RiArrowDownSLine } from 'react-icons/ri';

function createData(date, by, note) {
  return {
    date,
    by,
    note,
  };
}

const rows = [
  createData(
    '12/05/24',
    'John Smith',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ',
  ),
  createData(
    '12/05/24',
    'John Smith',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ',
  ),
  createData(
    '12/05/24',
    'John Smith',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ',
  ),
];

const NotesTab = () => {
  function handleSelecetedTags(items) {
    console.log(items);
  }

  return (
    <>
      <Box className='notes-tab'>
        <Stack
          direction='row'
          justifyContent='flex-end'
          alignItems='flex-start'
          spacing={1}
          className='add-note-btn-wrapper'
        >
          <Button
            variant='contained'
            size='small'
            autoFocus
            className='primary-btn secondary-btn'
          >
            <RiAddLine size={18} />
            Add
          </Button>
        </Stack>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper note-list-table '
        >
          <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left' style={{ width: '15%' }}>
                    Date:
                  </TableCell>
                  <TableCell align='left' style={{ width: '15%' }}>
                    By:
                  </TableCell>
                  <TableCell align='left' style={{ width: '70%' }}>
                    Note
                  </TableCell>
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
                    <TableCell
                      component='th'
                      scope='row'
                      className='field-name'
                      align='left'
                    >
                      <Typography variant='body1' component='p'>
                        {' '}
                        {row.date}
                      </Typography>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography variant='body1' component='p'>
                        {row.by}
                      </Typography>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography variant='body1' component='p'>
                        {row.note}
                      </Typography>
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

export default NotesTab;
