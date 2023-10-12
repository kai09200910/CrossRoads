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
import { RiArrowDownSLine, RiPencilFill, RiSearchLine } from 'react-icons/ri';
import MatchingContacts from '../../common/matchingContacts';

const BuyerDialog = ({ open, handleClose, nextStep, step }) => {
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
            >
              +New buyer profile
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          {step === 1 ? (
            <Box className='buyer-info'>
              <Grid container spacing={5} mt={4}>
                <Grid item xs={12} md={5}>
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
                <Grid item xs={12} md={5}>
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
                <Grid item xs={12} md={2}>
                  <label className='empty-label '></label>
                  <Button
                    variant='outlined'
                    startIcon={<RiSearchLine />}
                    className='primary-btn icon-btn'
                  ></Button>
                </Grid>
              </Grid>
              <Grid container spacing={5} mt={2}>
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
                    <Select
                      fullWidth
                      id='demo-simple-select'
                      label=''
                      placeholder='Select'
                      IconComponent={RiArrowDownSLine}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box variant='div' component='div'>
                    <label>Date sold </label>
                    <Select
                      fullWidth
                      id='demo-simple-select'
                      label=''
                      placeholder='Select'
                      IconComponent={RiArrowDownSLine}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
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
                      <FormControlLabel control={<Checkbox />} label='sold  ' />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box variant='div' component='div'>
                    <label>Display on site </label>
                    <FormControlLabel
                      // control={<IOSSwitch  /> <Switch  sx={{ m: 1 }}
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
                      <Select
                        fullWidth
                        id='demo-simple-select'
                        label=''
                        placeholder='Select'
                        IconComponent={RiArrowDownSLine}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box variant='div' component='div'>
                      <label>Date sold </label>
                      <Select
                        fullWidth
                        id='demo-simple-select'
                        label=''
                        placeholder='Select'
                        IconComponent={RiArrowDownSLine}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
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
          <Button variant='outlined' size='large' className='outline-btn btn'>
            Cancel
          </Button>
          <Button
            variant='contained'
            size='large'
            autoFocus
            onClick={step == 1 || step == 2 ? nextStep : handleClose}
            className='primary-btn btn'
          >
            + Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BuyerDialog;
