import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SubmittedDialogs from '../submittedDialog';
import { RiCheckboxBlankCircleFill, RiDeleteBinLine } from 'react-icons/ri';
import ConfirmationDialog from '../../../common/confirmationDialog';

function createData(name, click, email, phone, remove) {
  return { name, click, email, phone, remove };
}

const rows = [
  createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
];

const EditList = ({ setIsList }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const handleDeleteOpen = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteClose = () => {
    setIsDeleteDialogOpen(false);
  };

  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' to='/campaigns'>
      Email Selection
    </Link>,
    <Link
      underline='hover'
      key='1'
      color='inherit'
      onClick={() => setIsList(false)}
    >
      Photo Selection
    </Link>,
    <Typography key='3' color='text.primary'>
      Edit list
    </Typography>,
  ];

  return (
    <>
      <Paper mt={2}>
        <Container>
          <Box
            sx={{
              padding: { xs: 5, xl: 5 },
              width: '100%',
            }}
            className=''
          >
            <Box
              variant='div'
              component='div'
              sx={{
                paddingBottom: { xs: 4, xl: 4 },
              }}
              className='breadcrumb-wrap'
            >
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize='small' />}
                aria-label='breadcrumb'
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Box>
            <Box
              sx={{
                paddingTop: { xs: 6, xl: 6 },
              }}
            >
              <Typography
                variant='h4'
                component='h4'
                sx={{
                  paddingBottom: { xs: 4, xl: 4 },
                }}
              >
                Campaign Stats
              </Typography>
              <Box
                sx={{ width: '100%', overflow: 'hidden' }}
                className='table-wrapper'
              >
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align='left'>Clicks</TableCell>
                        <TableCell align='left'>Email</TableCell>
                        <TableCell align='left'>Phone</TableCell>
                        <TableCell align='center'>Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component='th' scope='row'>
                            {row.name}
                          </TableCell>
                          <TableCell align='left'>
                            <RiCheckboxBlankCircleFill
                              size={7}
                              className='green'
                            />
                            <Typography
                              variant='body1'
                              component='span'
                              sx={{ marginLeft: 1 }}
                            >
                              {row.click}
                            </Typography>
                          </TableCell>
                          <TableCell align='left'>{row.email}</TableCell>
                          <TableCell align='left'>{row.phone}</TableCell>
                          <TableCell align='center'>
                            {' '}
                            <Button
                              variant='outlined'
                              size='small'
                              className='icon-small-btn'
                              onClick={handleDeleteOpen}
                            >
                              <RiDeleteBinLine size={20} />
                            </Button>{' '}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
                sx={{
                  paddingTop: { xs: 6, xl: 6 },
                }}
              >
                <Button
                  variant='contained'
                  size='large'
                  onClick={() => setIsSubmitted(true)}
                  className='primary-btn btn'
                >
                  Send campaign
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Paper>
      <SubmittedDialogs open={isSubmitted} handleClose={handleClose} />

      <ConfirmationDialog
        open={isDeleteDialogOpen}
        handleClose={handleDeleteClose}
      />
    </>
  );
};

export default EditList;
