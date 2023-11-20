import React, { useState } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { RiAddLine, RiErrorWarningFill } from 'react-icons/ri';
import LogactivityDialog from '../dailogs/logactivityDialog';

function createData(type, by, date, comments) {
  return {
    type,
    by,
    date,
    comments,
  };
}

const rows = [
  createData(
    'Email sent',
    'John Smith',
    '10/12/35',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ',
  ),
  createData(
    'Email sent',
    'John Smith',
    '10/12/35',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ',
  ),
  createData(
    'Email sent',
    'John Smith',
    '10/12/35',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ',
  ),
];

const ActivitiesTab = () => {
  const [isLogactivity, setIsLogactivity] = useState(false);
  const handlelogactivityClose = () => {
    setIsLogactivity(false);
  };

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
            Activities
          </Typography>

          <Button
            variant='contained'
            size='small'
            autoFocus
            className='primary-btn secondary-btn'
            onClick={() => setIsLogactivity(true)}
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
                  <TableCell align='left' style={{ width: '12%' }}>
                    Activity type
                  </TableCell>
                  <TableCell align='left' style={{ width: '15%' }}>
                    Done by
                  </TableCell>
                  <TableCell align='left' style={{ width: '12%' }}>
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
                          {row.type}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.by}
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
                      No activities added yet,
                    </Typography>
                    <Typography gutterBottom variant='p' component='p'>
                      all added activities will appear here.
                    </Typography>
                  </Stack>
                </Box>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <LogactivityDialog
        open={isLogactivity}
        handleClose={handlelogactivityClose}
      />
    </>
  );
};

export default ActivitiesTab;
