import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
// import UploadModern from '../../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern';
// import FileRow from '../../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow';
import { useDropzone } from 'react-dropzone';
import FileRow from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow';
import AppList from '@crema/components/AppList';
import UploadModern from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern';

const ResubmitdocumentDialog = ({ open, handleClose }) => {

  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);


  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper resubmit-document-dialog'
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          Resubmit Documents
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box variant='Box' component='Box' className='error-value'>
                <Typography variant='body1' component='span' className=''>
                  KYC Documents
                </Typography>
                <Typography gutterBottom variant='p' component='p'>
                  Name
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box variant='Box' component='Box' className='error-value'>
                <Typography variant='body1' component='span' className=''>
                  120kb
                </Typography>
                <Typography gutterBottom variant='p' component='p'>
                  Size
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box variant='div' component='div' className='upload-pending-document-area'>
                <Box sx={{ position: 'relative' }} className='custome-dropzone'>
                  <UploadModern
                    uploadText='Re-upload  corrected document here '
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
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions align='center' className='modal-dailog-footer'>
          <Button
            variant='contained'
            size='large'
            autoFocus
            onClick={handleClose}
            className='primary-btn btn'
            sx={{ marginTop: 2 }}
          >
            Send for approval
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ResubmitdocumentDialog;
