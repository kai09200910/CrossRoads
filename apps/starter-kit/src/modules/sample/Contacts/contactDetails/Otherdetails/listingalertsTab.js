import React from 'react';
import {
  Box,
  Stack,
  Button,
  Typography,
  Popover,
  TextField,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { RiAddLine, RiErrorWarningFill } from 'react-icons/ri';

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
    'View',
  ),
  createData(
    'John Smith ',
    'Luxary Home Listing alert for John Smith ',
    '10/12/35',
    'Active ',
    'View',
  ),
  createData(
    'John Smith ',
    'Luxary Home Listing alert for John Smith ',
    '10/12/35',
    'Active ',
    'View',
  ),
];

const ListingalertsTab = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
            Listing Alerts
          </Typography>

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
              aria-describedby={id}
              onClick={handleClick}
            >
              <RiAddLine size={18} />
              Add
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              className='add-note-modal'
            >
              <Box className='add-note-modal-inner'>
                <Typography
                  variant='h4'
                  component='h4'
                  sx={{
                    paddingBottom: { xs: 3, xl: 3 },
                  }}
                >
                  Add note
                </Typography>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Add Notes'
                  multiline
                  rows={4}
                  maxRows={4}
                />
                <Stack
                  direction='row'
                  justifyContent='flex-end'
                  alignItems='center'
                  spacing={2}
                >
                  <Button
                    variant='contained'
                    size='medium'
                    autoFocus
                    className='primary-btn-small'
                    onClick={handleClose}
                  >
                    Add
                  </Button>
                </Stack>
              </Box>
            </Popover>
          </Stack>
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
                    Campaign name
                  </TableCell>
                  <TableCell align='left' style={{ width: '15%' }}>
                    Date created
                  </TableCell>
                  <TableCell align='left' style={{ width: '13%' }}>
                    Status
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
                          {row.by}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.status}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.email}
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
                      No documents submitted yet,
                    </Typography>
                    <Typography gutterBottom variant='p' component='p'>
                      all submitted items will appear here.
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

export default ListingalertsTab;
