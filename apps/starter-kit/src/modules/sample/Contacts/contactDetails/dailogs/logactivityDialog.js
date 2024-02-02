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
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';

const LogactivityDialog = ({ open, handleClose }) => {
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
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper small-modal log-activity-modal'
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
                  <Box variant='Box' component='Box'>
                    <label>Activity type </label>
                    <FormControl>
                      <Select
                        labelId='demo-multiple-checkbox-label'
                        id='contact-type-multiple-checkbox'
                        multiple
                        placeholder='Select Contact Type'
                        value={personName}
                        onChange={handleChange}
                        IconComponent={RiArrowDownSLine}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box variant='Box' component='Box'>
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
    </Box>
  );
};

export default LogactivityDialog;
