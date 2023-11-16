import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';

const LogactivityDialog = ({ open, handleClose }) => {
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
            Log activity
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <>
            <Box className=''>
              <Grid container spacing={5}>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div'>
                    <label>Activity type </label>
                    <Select
                      fullWidth
                      id='demo-simple-select'
                      label=''
                      placeholder='Select activity '
                      IconComponent={RiArrowDownSLine}
                    >
                      <MenuItem value={10}>Email sent </MenuItem>
                      <MenuItem value={20}>Spoke with client </MenuItem>
                      <MenuItem value={10}>Left voicemail </MenuItem>
                      <MenuItem value={20}>SMS</MenuItem>
                      <MenuItem value={10}>Appointment set</MenuItem>
                      <MenuItem value={20}>Meeting held </MenuItem>
                    </Select>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div'>
                    <label>Add comment </label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Additional comment'
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
              Log activity
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogactivityDialog;
