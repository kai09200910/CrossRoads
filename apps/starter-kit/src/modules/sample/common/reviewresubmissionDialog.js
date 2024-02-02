import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Box, Grid, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const ReviewResubmissionDialog = ({
  open,
  handleClose,
  isdisapproved,
  setIsDisapproved,
  handleSubmitOpen,
  isClose = false,
}) => {
  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper disapproval-feedback-dailog '
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          {isClose
            ? 'Review Update'
            : isdisapproved
            ? 'Disapproval Feedback'
            : 'Review resubmission'}
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          {isdisapproved ? (
            <Box className='disapproval-feedback'>
              <Grid container spacing={5}>
                <Grid item xs={12} md={12}>
                  <Box variant='Box' component='Box' className='error-value'>
                    <label>Listing Price</label>
                    <Typography variant='body1' component='span' className=''>
                      Name
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box variant='Box' component='Box'>
                    <label>Reason for disapproval </label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Enter reason for disapproval'
                      multiline
                      rows={4}
                      maxRows={4}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box className='review-resubmission'>
              <Grid container spacing={5}>
                <Grid item xs={12} md={12}>
                  <Box sx={{ position: 'relative' }} className='document-list'>
                    <TableContainer className='table-wrapper'>
                      <Table sx={{ minWidth: 400 }} aria-label='simple table'>
                        <TableHead>
                          <TableRow>
                            <TableCell align='left' style={{ width: '40%' }}>
                              Old value
                            </TableCell>
                            <TableCell align='center' style={{ width: '20%' }}>
                              <HiOutlineArrowLongRight size={22} />
                            </TableCell>
                            <TableCell align='left' style={{ width: '40%' }}>
                              New value
                            </TableCell>
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
                              $5,000,000
                              <Typography variant='body1' component='p'>
                                Listing price
                              </Typography>
                            </TableCell>
                            <TableCell align='left'></TableCell>
                            <TableCell
                              align='left'
                              component='th'
                              scope='row'
                              className='field-name'
                            >
                              $4,000,000
                              <Typography variant='body1' component='p'>
                                Listing price
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions className='modal-dailog-footer'>
          <>
            {isClose ? (
              <Button
                variant='outlined'
                size='large'
                onClick={() =>
                  isClose ? handleClose() : setIsDisapproved(!isdisapproved)
                }
                className='outline-btn btn'
              >
                Close
              </Button>
            ) : (
              <>
                <Button
                  variant='outlined'
                  size='large'
                  onClick={() => setIsDisapproved(!isdisapproved)}
                  className='outline-btn btn'
                >
                  {isdisapproved ? 'Back' : 'Disapprove'}
                </Button>

                <Button
                  variant='contained'
                  size='large'
                  autoFocus
                  onClick={() =>
                    isdisapproved ? handleClose() : handleSubmitOpen()
                  }
                  className='primary-btn btn'
                >
                  {isdisapproved ? 'Send to agent' : 'Approve'}
                </Button>
              </>
            )}
          </>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReviewResubmissionDialog;
