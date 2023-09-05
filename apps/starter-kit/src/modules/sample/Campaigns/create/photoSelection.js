import { Box, Typography } from '@mui/material';
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

const NewComp = () => {
  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      href='/'
      onClick={handleClick}
    >
      Email Selection
    </Link>,
    <Typography key='3' color='text.primary'>
      Photo Selection
    </Typography>,
  ];

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <>
      <Box
        sx={{
          padding: { xs: 5, xl: 5 },
        }}
        className=''
      >
        <Box
          variant='div'
          component='div'
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
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

        <Box className='photo-selection-preview-area'>
          <img
            src='../../../../assets/images/email-photo-preview.png'
            alt='template-thumbnail '
          />
        </Box>
      </Box>
    </>
  );
};

export default NewComp;
