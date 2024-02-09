import React from 'react';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import PropertyImg from '../../../assets/images/property-card.png';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

const PropertyCard = () => {
  return (
    <Paper className='property-card-wrap'>
      <Box
        sx={{
          padding: { xs: 0, xl: 0 },
        }}
        className='property-card'
      >
        <Grid container spacing={0} className=''>
          <Grid item xs={12} sm={3} md={3}>
            <Box variant='div' component='div' className='property-img'>
              <Box component='img' src={PropertyImg} alt='property-image'></Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <Box
              sx={{
                padding: { padding: '16px' },
              }}
            >
              <Typography variant='h4' component='h4'>
                Tropical Paradise by the Beach
              </Typography>
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={5}
                className='property-info'
              >
                <Box variant='div' component='div' className='info-wrap'>
                  <Typography variant='p' component='p'>
                    $5,000,000
                  </Typography>
                  <Typography variant='body1' component='span'>
                    Price
                  </Typography>
                </Box>
                <Box variant='div' component='div' className='info-wrap'>
                  <Typography variant='p' component='p'>
                    NS73646
                  </Typography>
                  <Typography variant='body1' component='span'>
                    Listing number
                  </Typography>
                </Box>
                <Box variant='div' component='div' className='info-wrap'>
                  <Typography variant='p' component='p'>
                    Johnathan Smith
                  </Typography>
                  <Typography variant='body1' component='span'>
                    Owner
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction='row'
                alignItems='center'
                spacing={2}
                sx={{
                  paddingBottom: { xs: 0, xl: 0 },
                }}
                className='property-other-info'
              >
                <Typography variant='p' component='p'>
                  <RiCheckboxBlankCircleFill size={10} />
                  For Sale
                </Typography>
                <Typography variant='p' component='p'>
                  Exclusive
                </Typography>
                <Typography variant='p' component='p'>
                  MLS
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PropertyCard;
