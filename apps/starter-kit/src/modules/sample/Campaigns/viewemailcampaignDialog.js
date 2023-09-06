import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';

const ViewemailcampaignDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper'
      >
        <DialogContent className='modal-dailog-content'>
          <Box className='photo-selection-preview-area'>
            <img
              src='../../../../assets/images/email-photo-preview.png'
              alt='template-thumbnail '
            />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewemailcampaignDialog;
