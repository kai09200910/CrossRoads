import React, { useState } from 'react';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import AppList from '@crema/components/AppList';
import { useDropzone } from 'react-dropzone';
import UploadModern from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern';
import FileRow from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow';

const EmptyTable = () => {
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <>
      <Box
        sx={{ width: '100%', overflow: 'hidden' }}
        className='table-wrapper scrollable-table table-empty-state'
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Order</TableCell>
                <TableCell align='left'>Name</TableCell>
                <TableCell align='left'>Size</TableCell>
                <TableCell align='left'>Date </TableCell>
                <TableCell align='left'>Display on site </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default EmptyTable;
