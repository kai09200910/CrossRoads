import React, { useEffect, useState } from 'react';
import { Paper, Button, Grid, Stack, Typography } from '@mui/material';
import '../campaigns.scss';
import { useDropzone } from 'react-dropzone';
import ReviewPhotos from './photo/review';
// import EmailSelection from '../list';
// import DragPhotos from './dragPhotos';
import PreviewPhoto from './photo/preview';
import DragPhoto from './photo/drag';
import EditList from './editList';

const CreateCampaign = () => {
  const [isEditList, setIsList] = useState(false);
  // const StyledDropzone = () => {
  // const dropzone = useDropzone();
  // const [uploadedFiles, setUploadedFiles] = useState([]);
  // const [isPhotoSelection, setIsPhotoSelection] = useState(false);
  // const [photoStep, setPhotoStep] = useState('create');
  // useEffect(() => {
  //   setUploadedFiles(dropzone.acceptedFiles);
  // }, [dropzone.acceptedFiles]);

  // const onDeleteUploadFile = (file) => {
  //   dropzone.acceptedFiles.splice(dropzone.acceptedFiles.indexOf(file), 1);
  //   setUploadedFiles([...dropzone.acceptedFiles]);
  // };

  // const renderListComponent = (label) => {
  //   switch (label) {
  //     case 'create':
  //       return <DragPhoto />;
  //     default:
  //       return <EmailSelection setPhotoStep={setPhotoStep} />;
  //   }
  // };
  // const renderPhotoComponent = (label) => {
  //   switch (label) {
  //     case 'create':
  //       return <ReviewPhotos />;

  //     case 'preview':
  //       return <PreviewPhoto setPhotoStep={setPhotoStep} />;

  //     default:
  //       return <DragPhoto />;
  //   }
  // };
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
      {isEditList ? (
        <EditList />
      ) : (
        <Grid container spacing={5} mt={5}>
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
      )}
    </>
  );
};

export default CreateCampaign;
