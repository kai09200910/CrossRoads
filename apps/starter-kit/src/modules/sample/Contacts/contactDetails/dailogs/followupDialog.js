import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FollowupDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper small-modal'
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
          >
            {/* {title} */}
            Add follow up
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <>
            <Box className=''>
              <Grid container spacing={5}>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div'>
                    <label>Date</label>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker sx={{ width: '100%' }} />
                    </DemoContainer>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div'>
                    <label>Follow up note </label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Add note '
                      multiline
                      rows={4}
                      maxRows={4}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </>
        </DialogContent>

        <DialogActions align='center' className=''>
          <Stack
            direction='row'
            justifyContent='center'
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
            >
              Save
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FollowupDialog;
