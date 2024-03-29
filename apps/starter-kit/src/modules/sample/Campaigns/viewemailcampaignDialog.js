import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box, Grid, Button, Stack, Typography } from '@mui/material';
import FileRow from '../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow';
import UploadModern from '../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern';
import AppList from '@crema/components/AppList';
import { useDropzone } from 'react-dropzone';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import EmailTemplate from '../common/emailTemplate';

const ViewemailcampaignDialog = ({ open, handleClose }) => {
  const dropzone = useDropzone();
  const [uploadedFiles] = useState([]);
  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper campaigns-view-email-wrapper'
      >
        <DialogContent className='modal-dailog-content'>
          {/* <Box className='photo-selection-preview-area'>
            <Box className='email-template-area'>
              <Box className='email-template'>
                <Grid container spacing={5} mt={0} alignItems='center'>
                  <Grid item xs={12} md={6}>
                    {' '}
                    <img
                      src='../../../../assets/images/email-temp-logo.svg'
                      alt='template-logo'
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant='h4'
                      component='h4'
                      className='editable-text-field'
                    >
                      <EditText
                        defaultValue='Debuting the Market'
                        showEditButton
                        className='text-field'
                      />
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={5} mt={3}>
                  <Grid item xs={12} md={12}>
                    <Box
                      sx={{ position: 'relative' }}
                      className='custome-dropzone'
                    >
                      <UploadModern
                        uploadText='Drag and drop image here  '
                        dropzone={dropzone}
                      />
                      <aside className='upload-doc-info'>
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
                  </Grid>
                </Grid>
                <Grid container spacing={5} mt={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{ position: 'relative' }}
                      className='custome-dropzone'
                    >
                      <UploadModern
                        uploadText='Drag and drop image here '
                        dropzone={dropzone}
                      />
                      <aside className='upload-doc-info'>
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
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative' }} className='other-data'>
                      <Typography
                        variant='h4'
                        component='h4'
                        className='editable-text-field'
                      >
                        <EditText
                          defaultValue='Tropical Paradise on the Beach'
                          showEditButton
                          className='text-field'
                        />
                      </Typography>
                      <Typography
                        variant='h4'
                        component='h4'
                        className='editable-text-field'
                      >
                        <EditText
                          defaultValue='Offered at $5,000,000'
                          showEditButton
                          className='text-field'
                        />
                      </Typography>
                      <Typography
                        variant='h4'
                        component='h4'
                        className='editable-text-field'
                      >
                        <EditTextarea
                          defaultValue='Sea Breeze is naturally possessed of a light, airy and
                    refreshing flow reminiscent of the tropical cocktail after
                    which it is so aptly named. Built in the mid 1980s this
                    well-maintained home boasts five bedrooms.'
                          showEditButton
                          className='text-field'
                          // multiline
                          // rows={4}
                          // maxRows={4}
                        />
                      </Typography>
                      <Button
                        variant='contained'
                        size='small'
                        autoFocus
                        className='primary-btn btn'
                        sx={{
                          marginTop: { xs: 5, sm: 5, lg: 6 },
                        }}
                      >
                        View listing
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={5} mt={3}>
                  <Grid item xs={12} md={12}>
                    <Stack
                      direction='row'
                      justifyContent='flex-start'
                      alignItems='center'
                      spacing={5}
                      className='agent-info-wrap'
                      flexWrap='wrap'
                    >
                      <Box className='agent-picture'>
                        <img
                          src='../../../../assets/images/estate-agent.png'
                          alt='template-logo'
                        />
                      </Box>
                      <Box sx={{ position: 'relative' }} className='agent-info'>
                        <Typography variant='h3' component='h3'>
                          Dylan Christie
                        </Typography>
                        <Box
                          sx={{ position: 'relative' }}
                          className='other-info'
                        >
                          <Typography variant='p' component='p'>
                            Estate Agent
                          </Typography>
                          <Typography variant='p' component='p'>
                            C: 242-357-7572
                          </Typography>
                          <Typography variant='p' component='p'>
                            O: 242-434-4756
                          </Typography>
                          <Typography variant='p' component='p'>
                            dylan@HGC.com
                          </Typography>
                          <Typography
                            variant='span'
                            component='span'
                            className='link-url'
                          >
                            https://www.hgchristie.com/eng/associate/529-a-me324397/dylan-christie/sales
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box> */}
          <EmailTemplate />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ViewemailcampaignDialog;
