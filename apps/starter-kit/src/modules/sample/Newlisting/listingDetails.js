import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import React, { useState } from 'react';
import {
  RiArrowDownSLine,
  RiCheckboxCircleFill,
  RiAddCircleFill,
} from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import MatchingContacts from '../common/matchingContacts';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import KycdocumentsDialog from './kycdocumentsDialog';
import Steptitle from './stepTitle';

function createData(name, match, email) {
  return { name, match, email };
}

const rows = [createData('John Smith', '95%', 'johnsmith@email.com')];

const ListingDetails = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);

  const [isBuyerDialogOpen, setIsBuyerDialogOpen] = useState(false);

  const handleBuyerOpen = () => {
    setIsBuyerDialogOpen(true);
  };

  const handleBuyerClose = () => {
    setIsBuyerDialogOpen(false);
  };

  const [personName, setPersonName] = React.useState([]);
  const [person, setPerson] = React.useState([]);

  return (
    <>
      <Box variant='div' component='div' className='listing-detial-form'>
        {' '}
        <Steptitle
          isEditClicked={isEditClicked}
          setIsEditClicked={setIsEditClicked}
          personName={personName}
          person={person}
          setPerson={setPerson}
          setPersonName={setPersonName}
        />
        <Grid container spacing={5} mt={5}>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Add documents </label>
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
                  className='btn add-doc-btn upload-wrapper'
                >
                  <TextField type='file' className='upload'></TextField>
                  <Typography variant='body1' component='span' className=''>
                    <RiAddCircleFill size={20} />
                    KYC Documents
                  </Typography>
                </Box> */}
                <Box
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
                <Box
                  variant='div'
                  component='div'
                  className='btn add-doc-btn upload-wrapper'
                  onClick={handleBuyerOpen}
                >
                  {/* <TextField type='file' className='upload'></TextField> */}
                  <Typography variant='body1' component='span' className=''>
                    <RiAddCircleFill size={20} />
                    Listing Agreement
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Listing Type </label>
              <Select
                fullWidth
                id='demo-simple-select'
                label=''
                placeholder='Select'
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem value={10}>MLS Exclusive</MenuItem>
                <MenuItem value={20}>General</MenuItem>
                <MenuItem value={40}>Exclusive (not on MLS)</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Second Agent </label>

              <Select
                fullWidth
                id='demo-simple-select'
                label=''
                placeholder='Select Agent'
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem value={10}>Agent 1</MenuItem>
                <MenuItem value={20}>Agent 2</MenuItem>
                <MenuItem value={30}>Agent 3</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={5}>
            <Box variant='div' component='div'>
              <label>Owners first name </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='First Name'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box variant='div' component='div'>
              <label>
                Middle in.{' '}
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
                placeholder='Middle in'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box variant='div' component='div'>
              <label>Owners last name </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Last Name'
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Email </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Email '
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Cell-phone </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Cell-phone '
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Matching contacts</label>

              <MatchingContacts />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Contract start date </label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Contract end date </label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Listing price </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='$500,000'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Total commission</label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='$500,000'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Commission Split </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='5%,6%,7% etc. '
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>HOA Fees </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='$500,000'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Property Type</label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Select Island'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Currency </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='USD'
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={8}>
            <Box variant='div' component='div'>
              <label>Brokerage </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='$500,000'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Occupancy </label>
              <Select
                fullWidth
                id='demo-simple-select'
                label=''
                placeholder='Select'
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem value={10}>Occupancy 1</MenuItem>
                <MenuItem value={20}>Occupancy 2</MenuItem>
                <MenuItem value={30}>Occupancy 3</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Property name </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Beach Front Home'
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={8}>
            <Box variant='div' component='div'>
              <label>Address (street name) </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='4 Dunmore Island '
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>City </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Nassau'
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Country </label>
              <Select
                fullWidth
                id='demo-simple-select'
                label=''
                placeholder='$500,000'
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem value={10}>Country 1 </MenuItem>
                <MenuItem value={20}>Country 2</MenuItem>
                <MenuItem value={30}>Country 3</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>Islands </label>
              <Select
                fullWidth
                id='demo-simple-select'
                label=''
                placeholder='$500,000'
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>5</MenuItem>
                <MenuItem value={30}>10</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>
                Area{' '}
                <Typography
                  variant='body1'
                  component='span'
                  className='optional-label'
                >
                  Optional
                </Typography>
              </label>
              <Select
                fullWidth
                id='demo-simple-select'
                label=''
                placeholder='$500,000'
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem value={10}>Area 1</MenuItem>
                <MenuItem value={20}>Area 2</MenuItem>
                <MenuItem value={30}>Area 3</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={4}>
            <Box variant='div' component='div'>
              <label>
                Subdivision{' '}
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
          <Grid item xs={12} md={8}>
            <Box variant='div' component='div'>
              <label>Legal Description </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Beach Front Home'
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={4}>
            <label className='empty-label'></label>
            <Button
              variant='contained'
              size='large'
              className='secondary-btn btn add-location-btn '
              startIcon={<FcGoogle />}
            >
              + Add Location
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box variant='div' component='div'>
              <label>Headline </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Beach Front Home'
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>
                Property Description{' '}
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
                placeholder='Details about the property '
                multiline
                rows={4}
                maxRows={4}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <KycdocumentsDialog
        open={isBuyerDialogOpen}
        handleClose={handleBuyerClose}
      />
    </>
  );
};

export default ListingDetails;
