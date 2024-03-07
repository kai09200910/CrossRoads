import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import { RiAddFill } from 'react-icons/ri';
import InquiryinformationDialog from './inquiryinformationDialog';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const AssignmlsnumberDialog = ({ open, handleClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handlemodalClose = () => {
    setIsSubmitted(false);
  };
  return (
    <>
      <Box>
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
           Assign MLS number & Approve 
          </DialogTitle>
          <DialogContent className='modal-dailog-content'>
            <Grid container spacing={5} mt={0}>
              <Grid item xs={12} md={12}>
                <Box variant='Box' component='Box'>
                  <label>Add MLS number </label>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Add MLS number  '
                  />
                </Box>
              </Grid>
            </Grid>
            
          </DialogContent>
          <DialogActions align='right' className=''>
            <Stack
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
              spacing={2}
              sx={{
                padding: { xs: 3, sm: 6, xl: 6 },
              }}
            >
              
              <Button
                variant='contained'
                size='large'
                autoFocus
                className='primary-btn btn'
                // onClick={() => {
                //   setIsSubmitted(true);
                //   handleClose();
                // }}
              >
               Upload and notify agent
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </Box>
      <InquiryinformationDialog
        open={isSubmitted}
        handleClose={handlemodalClose}
      />
    </>
  );
};

export default AssignmlsnumberDialog;
