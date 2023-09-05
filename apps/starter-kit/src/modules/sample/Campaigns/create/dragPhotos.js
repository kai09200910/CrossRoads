import React, { useMemo, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import UploadModern from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern';
import FileRow from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow';
import AppList from '@crema/components/AppList';
import { useDropzone } from 'react-dropzone';

const DragPhotos = () => {
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  return (
    <Box
      sx={{
        padding: { xs: 5, xl: 5 },
      }}
    >
      <Typography
        variant='h4'
        component='h4'
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

        {/* <Button
          variant='contained'
          size='small'
          autoFocus
          onClick={() => setPhotoStep('review')}
          className='primary-btn btn'
          sx={{
            marginTop: { xs: 5, sm: 5, lg: 6 },
          }}
        >
          Select
        </Button> */}
      </Box>
    </Box>
  );
};

export default DragPhotos;
