import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const ErrorDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper'
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          Document updates needed
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div' className='error-value'>
                <Typography variant='body1' component='span' className=''>
                  Admin
                </Typography>
                <Typography gutterBottom variant='p' component='p'>
                  Chalene Curry
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div' className='error-value'>
                <Typography variant='body1' component='span' className=''>
                  Date
                </Typography>
                <Typography gutterBottom variant='p' component='p'>
                  07/12/23
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div' className='error-value'>
                <Typography variant='body1' component='span' className=''>
                  Details
                </Typography>
                <Typography
                  gutterBottom
                  variant='p'
                  component='p'
                  className='error-detail-list'
                >
                  KYC Documents missing signatures
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions align='center' className='modal-dailog-footer'>
          <Button
            variant='contained'
            size='large'
            autoFocus
            onClick={handleClose}
            className='primary-btn btn'
          >
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ErrorDialog;
