import React, { useState } from 'react';
import { Box, Paper, Typography, Breadcrumbs } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ResubmitdocumentDialog from './dailogs/resubmitdocumentDialog';
import { Link } from 'react-router-dom';

function createData(name, submitted) {
  return { name, submitted };
}

const rows = [
  createData('KYC Documents ', false),
  createData('Listing Agreement  ', true),
];

const PendingFields = () => {

  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      onClick={() => handleBack(null)}
    >
      Home
    </Link>,
    <Typography key='3' color='text.primary'>
      Items pending approval
    </Typography>,
  ];


  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <Paper
        sx={{
          marginTop: { xs: 5, xl: 5 },
        }}
      >
        <Box
          sx={{
            padding: { xs: 7, xl: 7 },
          }}
          className='pending-fields-wrapper approval-tab-content'
        >
          <Typography
            variant='h4'
            component='h4'
            sx={{
              paddingBottom: { xs: 3, xl: 3 },
            }}
          >
            Pending Fields
          </Typography>

          <Box
            variant='div'
            component='div'
            sx={{
              paddingBottom: { xs: 4, xl: 5 },
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
            sx={{ width: '100%', overflow: 'hidden' }}
            className='table-wrapper'
          >
            <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left' style={{ width: '85%' }}>
                      Field
                    </TableCell>
                    <TableCell
                      align='Right'
                      style={{ width: '15%' }}
                    ></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                      onClick={() => setIsSubmitted(true)}
                    >
                      <TableCell component='th' scope='row'>
                        <Link to=''>{row.name}</Link>
                      </TableCell>
                      <TableCell align='left'>
                        <Typography className='error'>
                          NEEDS RESUBMISSION
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <ResubmitdocumentDialog open={isSubmitted} handleClose={handleClose} />
      </Paper>
    </>
  );
};

export default PendingFields;
