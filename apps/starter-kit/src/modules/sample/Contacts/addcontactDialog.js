import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Box, Button, Stack, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GeneralTab from './generalTab';
import NotesTab from './notesTab';
import PersonalinfoTab from './personalinfoTab';
import BuyerprofileTab from './buyerprofileTab';

const EventviewDialog = ({ open, handleClose }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper add-contact-modal'
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
            Add Contact
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <>
            <Box className='add-contact-tab'>
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
                          <Typography>Buyer Profile</Typography>
                        </>
                      }
                      value='2'
                    />
                    <Tab
                      label={
                        <>
                          <Typography>Personal info </Typography>
                        </>
                      }
                      value='3'
                    />
                    <Tab
                      label={
                        <>
                          <Typography>Notes</Typography>
                        </>
                      }
                      value='4'
                    />
                  </TabList>
                </Box>
                <TabPanel value='1'>
                  <GeneralTab />
                </TabPanel>
                <TabPanel value='2'>
                  <BuyerprofileTab />
                </TabPanel>
                <TabPanel value='3'>
                  <PersonalinfoTab />
                </TabPanel>
                <TabPanel value='4'>
                  <NotesTab />{' '}
                </TabPanel>
              </TabContext>
            </Box>
          </>
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
              className='primary-btn btn'
            >
              Save changes
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventviewDialog;
