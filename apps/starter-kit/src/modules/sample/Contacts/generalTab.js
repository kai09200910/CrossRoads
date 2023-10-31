import React, { useState } from 'react';
import {
  Box,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  Stack,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import TagsInput from '../common/tagsInput';
const GeneralTab = () => {
  function handleSelecetedTags(items) {
    console.log(items);
  }

  return (
    <>
      <Box className='genral-tab'>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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
        </Grid>
        <Grid container spacing={5} mt={2}>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Nick name</label>
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
              <label>Spouse name </label>
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
              <label>Home phone </label>
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
              <label>Mobile phone </label>
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
              <label>Email </label>
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
              <label>Tags </label>
              <TagsInput
                selectedTags={handleSelecetedTags}
                fullWidth
                variant='outlined'
                id='tags'
                name='tags'
                placeholder='add Tags'
                className='tag-input'
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Contact type </label>
              <Select
                fullWidth
                id='demo-simple-select'
                label=''
                placeholder='Select'
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem value={10}>Buyer</MenuItem>
                <MenuItem value={20}>Seller </MenuItem>
                <MenuItem value={30}>Renter </MenuItem>
                <MenuItem value={40}>Landlord </MenuItem>
                <MenuItem value={50}>Appraisal client </MenuItem>
                <MenuItem value={60}>Co-broke agent </MenuItem>
                <MenuItem value={70}>Merchant/supplier </MenuItem>
                <MenuItem value={80}>HGC Associate</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Company name </label>
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
              <label>Agent </label>
              <Select
                fullWidth
                id='demo-simple-select'
                label=''
                placeholder='Select'
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem value={10}>Agent 1</MenuItem>
                <MenuItem value={20}>Agent 2</MenuItem>
                <MenuItem value={30}>Agent 3</MenuItem>
                <MenuItem value={10}>Agent 4</MenuItem>
                <MenuItem value={20}>Agent 5</MenuItem>
                <MenuItem value={30}>Agent 6</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Source</label>
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
              <label>Care of</label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter name'
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={6}>
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Switch
                    sx={{ marginRight: 1 }}
                    className='ios-switch-custom'
                    focusVisibleClassName='.Mui-focusVisible'
                    disableRipple
                    defaultChecked
                  />
                }
                label=''
              />
              <label>Subscribe to emails </label>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GeneralTab;
