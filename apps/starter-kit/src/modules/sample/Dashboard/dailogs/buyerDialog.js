import * as React from 'react';
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
  RiAddFill,
  RiArrowDownSLine,
  RiPencilFill,
  RiSearchLine,
} from 'react-icons/ri';
import MatchingContacts from '../../common/matchingContacts';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BuyerDialog = ({ open, handleClose, step }) => {
  return (
    <div>
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
            {step == 1 || step == 3 ? 'Buyer Information' : 'Matching buyer'}
            <Button
              variant='outlined'
              size='small'
              className='edit-btn secondary-btn-small'
              startIcon={<RiAddFill size={18} />}
            >
              New buyer profile
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          {step === 1 ? (
            <Box className='buyer-info'>
              <Grid container spacing={5} mt={4}>
                <Grid item xs={12} sm={5} md={5}>
                  <Box variant='div' component='div'>
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
                  <Box variant='div' component='div'>
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
              <Grid container spacing={5} mt={2}>
                <Grid item xs={12} sm={6} md={12}>
                  <Box variant='div' component='div'>
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
                  <Box variant='div' component='div'>
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
                  <Box variant='div' component='div'>
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
                  <Box variant='div' component='div'>
                    <label>Under contract date </label>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker sx={{ width: '100%' }} />
                    </DemoContainer>
                    {/* <Select
                      fullWidth
                      id='demo-simple-select'
                      label=''
                      placeholder='Select'
                      IconComponent={RiArrowDownSLine}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box variant='div' component='div'>
                    <label>Date sold </label>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker sx={{ width: '100%' }} />
                    </DemoContainer>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={5} mt={4}>
                <Grid item xs={12} sm={6} md={6}>
                  <Box variant='div' component='div'>
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
                <Grid item xs={12} sm={6} md={6}>
                  <Box variant='div' component='div'>
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
                  <Box variant='div' component='div'>
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
          ) : step === 2 ? (
            <Box className='matching-contact'>
              <MatchingContacts />
            </Box>
          ) : (
            <Box>
              {/* Buyer's information without 2 fields (first name & last name) */}
              <Box className='buyer-info'>
                <Grid container spacing={5} mt={2}>
                  <Grid item xs={12} md={12}>
                    <Typography
                      variant='p'
                      component='p'
                      className='title-agent-detail'
                    >
                      Buyer:{''}
                      <Typography variant='body1' component='span' className=''>
                        John Smith
                        <IconButton aria-label='edit'>
                          <RiPencilFill />
                        </IconButton>
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Box variant='div' component='div'>
                      <label>
                        Sold price
                        <Typography
                          variant='body1'
                          component='span'
                          className='optional-label'
                        >
                          Optional
                        </Typography>
                      </label>
                      <TextField
                        fullWidth
                        id='outlined-basic'
                        label=''
                        variant='outlined'
                        placeholder='$500,000'
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box variant='div' component='div'>
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
                  <Grid item xs={12} md={6}>
                    <Box variant='div' component='div'>
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
                  <Grid item xs={12} md={6}>
                    <Box variant='div' component='div'>
                      <label>Under contract date </label>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker sx={{ width: '100%' }} />
                      </DemoContainer>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box variant='div' component='div'>
                      <label>Date sold </label>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker sx={{ width: '100%' }} />
                      </DemoContainer>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={5} mt={4}>
                  <Grid item xs={12} md={6}>
                    <Box variant='div' component='div'>
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
                        <FormControlLabel
                          control={<Checkbox />}
                          label='sold  '
                        />
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box variant='div' component='div'>
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
                    <Box variant='div' component='div'>
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
            </Box>
          )}
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
              Close
            </Button>
            <Button
              variant='contained'
              size='large'
              autoFocus
              className='primary-btn btn'
              startIcon={<RiAddFill size={18} />}
            >
              Add
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BuyerDialog;
