import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UploadModern from '../../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern';
import FileRow from '../../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow';
import AppList from '@crema/components/AppList';
import { useDropzone } from 'react-dropzone';
import { RiDeleteBinLine } from 'react-icons/ri';

const DisapprovalDialog = ({ open, handleClose }) => {
  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper disapproval-feedback-dailog '
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          Disapproval Feedback
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              <Box variant='div' component='div' className='error-value'>
                <Typography gutterBottom variant='p' component='p'>
                  User research & competetive anaysis
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Name
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box variant='div' component='div' className='error-value'>
                <Typography gutterBottom variant='p' component='p'>
                  120kb
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Size
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box variant='div' component='div'>
                <label>Reason for disapproval</label>
                <TextField
                  fullWidth
                  id='outlined-basic'
                  label=''
                  variant='outlined'
                  placeholder='Documents are missing signature from selling party'
                  multiline
                  rows={4}
                  maxRows={4}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ position: 'relative' }} className='custome-dropzone'>
                <UploadModern
                  uploadText='Re-upload  corrected document if applicable '
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
            <Grid item xs={12} md={12}>
              <Box sx={{ position: 'relative' }} className='document-list'>
                <TableContainer className='table-wrapper'>
                  <Table sx={{ minWidth: 400 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left' style={{ width: '65%' }}>
                          Name
                        </TableCell>
                        <TableCell align='left' style={{ width: '20%' }}>
                          Size
                        </TableCell>
                        <TableCell
                          align='left'
                          style={{ width: '15%' }}
                        ></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          component='th'
                          scope='row'
                          className='field-name'
                        >
                          <Typography variant='body1' component='p'>
                            Sales agreement
                          </Typography>
                        </TableCell>
                        <TableCell align='left'>2.6 kb</TableCell>
                        <TableCell align='left'>
                          <IconButton aria-label='edit' disableRipple>
                            <RiDeleteBinLine size={20} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='modal-dailog-footer'>
          <Button
            variant='contained'
            size='large'
            autoFocus
            onClick={handleClose}
            className='primary-btn btn'
            sx={{ marginTop: 3 }}
          >
            Send to agent
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DisapprovalDialog;
