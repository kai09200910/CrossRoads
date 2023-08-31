import React, { useState } from 'react';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Campaigns = () => {
  const Row = () => {
    const [isExpand, setIsExpand] = useState(false);
    const [isCompanignStatsOpen, SetIsCompanignStatsOpen] = useState(false);
    return (
      <>
        {' '}
        <Stack
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={2}
          sx={{
            paddingBottom: { xs: 2, xl: 3 },
            marginBottom: 7,
          }}
          className=''
          component={Paper}
        >
          {!isExpand ? (
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              spacing={2}
              className='compact-data'
              sx={{ width: '100%' }}
            >
              <>
                <Stack
                  direction='column'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  spacing={2}
                >
                  <Typography variant='h4' component='h4'>
                    New Listing - Tropical Paradise by the Beach with Ocean View
                  </Typography>
                  <Typography variant='body1' component='span'>
                    Price
                  </Typography>
                  <Chip label='Active' className='green' />
                </Stack>
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  spacing={2}
                  className='detail'
                ></Stack>
                <Button
                  variant='contained'
                  size='large'
                  className='primary-btn btn'
                  onClick={() => setIsExpand(true)}
                >
                  View
                </Button>
              </>
            </Stack>
          ) : (
            <Box className='expand-data'>
              <Button
                variant='text'
                onClick={() => {
                  setIsExpand(false);
                  SetIsCompanignStatsOpen(false);
                }}
              >
                Back
              </Button>
              Detail view with 4 cards
              <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
                spacing={2}
                sx={{
                  padding: { xs: 3, sm: 6, xl: 6 },
                }}
              >
                <Button
                  variant='contained'
                  size='small'
                  autoFocus
                  onClick={() => SetIsCompanignStatsOpen(true)}
                  className='primary-btn btn'
                >
                  View campaign
                </Button>
                <Button
                  variant='outlined'
                  size='small'
                  // onClick={handleClose}
                  className='outline-btn btn'
                >
                  View email
                </Button>
              </Stack>
            </Box>
          )}
        </Stack>
        {isCompanignStatsOpen ? (
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={2}
            sx={{
              paddingBottom: { xs: 2, xl: 3 },
              marginBottom: 7,
            }}
            className=''
            component={Paper}
          >
            <Typography variant='h4' component='h4'>
              Campaign Stats
            </Typography>
            Display Table here
          </Stack>
        ) : null}
      </>
    );
  };

  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/campaigns/create');
  };

  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography
          variant='h3'
          component='h3'
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
          }}
        >
          Listing Campaigns
        </Typography>
        <Button
          variant='outlined'
          size='small'
          className='edit-btn'
          onClick={navigateToCreate}
        >
          +New campaign
        </Button>
      </Stack>

      <Box sx={{ my: 2 }}>
        <Box
          sx={{
            padding: { xs: 5, xl: 5 },
          }}
          className='campaign-list'
        >
          <Row />
          <Row />
          <Row />
          <Row />
        </Box>
      </Box>
    </>
  );
};

export default Campaigns;
