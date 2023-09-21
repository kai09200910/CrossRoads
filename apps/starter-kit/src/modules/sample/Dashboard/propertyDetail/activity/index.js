import React, { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { HiOutlineCalendar, HiOutlineInbox } from 'react-icons/hi';
import Events from './events';
import Inquiries from './Inquiries';

const Activity = () => {
  const [renderComponent, setRenderComponent] = useState(null);

  const handleRenderOpen = (componentName) => {
    // e.preventDefault();
    setRenderComponent(componentName);
  };

  const handleBack = () => setRenderComponent(null);
  console.log('===renderComponent===', renderComponent);
  useEffect(() => setRenderComponent(null), []);

  return (
    <>
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
                Listing history
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
                Transactions
              </Button>
            </Grid>
          </Grid>
        ) : renderComponent == 'events' ? (
          <Events handleBack={handleBack} />
        ) : renderComponent == 'inquiries' ? (
          <Inquiries handleBack={handleBack} />
        ) : renderComponent == 'email-campaign' ? (
          <> </>
        ) : null}
      </Box>
    </>
  );
};

export default Activity;
