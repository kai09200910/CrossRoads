import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { RiErrorWarningFill, RiMailLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function createData(listing, info, action) {
  return {
    listing,
    info,
    action,
  };
}

const rows = [
  createData('NS1246', 'Lot#7823, Bahama Sound, EX, 15000 0 BD / 0 BA', 'M'),
  createData('NS1246', 'Lot#7823, Bahama Sound, EX, 15000 0 BD / 0 BA', 'M'),
  createData('NS1246', 'Lot#7823, Bahama Sound, EX, 15000 0 BD / 0 BA', 'M'),
];

const ListingmatchesTab = () => {
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
            Listing Matches
          </Typography>

          <Button
            variant='contained'
            size='small'
            autoFocus
            className='primary-btn secondary-btn'
            // onClick={() => setIsLogactivity(true)}
            startIcon={<RiMailLine size={18} />}
            disabled
          >
            Send Multiple
          </Button>
        </Stack>

        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper note-list-table listing-matches-table'
        >
          <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left' style={{ width: '20%' }}>
                    Listing #
                  </TableCell>
                  <TableCell align='left' style={{ width: '70%' }}>
                    Listing info
                  </TableCell>
                  <TableCell align='left' style={{ width: '10%' }}>
                    Action
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
                        className='listing-number'
                        align='left'
                      >
                        <Stack
                          direction='row'
                          justifyContent='flex-start'
                          alignItems='center'
                          spacing={0.5}
                        >
                          <FormControlLabel control={<Checkbox />} label='' />
                          <Typography variant='body1' component='p'>
                            {' '}
                            <Link to='/dashboard'>{row.listing}</Link>
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.info}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          <Link
                            className='icon-small-btn green-btn'
                            to='/campaigns/create'
                          >
                            <RiMailLine size={20} />
                          </Link>
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
                      No listing matches found yet,
                    </Typography>
                    <Typography gutterBottom variant='p' component='p'>
                      all listing matches will appear here.
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

export default ListingmatchesTab;
