import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as Logo } from '../../../assets/icon/comingsoon.svg';

function createData(name, match, email) {
  return { name, match, email };
}

const rows = [createData('John Smith', '95%', 'johnsmith@email.com')];

const ComingsoonComponent = () => {
  return (
    <Box
      sx={{ width: '100%', overflow: 'hidden' }}
      className='coming-soon-img-wrap'
    >
      <Box
        sx={{
          mb: { xs: 4, xl: 8 },
          width: '100%',
          maxWidth: { xs: 200, sm: 300, xl: 706 },
          '& svg': {
            width: '100%',
            maxWidth: 400,
          },
        }}
      >
        <Logo />
      </Box>
    </Box>
  );
};

export default ComingsoonComponent;
