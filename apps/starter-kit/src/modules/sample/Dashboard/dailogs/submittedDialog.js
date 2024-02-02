import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { Box } from '@mui/material';

const SubmittedDialog = ({ open, handleClose }) => {
  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        align='center'
        className='modal-dailog-wrapper'
      >
        <DialogContent className='modal-dailog-content'>
          <IoCheckmarkCircle size={75} style={{ color: '#009A6C' }} />
          <Typography
            gutterBottom
            variant='h2'
            component='h2'
            sx={{ paddingTop: 2 }}
          >
            Successfully submitted listing documents
          </Typography>
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
    </Box>
  );
};

export default SubmittedDialog;
