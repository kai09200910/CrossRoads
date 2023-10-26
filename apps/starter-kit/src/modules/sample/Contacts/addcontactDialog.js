import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import Tab, { tabClasses } from '@mui/base/Tab';
import GeneralTab from './generalTab';

const EventviewDialog = ({ open, handleClose }) => {
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
            <Tabs defaultValue={0} className='mediatab-wrap worklist-wrap'>
              <StyledTabsList>
                <StyledTab value={0}>General</StyledTab>
                <StyledTab value={1}>Personal info</StyledTab>
                <StyledTab value={2}>Notes</StyledTab>
                <StyledTab value={3}>Documents</StyledTab>
              </StyledTabsList>

              <StyledTabPanel value={0}>
                <GeneralTab />
              </StyledTabPanel>
              <StyledTabPanel value={1}>Personal Tab content</StyledTabPanel>
              <StyledTabPanel value={2}>Notes Tab content</StyledTabPanel>
              <StyledTabPanel value={3}>Documents Tab content</StyledTabPanel>
            </Tabs>
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

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTab = styled(Tab)`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #292929;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 4px 4px;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  transition: all ease 0.3s;
  &:hover {
    background-color: #4381fd;
    color: #fff;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #4381fd;
  }

  &.${tabClasses.selected} {
    background-color: #2871ff;
    color: #fff;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
width: 100%;
font-family: 'Plus Jakarta Sans', sans-serif;
font-size: 14px;
font-weight: 600;
`,
);

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
min-width: 400px;
width: 490px;
background-color: #fff;
border-radius: 9px;
margin: 8px 0 20px 0;
display: flex;
align-items: center;
justify-content: center;
align-content: space-between;
border: 1px solid #D9D9D9;
box-shadow: 0px 1px 10px rgb(41 41 41 / 13%)
`,
);
