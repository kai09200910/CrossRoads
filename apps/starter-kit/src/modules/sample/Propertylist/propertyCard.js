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
          <Grid item xs={12} sm={5} md={5}>
            <Box variant='div' component='div' className='property-img'>
              <Box component='img' src={PropertyImg} alt='property-image'></Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={7}>
            <Box
              sx={{
                padding: { padding: '20px 20px 20px 8px' },
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
                sx={{
                  paddingBottom: { xs: 4, xl: 5 },
                }}
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
              </Stack>
              <Stack spacing={2} className='address'>
                <Typography variant='p' component='p'>
                  150 Treasure Cove, Nassau, Bahamas
                </Typography>

                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  sx={{
                    paddingTop: { xs: 3, xl: 3 },
                  }}
                  className='mls-info'
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
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PropertyCard;
