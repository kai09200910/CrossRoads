import React, { useState } from 'react';
import { Paper, Button, Grid, Stack, Typography, Box } from '@mui/material';
import '../campaigns.scss';
import ReviewPhotos from './photo/review';
import DragPhoto from './photo/drag';
import EditList from './editList';
import { RiAddFill } from 'react-icons/ri';

const CreateCampaign = () => {
  const [isEditList, setIsList] = useState(false);

  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{
          paddingBottom: { xs: 4, xl: 4 },
          paddingTop: { xs: 5, xl: 5 },
        }}
        className='main-title'
      >
        <Typography variant='h3' component='h3'>
          Listing Campaigns
        </Typography>
        <Button
          variant='outlined'
          size='small'
          className='edit-btn secondary-btn-small'
          startIcon={<RiAddFill size={18} />}
        >
          New campaign
        </Button>
      </Stack>
      {isEditList ? (
        <EditList setIsList={setIsList} />
      ) : (
        <Box className='scrollable-content'>
          <Grid container spacing={5} mt={2}>
            <Grid item xs={12} md={8}>
              <Paper>
                <DragPhoto />
                {/* {renderListComponent(photoStep)} */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <ReviewPhotos setIsList={setIsList} />
                {/* {renderPhotoComponent(photoStep)} */}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default CreateCampaign;
