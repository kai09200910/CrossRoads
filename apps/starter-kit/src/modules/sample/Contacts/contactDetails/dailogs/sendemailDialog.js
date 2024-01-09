import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Checkbox,
  ListItemText,
  Typography,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import { LuCalendarDays, LuInbox } from 'react-icons/lu';

const SendemailDialog = ({ open, handleClose }) => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  const names = [
    'Email sent',
    'Spoke with client',
    'Left voicemail',
    'SMS',
    'Appointment set',
    'Meeting held ',
  ];
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper small-modal send-email-modal'
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
            Email Options
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <>
            <Box className=''>
              <Grid container spacing={5}>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div' className='custom-btn'>
                    <LuCalendarDays size={32} />
                    <Typography variant='body1' component='p'>
                      One-time email
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div' className='custom-btn'>
                    <LuInbox size={32} />
                    <Typography variant='body1' component='p'>
                      Future Email
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </>
        </DialogContent>

        {/* <DialogActions align='center' className=''>
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
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default SendemailDialog;
