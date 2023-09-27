import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Box, Grid, Stack, Typography } from '@mui/material';

const ListingnoteDialog = ({ open, handleClose }) => {
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
          Listing note
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
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
                <Typography gutterBottom variant='p' component='p'>
                  Owner has requested that that the price should be raised, we
                  are all considering options at the moment
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions align='center' className=''>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={2}
            sx={{
              padding: { xs: 3, sm: 6, xl: 6 },
              width: '100%',
            }}
          >
            <Button
              variant='contained'
              size='large'
              autoFocus
              onClick={handleClose}
              className='primary-btn btn'
            >
              Exit
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListingnoteDialog;
