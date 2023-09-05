import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import SubmittedDialogs from './submittedDialog';

const ReviewPhotos = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <Box
        sx={{
          padding: { xs: 5, xl: 5 },
        }}
        className=''
      >
        <Typography
          variant='h3'
          component='h3'
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
          }}
        >
          Photo slection
        </Typography>
        <Box className='photoselection-list'>
          <Box className='photo-list'>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
            <Box className='img-wrap'>
              <img
                src='../../../../assets/images/photo-email.png'
                alt='email-photo'
              />
            </Box>
          </Box>
          <Button
            variant='contained'
            size='small'
            autoFocus
            // onClick={handleClose}
            onClick={() => setIsSubmitted(true)}
            className='primary-btn btn'
            sx={{
              marginTop: { xs: 5, sm: 5, lg: 6 },
            }}
          >
            Review list
          </Button>
        </Box>
      </Box>
      <SubmittedDialogs open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default ReviewPhotos;
