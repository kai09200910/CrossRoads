import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {
  Box,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Typography,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ComposemailDialog = ({ open, handleClose, handleFieldClick }) => {
  const handleFieldClickAndClose = (fieldName) => {
    handleFieldClick(fieldName);
    handleClose();
  };

  const [value, setValue] = useState('');

  // const insertImage = () => {
  //   const url = prompt('Enter the image URL:');
  //   if (url) {
  //     const editor = quillRef.current.editor; // Accessing the Quill instance
  //     editor.focus();
  //     const range = editor.getSelection();
  //     const value = prompt('Enter image description:');
  //     editor.insertEmbed(range.index, 'image', { src: url, alt: value });
  //   }
  // };

  const handleImageInsert = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.onchange = () => {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result;
          insertToEditor(base64);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const insertToEditor = (base64) => {
    const editor = quillRef.current.editor;
    const range = editor.getSelection(true);
    editor.insertEmbed(range.index, 'image', base64, 'user');
  };

  const quillRef = React.useRef();

  // const modules = {
  //   toolbar: {
  //     container: [
  //       [{ 'header': [1, 2, false] }],
  //       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  //       [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  //       ['link', 'image'], // Add 'image' to enable image insertion
  //       ['clean']
  //     ],
  //     handlers: {
  //       image: insertImage
  //     }
  //   }
  // };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: handleImageInsert,
      },
    },
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
  ];

  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        className='modal-dailog-wrapper draft-email-dailog'
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id='customized-dialog-title'
          className='modal-dailog-title'
        >
          New Email
        </DialogTitle>
        <DialogContent className='modal-dailog-content'>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
              {/* <TableContainer className='table-wrapper'>
                <Table sx={{ minWidth: 400 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='left' style={{ width: '88%' }}>
                        Name
                      </TableCell>
                      <TableCell
                        align='left'
                        style={{ width: '12%' }}
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
                          <Link
                            className='red'
                            onClick={() =>
                              handleFieldClickAndClose('Owners first name')
                            }
                          >
                            {' '}
                            Owners first name
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <IconButton
                          aria-label='edit'
                          disableRipple
                          className='go-to-btn'
                        >
                          <RiArrowRightSLine size={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
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
                          <Link
                            className='red'
                            onClick={() =>
                              handleFieldClickAndClose('Listing price')
                            }
                          >
                            {' '}
                            Listing price
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <IconButton
                          aria-label='edit'
                          disableRipple
                          className='go-to-btn'
                        >
                          <RiArrowRightSLine size={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
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
                          <Link
                            className='red'
                            onClick={() =>
                              handleFieldClickAndClose('Amenities')
                            }
                          >
                            {' '}
                            Amenities
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <IconButton
                          aria-label='edit'
                          disableRipple
                          className='go-to-btn'
                        >
                          <RiArrowRightSLine size={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
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
                          <Link
                            className='red'
                            onClick={() =>
                              handleFieldClickAndClose('Cover photo')
                            }
                          >
                            {' '}
                            Cover photo
                          </Link>
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        <IconButton
                          aria-label='edit'
                          disableRipple
                          className='go-to-btn'
                        >
                          <RiArrowRightSLine size={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer> */}

              <Box
                variant='div'
                component='div'
                sx={{
                  paddingBottom: { xs: 5, xl: 5 },
                }}
              >
                <label>Selected Category </label>
                <Typography variant='h4' component='h4'>
                  Seller
                </Typography>
              </Box>
              <ReactQuill
                theme='snow'
                value={value}
                onChange={setValue}
                modules={modules}
                formats={formats}
                ref={quillRef}
                className='editior-controll'
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='modal-dailog-footer'>
          <Grid
            container
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
          >
            <Button
              variant='contained'
              size='large'
              autoFocus
              onClick={handleClose}
              className='primary-btn btn'
            >
              Send
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ComposemailDialog;
