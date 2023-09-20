import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { RiArrowDownSLine } from 'react-icons/ri';

import SingleFamilyIcon from '../../../../../assets/icon/property-overview/single-family.svg';
import BedroomIcon from '../../../../../assets/icon/property-overview/Bedroom.svg';
import BathroomIcon from '../../../../../assets/icon/property-overview/bathroom.svg';
import BuiltYearIcon from '../../../../../assets/icon/property-overview/built-year.svg';
import AreaIcon from '../../../../../assets/icon/property-overview/area.svg';
import AirconditionIcon from '../../../../../assets/icon/property-overview/aircondition.svg';
import StoriesIcon from '../../../../../assets/icon/property-overview/storie.svg';

const Overview = () => {
  return (
    <Box
      variant='div'
      component='div'
      sx={{
        padding: { xs: 5, xl: 4 },
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <Typography
            variant='h3'
            component='h3'
            sx={{
              paddingBottom: { xs: 4, xl: 4 },
            }}
          >
            Property Description
          </Typography>
          <Typography
            variant='p'
            component='p'
            sx={{
              paddingBottom: { xs: 4, xl: 2 },
            }}
          >
            Sea Breeze is naturally possessed of a light, airy and refreshing
            flow reminiscent of the tropical cocktail after which it is so aptly
            named. Built in the mid 1980s this well-maintained home boasts five
            bedrooms, four bathrooms and two half bathrooms.
          </Typography>
          <Typography
            variant='p'
            component='p'
            sx={{
              paddingBottom: { xs: 4, xl: 2 },
            }}
          >
            With a Spanish tile roof, this home encompasses 5,743 square feet
            and is situated on a 0.61 acre lot nestled within the desirable
            community of Lyford Cay. This well located property is a short walk
            or bike ride from The Lyford Cay Club and Lyford Cay School.
          </Typography>
          <Typography
            variant='p'
            component='p'
            sx={{
              paddingBottom: { xs: 4, xl: 2 },
            }}
          >
            Upon arrival one walks up the terracotta tiled pathway to the front
            entrance, flanked by light capturing oval windows and ionic
            columns....
          </Typography>
          <Button
            size='small'
            className='link-btn'
            sx={{
              paddingTop: { xs: 2, xl: 3 },
            }}
          >
            Continue reading <RiArrowDownSLine />{' '}
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <List className='property-feature'>
            <ListItem disablePadding>
              <ListItemIcon>
                {' '}
                <img src={SingleFamilyIcon} alt='Icon' />
              </ListItemIcon>
              <ListItemText primary='Single Family Residence ' />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                {' '}
                <img src={BedroomIcon} alt='Icon' />
              </ListItemIcon>
              <ListItemText primary='10 Bedrooms ' />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                {' '}
                <img src={BathroomIcon} alt='Icon' />
              </ListItemIcon>
              <ListItemText primary='12 Bathrooms / 2 Partial' />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                {' '}
                <img src={BuiltYearIcon} alt='Icon' />
              </ListItemIcon>
              <ListItemText primary='Built in 2001' />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                {' '}
                <img src={AreaIcon} alt='Icon' />
              </ListItemIcon>
              <ListItemText primary='1.35 acres / 5,000 Sq. Ft.  ' />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                {' '}
                <img src={AirconditionIcon} alt='Icon' />
              </ListItemIcon>
              <ListItemText primary='Central' />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                {' '}
                <img src={StoriesIcon} alt='Icon' />
              </ListItemIcon>
              <ListItemText primary='2 Stories' />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box variant='div' component='div'>
            <label>
              New note
              <Typography
                variant='body1'
                component='span'
                className='optional-label'
              >
                140/140 remaining
              </Typography>
            </label>
            <TextField
              fullWidth
              id='outlined-basic'
              label=''
              variant='outlined'
              placeholder='Enter descriptive words  '
              multiline
              rows={4}
              maxRows={4}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            sx={{
              paddingTop: { xs: 2, xl: 3 },
            }}
          >
            <Button
              variant='contained'
              size='large'
              className='primary-btn btn'
            >
              +Add
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
