import React, { useEffect, useState } from 'react';
import { Paper, Box, Button, Grid, Stack, Typography } from '@mui/material';
import '../campaigns.scss';
import UploadModern from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern/index';
import { useDropzone } from 'react-dropzone';
import AppList from '@crema/components/AppList';
import FileRow from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow/index';
import ReviewPhotos from './reviewPhotos';
import EmailSelection from './emailSelection';
import DragPhotos from './dragPhotos';
import { PhotoSizeSelectLargeSharp } from '@mui/icons-material';
import PreviewPhoto from './PreviewPhoto';
import NewComp from './photoSelection';

const CreateCampaign = () => {
  // const StyledDropzone = () => {
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isPhotoSelection, setIsPhotoSelection] = useState(false);
  const [photoStep, setPhotoStep] = useState('drag');
  useEffect(() => {
    setUploadedFiles(dropzone.acceptedFiles);
  }, [dropzone.acceptedFiles]);

  const onDeleteUploadFile = (file) => {
    dropzone.acceptedFiles.splice(dropzone.acceptedFiles.indexOf(file), 1);
    setUploadedFiles([...dropzone.acceptedFiles]);
  };

  const renderListComponent = (label) => {
    switch (label) {
      case 'review':
        return <NewComp />;
      default:
        return <EmailSelection setPhotoStep={setPhotoStep} />;
      // return <PhotoSelection />;
    }
  };
  const renderPhotoComponent = (label) => {
    switch (label) {
      case 'review':
        return <ReviewPhotos />;

      case 'preview':
        return <PreviewPhoto setPhotoStep={setPhotoStep} />;

      default:
        return <DragPhotos />;
    }
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
          className='edit-btn secondary-btn-small'
        >
          +New campaign
        </Button>
      </Stack>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={12} md={8}>
          <Paper>{renderListComponent(photoStep)}</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>{renderPhotoComponent(photoStep)}</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateCampaign;
