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
import InquiryinformationDialog from '../Propertyview/dailogs/inquiryinformationDialog';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const AddeventDialog = ({ open, handleClose }) => {
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
            Add Event
          </DialogTitle>
          <DialogContent className='modal-dailog-content'>
            <Grid container spacing={5} mt={0}>
              <Grid item xs={12} md={12}>
                <Box variant='Box' component='Box'>
                  <label>Title</label>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Event name '
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box variant='Box' component='Box'>
                  <label>Description</label>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Enter phrase to property description'
                    multiline
                    rows={4}
                    maxRows={4}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={5} mt={0}>
              <Grid item xs={12} sm={6} md={6}>
                <Box variant='Box' component='Box'>
                  <label>Event date</label>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker sx={{ width: '100%' }} />
                  </DemoContainer>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box variant='Box' component='Box'>
                  <label>Privacy </label>
                  <Stack spacing={{ xs: 1, sm: 2 }} direction='row' useFlexGap>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label='Public'
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label='Private  '
                    />
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box variant='Box' component='Box'>
                  <label>From:</label>
                  <TimePicker className='time-picker' />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box variant='Box' component='Box'>
                  <label>To:</label>
                  <TimePicker className='time-picker' />
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
                variant='outlined'
                size='large'
                className='outline-btn btn'
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant='contained'
                size='large'
                autoFocus
                className='primary-btn btn'
                onClick={() => {
                  setIsSubmitted(true);
                  handleClose();
                }}
                startIcon={<RiAddFill size={18} />}
              >
                Add
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

export default AddeventDialog;
