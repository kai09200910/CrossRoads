import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  TextField,
} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RiAddFill } from 'react-icons/ri';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TagsInput from '../../../common/tagsInput';
import '../../contacts.scss';
import EmailTemplate from '../../../common/emailTemplate';
// import SubmittedDialogs from '../dailogs/submittedDialog';


const TemplateDetail = () => {
  const location = useLocation();
  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' to='/contacts'>
      Contacts 
    </Link>,
    <Link underline='hover' key='1' color='inherit' to='/automated-email'>
      Select Template
    </Link>,
    <Typography key='3' color='text.primary'>
      Email Selection
    </Typography>,
  ];

  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/campaigns/create');
  };

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  function handleSelecetedTags(items) {}

  
  const navigateToList = () => {
    navigate('/automated-email');
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };
  return (
    <>
      <Box
        sx={{
          marginBottom: { xs: 3, sm: 3, lg: 4 },
        }}
        className='automated-email-intro'
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            paddingBottom: { xs: 0, xl: 0 },
            paddingTop: { xs: 5, xl: 5 },
          }}
          className='main-title'
        >
          <Typography variant='h3' component='h3'>
            Automated Email #1 (New Listing | 2 images)
          </Typography>

          <Button
            variant='outlined'
            size='small'
            className='edit-btn secondary-btn-small'
            onClick={navigateToCreate}
            startIcon={<RiAddFill size={18} />}
          >
            New campaign
          </Button>
        </Stack>
      </Box>
      <Grid container spacing={6} justifyContent='flex-start'>
        <Grid item xs={12} sm={8} md={8}>
          <Paper>
            <Box
              className='template-detail-wrap'
              sx={{
                padding: { xs: 5, xl: 5 },
              }}
            >
              <Box
                variant='div'
                component='div'
                // sx={{
                //   paddingTop: { xs: 4, xl: 4 },
                // }}
                className='breadcrumb-wrap'
              >
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize='small' />}
                  aria-label='breadcrumb'
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Box>

              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{
                  paddingBottom: { xs: 4, xl: 4 },
                  paddingTop: { xs: 5, xl: 5 },
                }}
                className=''
              >
                <Typography variant='h3' component='h3'>
                  Select Template
                </Typography>
              </Stack>

              <Box
                className='img-wrap'
                sx={{
                  padding: { xs: 5, xl: 5 },
                }}
              >
                <EmailTemplate />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper>
            <Box
              sx={{
                padding: { xs: 5, xl: 5 },
              }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{
                  paddingBottom: { xs: 4, xl: 4 },
                  paddingTop: { xs: 5, xl: 5 },
                }}
                className=''
              >
                <Typography variant='h3' component='h3'>
                  Details
                </Typography>
              </Stack>
              <Box className='select-template-detail-form'>
                <Box variant='div' component='div'>
                  <label>Email subject </label>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    type='number'
                    variant='outlined'
                    placeholder='Enter subject '
                  />
                </Box>

                <Box variant='div' component='div' mt={4}>
                  <label>Select date to send on </label>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker sx={{ width: '100%' }} />
                  </DemoContainer>
                </Box>

                <Box variant='div' component='div' mt={4}>
                  <label>To: </label>
                  <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    variant='outlined'
                    placeholder='Email '
                  />
                </Box>

                <Box variant='div' component='div' mt={4}>
                  <label>CC </label>
                  <TagsInput
                    selectedTags={handleSelecetedTags}
                    fullWidth
                    variant='outlined'
                    id='tags'
                    name='tags'
                    placeholder='Email (type email address)'
                    className='tag-input'
                  />
                </Box>

                <Button
                  variant='contained'
                  size='small'
                  autoFocus
                  onClick={navigateToList}
                  className='primary-btn btn'
                  disableRipple
                  mt={6}
                  sx={{
                    marginTop: { xs: 9, xl: 9 },
                    width: { xs: '100%', xl: '100%' },
                  }}
                >
                  Finalize and save this email
                </Button>


                
                {/* <Button
                  variant='contained'
                  size='small'
                  autoFocus
                  onClick={() => setIsSubmitted(true)}
                  className='primary-btn btn'
                  disableRipple
                  mt={6}
                  sx={{
                    marginTop: { xs: 9, xl: 9 },
                    width: { xs: '100%', xl: '100%' },
                  }}
                >
                  Finalize and save this email
                </Button> */}


              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* <SubmittedDialogs open={isSubmitted} handleClose={handleClose} /> */}
    </>
  );
};

export default TemplateDetail;
