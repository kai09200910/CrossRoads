import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';

const TransferDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper small-modal'
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
            Transfer
          </Stack>
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <>
            <Box className=''>
              <Grid container spacing={5}>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div'>
                    <label>Transfer type </label>
                    <RadioGroup
                      row
                      aria-labelledby='demo-row-radio-buttons-group-label'
                      name='row-radio-buttons-group'
                    >
                      <FormControlLabel
                        value='main-agent'
                        control={<Radio />}
                        label='Main agent   '
                      />
                      <FormControlLabel
                        value='secondary-agent '
                        control={<Radio />}
                        label='Secondary agent '
                      />
                    </RadioGroup>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div'>
                    <label>Select agent to transfer to </label>
                    <Select
                      fullWidth
                      id='demo-simple-select'
                      label=''
                      placeholder='Select'
                      IconComponent={RiArrowDownSLine}
                    >
                      <MenuItem value={10}>Main Agent </MenuItem>
                      <MenuItem value={20}>Secondary Agent </MenuItem>
                      <MenuItem value={10}>Main Agent 1</MenuItem>
                      <MenuItem value={20}>Secondary Agent 1</MenuItem>
                      <MenuItem value={10}>Main Agent 2</MenuItem>
                      <MenuItem value={20}>Secondary Agent 2</MenuItem>
                      <MenuItem value={10}>Main Agent 3</MenuItem>
                      <MenuItem value={20}>Secondary Agent 3</MenuItem>
                      <MenuItem value={10}>Main Agent 4</MenuItem>
                      <MenuItem value={20}>Secondary Agent 4</MenuItem>
                    </Select>
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
              Reassign lead
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TransferDialog;
