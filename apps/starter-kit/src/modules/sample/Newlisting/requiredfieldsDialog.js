import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Grid, IconButton } from '@mui/material';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const RequiredfieldsDialog = ({ open, handleClose, handleFieldClick }) => {
  const handleFieldClickAndClose = (fieldName) => {
    handleFieldClick(fieldName);
    handleClose();
  };

  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper required-fields-dailog'
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          Review Required Fields
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
              <TableContainer className='table-wrapper'>
                <Table sx={{ minWidth: 400 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='left' style={{ width: '88%' }}>
                        Name
                      </TableCell>
                      <TableCell
                        align='left'
                        style={{ width: '12%' }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell
                        component='th'
                        scope='row'
                        className='field-name'
                      >
                        <Typography variant='body1' component='p'>
                          <Link
                            className='red'
                            onClick={() =>
                              handleFieldClickAndClose('Owners first name')
                            }
                          >
                            {' '}
                            Owners first name
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <IconButton
                          aria-label='edit'
                          disableRipple
                          className='go-to-btn'
                        >
                          <RiArrowRightSLine size={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell
                        component='th'
                        scope='row'
                        className='field-name'
                      >
                        <Typography variant='body1' component='p'>
                          <Link
                            className='red'
                            onClick={() =>
                              handleFieldClickAndClose('Listing price')
                            }
                          >
                            {' '}
                            Listing price
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <IconButton
                          aria-label='edit'
                          disableRipple
                          className='go-to-btn'
                        >
                          <RiArrowRightSLine size={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell
                        component='th'
                        scope='row'
                        className='field-name'
                      >
                        <Typography variant='body1' component='p'>
                          <Link
                            className='red'
                            onClick={() =>
                              handleFieldClickAndClose('Amenities')
                            }
                          >
                            {' '}
                            Amenities
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <IconButton
                          aria-label='edit'
                          disableRipple
                          className='go-to-btn'
                        >
                          <RiArrowRightSLine size={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell
                        component='th'
                        scope='row'
                        className='field-name'
                      >
                        <Typography variant='body1' component='p'>
                          <Link
                            className='red'
                            onClick={() =>
                              handleFieldClickAndClose('Cover photo')
                            }
                          >
                            {' '}
                            Cover photo
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <IconButton
                          aria-label='edit'
                          disableRipple
                          className='go-to-btn'
                        >
                          <RiArrowRightSLine size={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='modal-dailog-footer'>
          <Button
            variant='contained'
            size='large'
            autoFocus
            onClick={handleClose}
            className='primary-btn btn'
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RequiredfieldsDialog;
