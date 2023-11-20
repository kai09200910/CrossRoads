import React, { useState } from 'react';
import { Box, Stack, Button, Typography, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RiAddLine, RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import AppList from '@crema/components/AppList';
import { useDropzone } from 'react-dropzone';
import UploadModern from '../../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern';
import FileRow from '../../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow';
function createData(name, size, action) {
  return {
    name,
    size,
    action,
  };
}

const rows = [
  createData('KYC Document 1', '2.6kb', 'D'),
  createData('KYC Document 2', '2.8kb', 'D'),
  createData('KYC Document 3', '2.4kb', 'D'),
];

const DocumentsTab = () => {
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  return (
    <>
      <Box className='notes-tab tab-content-wrapper document-tab'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
          className='main-title'
        >
          <Typography variant='h3' component='h3'>
            Documents
          </Typography>

          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='flex-start'
            spacing={1}
            className='add-media-btn-wrapper add-note-btn-wrapper'
          >
            <Typography
              variant='body1'
              component='span'
              className='primary-btn-small secondary-btn'
            >
              <RiAddLine size={18} />
              Add
              <TextField type='file' className='upload'></TextField>
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper note-list-table document-list-table '
        >
          <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left' style={{ width: '73%' }}>
                    Name
                  </TableCell>
                  <TableCell align='left' style={{ width: '20%' }}>
                    Size
                  </TableCell>
                  <TableCell align='left' style={{ width: '7%' }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              {rows.length > 0 ? (
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      className={
                        row?.approval === false ? 'resubmitted-approval' : ''
                      }
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell
                        component='th'
                        scope='row'
                        className='field-name'
                        align='left'
                      >
                        <Typography variant='body1' component='p'>
                          {' '}
                          <Link href='#'>{row.name}</Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          {row.size}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography variant='body1' component='p'>
                          <Link
                            className='resubmition-btnq'
                            // onClick={() => setIsSubmitted(true)}
                          >
                            <RiDeleteBinLine size={22} />
                          </Link>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <Box
                  variant='div'
                  component='div'
                  className='table-empty-state'
                >
                  <Box
                    sx={{ position: 'relative' }}
                    className='custome-dropzone'
                  >
                    <UploadModern
                      uploadText=' Click to upload or drag and drop documents here'
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
              )}
            </Table>
          </TableContainer>
        </Box>
        <Stack
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          spacing={2}
          sx={{
            marginTop: { xs: 5, sm: 5, xl: 5 },
          }}
        >
          <Button
            variant='contained'
            size='large'
            autoFocus
            className='primary-btn btn'
          >
            Done
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default DocumentsTab;
