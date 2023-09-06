import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import SubmittedDialogs from '../submittedDialog';

function createData(name, click, email, phone, remove) {
  return { name, click, email, phone, remove };
}

const rows = [
  createData('John Smith   ', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith   ', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith   ', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith   ', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith   ', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith   ', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
  createData('John Smith   ', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
];

const EditList = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    console.log('test123');
    setIsSubmitted(false);
  };

  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      href='/'
      onClick={handleClick}
    >
      Email Selection
    </Link>,
    <Link
      underline='hover'
      key='1'
      color='inherit'
      href='/'
      onClick={handleClick}
    >
      Photo Selection
    </Link>,
    <Typography key='3' color='text.primary'>
      Edit list
    </Typography>,
  ];

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <>
      <Paper>
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
              <TableContainer component={Paper}>
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
                        <TableCell align='left'>{row.click}</TableCell>
                        <TableCell align='left'>{row.email}</TableCell>
                        <TableCell align='left'>{row.phone}</TableCell>
                        <TableCell align='center'>
                          {' '}
                          <Button
                            variant='outlined'
                            size='small'
                            className='edit-btn secondary-btn-small'
                          >
                            View
                          </Button>{' '}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
                  onClick={handleClose}
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
    </>
  );
};

export default EditList;
