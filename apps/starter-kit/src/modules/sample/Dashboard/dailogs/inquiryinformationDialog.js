import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import EditinquiryinformationDialog from './editinquiryinformationDialog';
import { Box, Grid, Stack } from '@mui/material';
import { RiPencilFill } from 'react-icons/ri';

const InquiryinformationDialog = ({ open, handleClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handlemodalClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
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
              Inquiry Information
              <Button
                variant='outlined'
                size='small'
                startIcon={<RiPencilFill />}
                className='edit-btn secondary-btn-small'
                onClick={() => {
                  setIsSubmitted(true);
                  handleClose();
                }}
              >
                edit
              </Button>
            </Stack>
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
              <Grid item xs={12} md={6}>
                <Box variant='div' component='div' className='error-value'>
                  <Typography variant='body1' component='span' className=''>
                    Number
                  </Typography>
                  <Typography gutterBottom variant='p' component='p'>
                    242-234-6789
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box variant='div' component='div' className='error-value'>
                  <Typography variant='body1' component='span' className=''>
                    Email
                  </Typography>
                  <Typography gutterBottom variant='p' component='p'>
                    henrykaichristie@gmail.com
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box variant='div' component='div' className='error-value'>
                  <Typography variant='body1' component='span' className=''>
                    Details
                  </Typography>
                  <Typography gutterBottom variant='p' component='p'>
                    HiIs it possible to see lots for sale in rose Island ?
                    Arrive tomorrow 5 pm and stay 2 days or more WhatsApp i
                    have.
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
              <Button
                variant='outlined'
                size='large'
                className='outline-btn btn'
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant='contained'
                size='large'
                autoFocus
                // onClick={handleClose}
                className='primary-btn btn'
              >
                View contact
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </div>
      <EditinquiryinformationDialog
        open={isSubmitted}
        handleClose={handlemodalClose}
      />
    </>
  );
};

export default InquiryinformationDialog;
