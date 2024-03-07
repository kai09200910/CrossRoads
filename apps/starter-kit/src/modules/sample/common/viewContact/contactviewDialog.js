import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GeneralTab from './generalTab';
import PersonalinfoTab from './personalinfoTab';
import NotesTab from './notesTab';

const ContactviewDialog = ({ open, handleClose }) => {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper contact-view-dialog'
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          Contact View
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>

        <Box className='contact-tab'>
              <TabContext value={value}>
                <Box className='tab-list-wrapper'>
                  <TabList
                    onChange={handleChange}
                    aria-label='lab API tabs example'
                    className='tab-list'
                  >
                    <Tab
                      label={
                        <>
                          <Typography>General</Typography>
                        </>
                      }
                      value='1'
                    />
                   
                    <Tab
                      label={
                        <>
                          <Typography>Personal info </Typography>
                        </>
                      }
                      value='6'
                    />
                    <Tab
                      label={
                        <>
                          <Typography>Notes</Typography>
                        </>
                      }
                      value='7'
                    />
                  </TabList>
                </Box>
                <TabPanel value='1'>
                  <GeneralTab />
                </TabPanel>
                <TabPanel value='6'>
                  <PersonalinfoTab />
                </TabPanel>
                <TabPanel value='7'>
                  <NotesTab />{' '}
                </TabPanel>
              </TabContext>
            </Box>
        </DialogContent>
        <DialogActions align='right' className='modal-dailog-footer'>
          {/* <Button
            variant='contained'
            size='large'
            autoFocus
            onClick={handleClose}
            className='primary-btn btn'
            sx={{ marginTop: 2 }}
          >
            Send for approval
          </Button> */}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactviewDialog;
