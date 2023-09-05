import React, { useMemo, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';

const PreviewPhoto = ({ setPhotoStep }) => {
  return (
    <>
      <Paper>
        <Box
          sx={{
            padding: { xs: 5, xl: 5 },
          }}
          className=''
        >
          <Typography
            variant='h4'
            component='h4'
            sx={{
              paddingBottom: { xs: 4, xl: 4 },
            }}
          >
            Preview
          </Typography>
          <Box className='email-preview-area'>
            <img
              src='../../../../assets/images/Email-preview.png'
              alt='template-thumbnail '
            />
            <Button
              variant='contained'
              size='small'
              autoFocus
              className='primary-btn btn'
              onClick={() => setPhotoStep('review')}
              sx={{
                marginTop: { xs: 5, sm: 5, lg: 6 },
              }}
            >
              Select
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default PreviewPhoto;
