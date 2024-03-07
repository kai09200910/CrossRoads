import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import {
  HiOutlineCalendar,
  HiOutlineInbox,
  HiOutlineUsers,
  HiOutlineMail,
} from 'react-icons/hi';
import { Button, Grid } from '@mui/material';
import Events from './events';
import MatchingBuyers from './matchingBuyers';
import Inquiries from './Inquiries';

const Marketing = () => {
  const [renderComponent, setRenderComponent] = useState(null);

  const handleRenderOpen = (componentName) => {
    setRenderComponent(componentName);
  };

  const handleBack = () => setRenderComponent(null);
  console.log('===renderComponent===', renderComponent);
  useEffect(() => setRenderComponent(null), []);
  return (
    <Box
      variant='div'
      component='div'
      className='marketing-tab-content-wrapper'
      sx={{
        padding: { xs: 5, xl: 4 },
      }}
    >
      {!renderComponent ? (
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Button
              variant='contained'
              size='large'
              onClick={() => handleRenderOpen('events')}
              className='secondary-btn btn tab-btn'
            >
              <HiOutlineCalendar size={34} />
              Events
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant='contained'
              size='large'
              onClick={() => handleRenderOpen('inquiries')}
              className='secondary-btn btn tab-btn'
            >
              <HiOutlineInbox size={34} />
              Inquiries
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant='contained'
              size='large'
              onClick={() => handleRenderOpen('matching-buyers')}
              className='secondary-btn btn tab-btn'
            >
              <HiOutlineUsers size={34} />
              Matching buyers
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant='contained'
              size='large'
              onClick={() => handleRenderOpen('email-campaign')}
              className='secondary-btn btn tab-btn'
            >
              <HiOutlineMail size={34} />
              Email campaign
            </Button>
          </Grid>
        </Grid>
      ) : renderComponent == 'events' ? (
        <Events handleBack={handleBack} />
      ) : renderComponent == 'inquiries' ? (
        <Inquiries handleBack={handleBack} />
      ) : renderComponent == 'matching-buyers' ? (
        <MatchingBuyers handleBack={handleBack} />
      ) : renderComponent == 'email-campaign' ? (
        <> </>
      ) : null}
    </Box>
  );
};

export default Marketing;
