import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';

const MatchingbuyersDialog = ({ open, handleClose }) => {
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
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
          >
            Matching Buyers Information
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div' className='error-value'>
                <Typography variant='body1' component='span' className=''>
                  Name
                </Typography>
                <Typography gutterBottom variant='p' component='p'>
                  John Smith
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant='div' component='div' className='error-value'>
                <Typography variant='body1' component='span' className=''>
                  Match %
                </Typography>
                <Typography gutterBottom variant='p' component='p'>
                  95%
                </Typography>
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
            <Button variant='outlined' size='large' className='outline-btn btn'>
              Close
            </Button>
            {/* <Button
              variant='contained'
              size='large'
              autoFocus
              onClick={handleClose}
              className='primary-btn btn'
            >
              View contact
            </Button> */}
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MatchingbuyersDialog;
