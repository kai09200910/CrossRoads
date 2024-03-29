import React from 'react';
import { Box, Stack, Button, Typography, Switch } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  RiAddLine,
  RiArrowRightLine,
  RiErrorWarningFill,
} from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

function createData(by, name, date, status, email) {
  return {
    by,
    name,
    date,
    status,
    email,
  };
}

const rows = [
  createData(
    'John Smith ',
    'Luxary Home Listing alert for John Smith ',
    '10/12/35',
    'Active ',
    '22',
  ),
  createData(
    'John Smith ',
    'Luxary Home Listing alert for John Smith ',
    '10/12/35',
    'Active ',
    '22',
  ),
  createData(
    'John Smith ',
    'Luxary Home Listing alert for John Smith ',
    '10/12/35',
    'Active ',
    '22',
  ),
];

const EmailcampaignsTab = () => {

  const navigate = useNavigate();
  const navigateToOpen = () => {
    navigate('/campaigns/create');
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
            Email campaigns
          </Typography>

          <Button
            variant='contained'
            size='small'
            autoFocus
            className='primary-btn secondary-btn'
            onClick={navigateToOpen}
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
                  <TableCell align='left' style={{ width: '18%' }}>
                    Created by
                  </TableCell>
                  <TableCell align='left' style={{ width: '50%' }}>
                    Email name
                  </TableCell>
                  <TableCell align='left' style={{ width: '15%' }}>
                    Next send date
                  </TableCell>
                  <TableCell align='left' style={{ width: '13%' }}>
                    Active
                  </TableCell>
                  <TableCell align='left' style={{ width: '19%' }}>
                    Emails sent
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
                          <Link to='/contacts/details' target='_blank'>
                            {' '}
                            {row.by}
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          <Link to='/campaigns'> {row.name}</Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          <Switch
                            sx={{ marginRight: 1 }}
                            className='ios-switch-custom'
                            focusVisibleClassName='.Mui-focusVisible'
                            disableRipple
                            defaultChecked
                          />
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.email}
                          <Button
                            variant='text'
                            endIcon={<RiArrowRightLine size={16} />}
                            onClick={() =>
                              navigate('/automated-email', {
                                state: { user_campaigns: true },
                              })
                            }
                          >
                            View
                          </Button>
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
                      No listing alerts added yet,
                    </Typography>
                    <Typography gutterBottom variant='p' component='p'>
                      all submitted listing alerts will appear here.
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

export default EmailcampaignsTab;
