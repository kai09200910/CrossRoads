import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import {
  RiAddCircleFill,
  RiAddFill,
  RiArrowDownSLine,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiPencilFill,
  RiSearchLine,
} from 'react-icons/ri';
// import MatchingContacts from '../../common/matchingContacts';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MatchingContacts from './matchingContacts';
import AddcontactDialog from './addContact/addcontactDialog';
import ErrorDialog from '../Dashboard/dailogs/errorDialog';
import ListingagreementDialog from '../Dashboard/dailogs/listingagreementDialog';

const AddbuyerDialog = ({ open, handleClose, step }) => {
  const [isAddcontact, setIsAddcontact] = useState(false);
  const handleaddcontactClose = () => {
    setIsAddcontact(false);
  };

  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const [isBuyerDialogOpen, setIsBuyerDialogOpen] = useState(false);

  const handleOpen = () => {
    setIsErrorDialogOpen(true);
  };
  // const handleClose = () => {
  //   setIsErrorDialogOpen(false);
  // };

  const handleBuyerOpen = () => {
    setIsBuyerDialogOpen(true);
  };

  const handleBuyerClose = () => {
    setIsBuyerDialogOpen(false);
  };

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  return (
    <>
      <Box>
        <Dialog
          onClose={handleClose}
          aria-labelledby='customized-dialog-title'
          open={open}
          className='modal-dailog-wrapper add-buyer-modal'
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
              Buyer Information
            </Stack>
          </DialogTitle>
          <DialogContent className='modal-dailog-content'>
            <Stack
              spacing={{ xs: 1, sm: 4 }}
              direction='row'
              useFlexGap
              alignItems='center'
              className='add-doc-btn-grp'
            >
              {/* <Box
                variant='div'
                component='div'
                className='btn add-doc-btn doc-added upload-wrapper'
              >
                <TextField type='file' className='upload'></TextField>
                <Typography variant='body1' component='span' className=''>
                  <RiCheckboxCircleFill size={20} />
                  KYC Documents
                </Typography>
              </Box>

              <Button
                variant='contained'
                size='large'
                className='btn add-doc-btn error'
                startIcon={<RiErrorWarningFill />}
                onClick={() => handleOpen()}
              >
                <Typography variant='body1' component='span' className=''>
                  KYC Documents
                </Typography>
              </Button>
              <Box
                variant='div'
                component='div'
                className='btn add-doc-btn doc-added upload-wrapper'
                onClick={handleBuyerOpen}
              >
                <Typography variant='body1' component='span' className=''>
                  <RiCheckboxCircleFill size={20} />
                  Listing Agreement
                </Typography>
              </Box> */}
              <Box
                variant='div'
                component='div'
                className=''
              >
                {/* <TextField type='file' className='upload'></TextField>
                <Typography variant='body1' component='span' className=''>
                  <RiAddLine  size={20} />
                  Add other buyer 
                </Typography> */}
                <Button
                  variant='contained'
                  size='large'
                  autoFocus
                  className='primary-btn btn add-other-buyer'
                  startIcon={<RiAddFill size={16} />}
                  // onClick={() => setIsAddcontact(true)}
                >
                  Add other buyer
                </Button>
              </Box>
              <Box
                variant='div'
                component='div'
                className='btn add-doc-btn upload-wrapper other-doc'
              >
                <TextField type='file' className='upload'></TextField>
                <Typography variant='body1' component='span' className=''>
                  <RiAddCircleFill size={20} />
                  KYC Documents
                </Typography>
              </Box>
            </Stack>

            <Box className='buyer-info'>
              <Grid container spacing={5} mt={0}>
                <Grid item xs={12} sm={5} md={5}>
                  <Box variant='Box' component='Box'>
                    <label>First name </label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Select event type'
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={5} md={5}>
                  <Box variant='Box' component='Box'>
                    <label>Last name </label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Event name '
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={2} md={2}>
                  <label className='empty-label '></label>
                  <Button
                    variant='outlined'
                    startIcon={<RiSearchLine />}
                    className='primary-btn icon-btn'
                  ></Button>
                </Grid>
              </Grid>
              <Grid container mt={5}>
                <Grid item xs={12} sm={12} md={12}>
                  <label>Matching contacts</label>
                  <MatchingContacts />
                </Grid>
              </Grid>
              {/* <Button
                variant='outlined'
                size='small'
                className='edit-btn secondary-btn-small'
              >
                Add contact
              </Button> */}
              <Grid container spacing={5} mt={2}>
                <Grid item xs={12} sm={6} md={12}>
                  <Box variant='Box' component='Box'>
                    <label>Sold price</label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      type='number'
                      placeholder='$500,000'
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box variant='Box' component='Box'>
                    <label>Agent sold by</label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Enter name'
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box variant='Box' component='Box'>
                    <label>Secondary agent </label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Enter name'
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box variant='Box' component='Box'>
                    <label>Under contract date </label>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker sx={{ width: '100%' }} />
                    </DemoContainer>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box variant='Box' component='Box'>
                    <label>Date sold </label>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker sx={{ width: '100%' }} />
                    </DemoContainer>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6} mt={3}>
                  <Box variant='Box' component='Box'>
                    <label>Co-Broke? </label>
                    <Stack
                      spacing={{ xs: 1, sm: 2 }}
                      direction='row'
                      useFlexGap
                    >
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label='Yes '
                      />
                      <FormControlLabel control={<Checkbox />} label='No  ' />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} mt={3}>
                  <Box variant='Box' component='Box'>
                    <label>Co-broke agency </label>
                    <Select
                      fullWidth
                      id='primary-agent'
                      value={value}
                      defaultValue='none'
                      onChange={(e) => setValue(e.target.value)}
                      onFocus={(e) => setShowPlaceholder(false)}
                      onClose={(e) =>
                        setShowPlaceholder(e.target.value === undefined)
                      }
                      IconComponent={RiArrowDownSLine}
                    >
                      <MenuItem
                        key='0'
                        disabled
                        value='none'
                        className='place-holder'
                      >
                        Select Co-broke agency
                      </MenuItem>
                      <MenuItem value={10}>Co-broke agency 1</MenuItem>
                      <MenuItem value={20}>Co-broke agency 2</MenuItem>
                      <MenuItem value={30}>Co-broke agency 3</MenuItem>
                      <MenuItem value={10}>Co-broke agency 4</MenuItem>
                      <MenuItem value={20}>Co-broke agency 5</MenuItem>
                      <MenuItem value={30}>Co-broke agency 6</MenuItem>
                    </Select>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} mt={3}>
                  <Box variant='Box' component='Box'>
                    <label>Status </label>
                    <Stack
                      spacing={{ xs: 1, sm: 2 }}
                      direction='row'
                      useFlexGap
                    >
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label='Under contract '
                      />
                      <FormControlLabel control={<Checkbox />} label='sold  ' />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} mt={3}>
                  <Box variant='Box' component='Box'>
                    <label>Display on site </label>
                    <FormControlLabel
                      control={
                        <Switch
                          sx={{ m: 1 }}
                          className='ios-switch-custom'
                          focusVisibleClassName='.Mui-focusVisible'
                          disableRipple
                        />
                      }
                      label=''
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box variant='Box' component='Box'>
                    <label>Add phrase to property description</label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Enter phrase to property description'
                      multiline
                      rows={4}
                      maxRows={4}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions className='modal-dailog-footer'>
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
                Cancel
              </Button>
              <Button
                variant='contained'
                size='large'
                autoFocus
                className='primary-btn btn'
                startIcon={<RiAddFill size={18} />}
                onClick={() => setIsAddcontact(true)}
              >
                Add
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </Box>
      <AddcontactDialog
        open={isAddcontact}
        handleClose={handleaddcontactClose}
        title={'Add Contact'}
      />
      {/* <ErrorDialog open={isErrorDialogOpen} handleClose={handleClose} />
      <ListingagreementDialog
        open={isBuyerDialogOpen}
        handleClose={handleBuyerClose}
      /> */}
    </>
  );
};

export default AddbuyerDialog;
