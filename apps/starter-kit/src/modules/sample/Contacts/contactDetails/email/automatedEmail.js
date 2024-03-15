import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  Select,
  MenuItem,
  Stack,
  Typography,
  IconButton,
  FormControlLabel,
  Switch,
} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RiAddFill, RiArrowDownSLine, RiCloseFill } from 'react-icons/ri';
import TagsInput from '../../../common/tagsInput';
import Template from './template';
import '../../contacts.scss';
import SubmittedDialogs from '../dailogs/submittedDialog';

const AutomatedEmail = () => {
  const location = useLocation();
  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' to='/contacts'>
      Contacts
    </Link>,
    <Typography key='3' color='text.primary'>
      Select Template
    </Typography>,
  ];

  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/campaigns/create');
  };

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  function handleSelecetedTags(items) {}

  // const navigate = useNavigate();
  const navigateToSelect = () => {
    navigate('/automated-email/template-details');
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  const [showTag, setShowTag] = useState(false);

  const handleSwitchChange = () => {
    setShowTag(!showTag);
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
            paddingBottom: { xs: 4, xl: 4 },
            paddingTop: { xs: 5, xl: 5 },
          }}
          className='main-title'
        >
          <Typography variant='h3' component='h3'>
            Automated Email
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
        <Grid container spacing={3} justifyContent='flex-start'>
          <Grid item xs={12} sm={4} md={4}>
            <Box variant='div' component='div'>
              <label>Select Category </label>
              <Select
                fullWidth
                id='demo-simple-select'
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
                  Select Category
                </MenuItem>
                <MenuItem value={20}>Customer </MenuItem>
                <MenuItem value={30}>Buyer </MenuItem>
                <MenuItem value={40}>Seller</MenuItem>
                <MenuItem value={50}>Renter</MenuItem>
                <MenuItem value={60}>Rental Owner</MenuItem>
                <MenuItem value={70}>Appraisal </MenuItem>
                <MenuItem value={80}>CMA</MenuItem>
                <MenuItem value={80}>Completed clients</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            
              <Box variant='div' component='div' className='tag-wrap'>
                <label className='empty-label'> </label>
                {/* <TagsInput
                selectedTags={handleSelecetedTags}
                fullWidth
                variant='outlined'
                id='tags'
                name='tags'
                placeholder='Tags appear based on templates selected'
                className='tag-input'
              /> */}
                <Box variant='div' component='div' className='tag-list'>
                {showTag && (
                  <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={1}
                    className='tag'
                  >
                    <Typography variant='span' component='span'>
                      (2)
                    </Typography>
                    <Typography variant='p' component='p'>
                      Buyer
                    </Typography>
                    <IconButton aria-label='edit' className='color-blue'>
                      <RiCloseFill size={22} />
                    </IconButton>
                  </Stack>
   )}
                  <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={1}
                    className='tag'
                  >
                    <Typography variant='span' component='span'>
                      (1)
                    </Typography>
                    <Typography variant='p' component='p'>
                      Holiday
                    </Typography>
                    <IconButton aria-label='edit' className='color-blue'>
                      <RiCloseFill size={22} />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
         
          </Grid>
        </Grid>
      </Box>
      <Paper>
        <Box
          className='select-template-wrap'
          sx={{
            padding: { xs: 5, xl: 5 },
          }}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            gap={2}
            flexWrap='wrap'
          >
            <Box
              variant='div'
              component='div'
              sx={{
                paddingTop: { xs: 4, xl: 4 },
              }}
              className='breadcrumb-wrap'
            >
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize='small' />}
                aria-label='breadcrumb'
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Box>
            <Button
              variant='contained'
              size='small'
              autoFocus
              className='primary-btn btn'
              disableRipple
              sx={{
                MarginLeft: { xs: 1, xl: 1 },
              }}
              onClick={() => setIsSubmitted(true)}
            >
              Start campaign
            </Button>
          </Stack>

          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              paddingBottom: { xs: 4, xl: 4 },
              paddingTop: { xs: 5, xl: 5 },
            }}
            className='template-list-title'
          >
            <Typography variant='h3' component='h3'>
              Select Template
            </Typography>

            <Button
              variant='contained'
              size='small'
              autoFocus
              // onClick={() => setIsList(true)}
              className='primary-btn btn'
              disableRipple
            >
              Finalize emails
            </Button>
          </Stack>

          <Box sx={{ my: 2 }}>
            <Box className='template-list'>
              <Template
                handleSwitchChange={handleSwitchChange}
              />
             <Template
                handleSwitchChange={handleSwitchChange}
              />
              <Template
                handleSwitchChange={handleSwitchChange}
              />
              <Template
                handleSwitchChange={handleSwitchChange}
              />
              <Template
                handleSwitchChange={handleSwitchChange}
              />
              <Template
                handleSwitchChange={handleSwitchChange}
              />
              <Template
                handleSwitchChange={handleSwitchChange}
              />
            </Box>
          </Box>
        </Box>
      </Paper>

      <SubmittedDialogs open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default AutomatedEmail;
