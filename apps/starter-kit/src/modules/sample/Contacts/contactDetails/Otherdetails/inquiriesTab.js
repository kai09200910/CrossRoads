import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import AddPopover from '../../../common/addPopover';

function createData(listing, info, date, comments) {
  return {
    listing,
    info,
    date,
    comments,
  };
}

const rows = [
  createData(
    'NS1246',
    'Lot#7823, Bahama Sound, EX, 15000 0 BD / 0 BA',
    '12/05/24',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ',
  ),
  createData(
    'NS1246',
    'Lot#7823, Bahama Sound, EX, 15000 0 BD / 0 BA',
    '12/05/24',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ',
  ),
  createData(
    'NS1246',
    'Lot#7823, Bahama Sound, EX, 15000 0 BD / 0 BA',
    '12/05/24',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ',
  ),
];

const InquiriesTab = () => {
  return (
    <>
      <Box className='notes-tab tab-content-wrapper'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
          className='main-title'
        >
          <Typography variant='h3' component='h3'>
            Inquiries
          </Typography>

          {/* <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='flex-start'
            spacing={1}
            className='add-note-btn-wrapper'
          >
            <AddPopover />
          </Stack> */}
        </Stack>

        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper note-list-table '
        >
          <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left' style={{ width: '8%' }}>
                    Listing #
                  </TableCell>
                  <TableCell align='left' style={{ width: '21%' }}>
                    Listing info
                  </TableCell>
                  <TableCell align='left' style={{ width: '10%' }}>
                    Date created
                  </TableCell>
                  <TableCell align='left' style={{ width: '61%' }}>
                    Comments
                  </TableCell>
                </TableRow>
              </TableHead>
              {rows.length > 0 ? (
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
                          <Link href='#'> {row.listing}</Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.info}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.comments}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <Box
                  variant='div'
                  component='div'
                  className='table-empty-state'
                >
                  <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    spacing={1}
                    sx={{
                      paddingBottom: { xs: 2, xl: 2 },
                    }}
                    className=''
                  >
                    <RiErrorWarningFill size={25} />
                    <Typography gutterBottom variant='p' component='p'>
                      No Inquiries submitted yet,
                    </Typography>
                    <Typography gutterBottom variant='p' component='p'>
                      all submitted Inquiries will appear here.
                    </Typography>
                  </Stack>
                </Box>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default InquiriesTab;
