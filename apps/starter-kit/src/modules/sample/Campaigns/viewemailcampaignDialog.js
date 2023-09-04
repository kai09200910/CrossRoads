import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const ViewemailcampaignDialog = ({ open, handleClose }) => {
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
          Email View
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <Typography gutterBottom variant='p' component='p'>
            View Email Campaign template here
          </Typography>
        </DialogContent>
        <DialogActions align='center' className='modal-dailog-footer'>
          {/* <Button
            variant='contained'
            size='large'
            autoFocus
            onClick={handleClose}
            className='primary-btn btn'
          >
            Got it!
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewemailcampaignDialog;
