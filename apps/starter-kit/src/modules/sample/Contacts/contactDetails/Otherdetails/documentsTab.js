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

import { RiAddLine, RiDeleteBinLine, RiUpload2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function createData(name, size, action) {
  return {
    name,
    size,
    action,
  };
}

const rows = [
  createData('KYC Document 1', '2.6kb', 'D'),
  createData('KYC Document 2', '2.8kb', 'D'),
  createData('KYC Document 3', '2.4kb', 'D'),
];

const DocumentsTab = () => {
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
            Documents
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
                  <TableCell align='left' style={{ width: '73%' }}>
                    Name
                  </TableCell>
                  <TableCell align='left' style={{ width: '20%' }}>
                    Size
                  </TableCell>
                  <TableCell align='left' style={{ width: '7%' }}>
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
                        className='field-name'
                        align='left'
                      >
                        <Typography variant='body1' component='p'>
                          {' '}
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.size}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          <Link
                            className='resubmition-btnq'
                            // onClick={() => setIsSubmitted(true)}
                          >
                            <RiDeleteBinLine size={22} />
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
                    <RiUpload2Line size={25} />
                    <Typography gutterBottom variant='p' component='p'>
                      Click to upload or drag and drop
                    </Typography>
                    <Typography gutterBottom variant='p' component='p'>
                      documents here
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

export default DocumentsTab;
