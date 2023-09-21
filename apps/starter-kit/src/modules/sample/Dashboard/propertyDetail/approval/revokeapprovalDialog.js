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
import { IoCheckmarkCircle } from 'react-icons/io5';
import { RiErrorWarningFill } from 'react-icons/ri';

const RevokeapprovalDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        align='center'
        className='modal-dailog-wrapper'
      >
        <DialogContent className='modal-dailog-content'>
          <RiErrorWarningFill size={75} style={{ color: '#D60000' }} />
          <Typography
            gutterBottom
            variant='h2'
            component='h2'
            sx={{ paddingTop: 2 }}
          >
            Are you sure you want to revoke approval?
          </Typography>
        </DialogContent>
        <DialogActions align='center' className='modal-dailog-footer'>
          <Button
            variant='outlined'
            size='large'
            // onClick={handleBack}
            className='outline-btn btn'
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            size='large'
            autoFocus
            onClick={handleClose}
            className='primary-btn btn'
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RevokeapprovalDialog;
