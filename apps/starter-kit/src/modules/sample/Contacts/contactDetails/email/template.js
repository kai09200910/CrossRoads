import React, { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Switch,
  FormControlLabel,
  Typography,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';


const Template = () => {
  // const [value, setValue] = useState('none');
  // const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');
  const navigate = useNavigate();
  const navigateToSelect = () => {
    navigate('/automated-email/create');
  };

  return (
    <>
      <Box variant='div' component='div' className='template-wrap'>
        <Button
          variant='div'
          component='div'
          className='template-btn'
          disableRipple
          onClick={navigateToSelect}
        >
          <Box className='img-wrap'>
            <img
              src='../../../../assets/images/Email-preview.png'
              alt='template-photo'
            />
          </Box>
        </Button>

        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='start'
          className='template-info-wrap'
          spacing={3}
        >
          <Box variant='div' component='div' className=''>
            <Typography variant='h4' component='h4'>
              New Listing (2 images)
            </Typography>
            <Typography variant='span' component='span'>
              1 cover, 1 thumb images
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Switch
                sx={{ marginRight: 1 }}
                className='ios-switch-custom'
                focusVisibleClassName='.Mui-focusVisible'
                disableRipple
                // defaultChecked
              />
            }
            label=''
          />
          <Button
            variant='contained'
            size='large'
            // onClick={handleBuyerOpen}
            className='primary-btn btn'
          >
            Select
          </Button>
        </Stack>

        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          className='template-other-info'
          spacing={3}
        >
          <Typography variant='h3' component='h3'>
            Sending on: 1/12/23
          </Typography>

          <IconButton aria-label='edit' className='color-blue'  onClick={navigateToSelect}>
            <BiEdit size={30} />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default Template;
