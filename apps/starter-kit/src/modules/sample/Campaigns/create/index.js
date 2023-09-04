import React, { useEffect, useState } from 'react';
import { Paper, Box, Button, Grid, Stack, Typography } from '@mui/material';
import '../campaigns.scss';
import UploadModern from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern/index';
import { useDropzone } from 'react-dropzone';
import AppList from '@crema/components/AppList';
import FileRow from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow/index';

const CreateCampaign = () => {
  // const StyledDropzone = () => {
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    setUploadedFiles(dropzone.acceptedFiles);
  }, [dropzone.acceptedFiles]);

  const onDeleteUploadFile = (file) => {
    dropzone.acceptedFiles.splice(dropzone.acceptedFiles.indexOf(file), 1);
    setUploadedFiles([...dropzone.acceptedFiles]);
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
          <Paper>
            <Box
              sx={{
                padding: { xs: 5, xl: 5 },
              }}
              className=''
            >
              <Typography variant='h4' component='h4'>
                Email Selection
              </Typography>
              <Box
                variant='div'
                component='div'
                className='email-campaign-list-wrapper'
              >
                <Grid
                  container
                  spacing={8}
                  sx={{
                    padding: { xs: 4, xl: 4 },
                  }}
                  mt={0}
                >
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className='email-card'>
                      <Grid item xs={12} md={6}>
                        <img
                          src='../../../../assets/images/Email-thumbnail.png'
                          alt='template-thumbnail '
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack
                          direction='column'
                          justifyContent='space-between'
                          alignItems='flex-start'
                          spacing={2}
                          sx={{ height: '100%' }}
                        >
                          <Box
                            variant='div'
                            component='div'
                            className='email-campaign-name'
                          >
                            <Typography variant='p' component='p'>
                              New Listing (2 images)
                            </Typography>
                            <Typography variant='body1' component='span'>
                              1 cover, 1 thumb images
                            </Typography>
                          </Box>
                          <Stack
                            direction='row'
                            justifyContent='flex-end'
                            alignItems='center'
                            spacing={2}
                          >
                            <Button
                              variant='outlined'
                              size='small'
                              // onClick={handleClose}
                              className='outline-btn small-btn'
                            >
                              Preview
                            </Button>
                            <Button
                              variant='contained'
                              size='small'
                              autoFocus
                              // onClick={handleClose}
                              className='primary-btn small-btn'
                            >
                              Select
                            </Button>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className='email-card'>
                      <Grid item xs={12} md={6}>
                        <img
                          src='../../../../assets/images/Email-thumbnail.png'
                          alt='template-thumbnail '
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack
                          direction='column'
                          justifyContent='space-between'
                          alignItems='flex-start'
                          spacing={2}
                          sx={{ height: '100%' }}
                        >
                          <Box
                            variant='div'
                            component='div'
                            className='email-campaign-name'
                          >
                            <Typography variant='p' component='p'>
                              New Listing (1 images)
                            </Typography>
                            <Typography variant='body1' component='span'>
                              1 cover, 1 thumb images
                            </Typography>
                          </Box>
                          <Stack
                            direction='row'
                            justifyContent='flex-end'
                            alignItems='center'
                            spacing={2}
                          >
                            <Button
                              variant='outlined'
                              size='small'
                              // onClick={handleClose}
                              className='outline-btn small-btn'
                            >
                              Preview
                            </Button>
                            <Button
                              variant='contained'
                              size='small'
                              autoFocus
                              // onClick={handleClose}
                              className='primary-btn small-btn'
                            >
                              Select
                            </Button>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className='email-card'>
                      <Grid item xs={12} md={6}>
                        <img
                          src='../../../../assets/images/Email-thumbnail.png'
                          alt='template-thumbnail '
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack
                          direction='column'
                          justifyContent='space-between'
                          alignItems='flex-start'
                          spacing={2}
                          sx={{ height: '100%' }}
                        >
                          <Box
                            variant='div'
                            component='div'
                            className='email-campaign-name'
                          >
                            <Typography variant='p' component='p'>
                              New Listing (2 images)
                            </Typography>
                            <Typography variant='body1' component='span'>
                              1 cover, 1 thumb images
                            </Typography>
                          </Box>
                          <Stack
                            direction='row'
                            justifyContent='flex-end'
                            alignItems='center'
                            spacing={2}
                          >
                            <Button
                              variant='outlined'
                              size='small'
                              // onClick={handleClose}
                              className='outline-btn small-btn'
                            >
                              Preview
                            </Button>
                            <Button
                              variant='contained'
                              size='small'
                              autoFocus
                              // onClick={handleClose}
                              className='primary-btn small-btn'
                            >
                              Select
                            </Button>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className='email-card'>
                      <Grid item xs={12} md={6}>
                        <img
                          src='../../../../assets/images/Email-thumbnail.png'
                          alt='template-thumbnail '
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack
                          direction='column'
                          justifyContent='space-between'
                          alignItems='flex-start'
                          spacing={2}
                          sx={{ height: '100%' }}
                        >
                          <Box
                            variant='div'
                            component='div'
                            className='email-campaign-name'
                          >
                            <Typography variant='p' component='p'>
                              New Listing (2 images)
                            </Typography>
                            <Typography variant='body1' component='span'>
                              1 cover, 1 thumb images
                            </Typography>
                          </Box>
                          <Stack
                            direction='row'
                            justifyContent='flex-end'
                            alignItems='center'
                            spacing={2}
                          >
                            <Button
                              variant='outlined'
                              size='small'
                              // onClick={handleClose}
                              className='outline-btn small-btn'
                            >
                              Preview
                            </Button>
                            <Button
                              variant='contained'
                              size='small'
                              autoFocus
                              // onClick={handleClose}
                              className='primary-btn small-btn'
                            >
                              Select
                            </Button>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Box
              sx={{
                padding: { xs: 5, xl: 5 },
              }}
            >
              <Typography
                variant='h3'
                component='h3'
                sx={{
                  paddingBottom: { xs: 4, xl: 4 },
                }}
              >
                Preview
              </Typography>
              <Box className='email-preview-area'>
                <Box sx={{ position: 'relative' }} className='custome-dropzone'>
                  <UploadModern
                    uploadText='Drag and drop photos or click to upload '
                    dropzone={dropzone}
                  />
                  <aside>
                    <AppList
                      data={uploadedFiles}
                      renderRow={(file, index) => (
                        <FileRow
                          key={index + file.path}
                          file={file}
                          onDeleteUploadFile={onDeleteUploadFile}
                        />
                      )}
                    />
                  </aside>
                </Box>

                <Button
                  variant='contained'
                  size='small'
                  autoFocus
                  // onClick={handleClose}
                  className='primary-btn btn'
                  sx={{
                    marginTop: { xs: 5, sm: 5, lg: 6 },
                    width: '100%',
                  }}
                >
                  Select
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateCampaign;
