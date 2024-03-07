import React, { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Typography,
  FormControlLabel,
  Switch,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DisapprovalDialog from './disapprovalDialog';
import { RiErrorWarningFill } from 'react-icons/ri';
import RevokeapprovalDialog from './revokeapprovalDialog';
import ListingapprovedDialog from './listingapprovedDialog';

function createData(name, size, submitted) {
  return { name, size, submitted };
}

const rows = [
  createData('KYC Documents ', '120kb', false),
  createData('Listing Agreement ', '5mb', null),
  createData('Sales agreement ', '2.6kb', true),
];

const Documents = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  const [isRevokeapprovalDialogOpen, setIsRevokeapprovalDialogOpen] =
    useState(false);
  const handleRevokeapprovalOpen = () => {
    setIsRevokeapprovalDialogOpen(true);
  };
  const handleRevokeapprovalClose = () => {
    setIsRevokeapprovalDialogOpen(false);
  };

  const [isListingapprovalDialogOpen, setIsListingapprovalDialogOpen] =
  useState(false);
const handleListingapprovalOpen = () => {
  setIsListingapprovalDialogOpen(true);
};
const handleListingapprovalClose = () => {
  setIsListingapprovalDialogOpen(false);
};

  return (
    <>
      <Box
        sx={{
          paddingTop: { xs: 0, xl: 0 },
        }}
      >
        <Typography
          variant='h4'
          component='h4'
          sx={{
            paddingBottom: { xs: 3, xl: 3 },
          }}
        >
          Documents
        </Typography>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper'
        >
          <TableContainer>
            <Table sx={{ minWidth: 500 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left' style={{ width: '48%' }}>
                    Name
                  </TableCell>
                  <TableCell align='left' style={{ width: '15%' }}>
                    Size
                  </TableCell>
                  <TableCell align='left' style={{ width: '26%' }}>
                    Approval
                  </TableCell>
                  <TableCell align='left' style={{ width: '12%' }}></TableCell>
                </TableRow>
              </TableHead>
              {rows.length > 0 ? (
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
                      <TableCell align='left'>{row.size}</TableCell>
                      <TableCell align='left'>
                        {' '}
                        <FormControlLabel
                          control={
                            <Switch
                              sx={{ m: 1 }}
                              className='ios-switch-custom small'
                              focusVisibleClassName='.Mui-focusVisible'
                              disableRipple
                              defaultChecked
                              onClick={() => setIsSubmitted(true)}
                            />
                          }
                          label=''
                        />
                      </TableCell>
                      <TableCell align='left'>
                        {row.submitted !== null ? (
                          <Typography
                            className={row.submitted ? 'success' : 'error'}
                          >
                            {row.submitted
                              ? 'RESUBMITTED'
                              : 'WAITING FOR RESUBMISSION'}
                          </Typography>
                        ) : null}
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
                  <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    spacing={1}
                    sx={{
                      paddingBottom: { xs: 2, xl: 2 },
                    }}
                    className=''
                  >
                    <RiErrorWarningFill size={25} />
                    <Typography gutterBottom variant='p' component='p'>
                      No documents submitted yet,
                    </Typography>
                    <Typography gutterBottom variant='p' component='p'>
                      all submitted items will appear here.
                    </Typography>
                  </Stack>
                </Box>
              )}
            </Table>
          </TableContainer>
        </Box>

        <Stack
          direction='row'
          justifyContent='end'
          alignItems='center'
          spacing={1}
          sx={{
            paddingTop: { xs: 5, xl: 8 },
          }}
        >
          <Button
            variant='contained'
            size='large'
            onClick={handleListingapprovalOpen}
            className='primary-btn btn'
          >
            Approve listing details 
          </Button>

          <Button
            variant='contained'
            size='large'
            onClick={handleRevokeapprovalOpen}
            className='primary-btn btn'
          >
            Revoke approval
          </Button>
        </Stack>
      </Box>
      <DisapprovalDialog open={isSubmitted} handleClose={handleClose} />

      <ListingapprovedDialog
        open={isListingapprovalDialogOpen}
        handleClose={handleListingapprovalClose}
      />

      <RevokeapprovalDialog
        open={isRevokeapprovalDialogOpen}
        handleClose={handleRevokeapprovalClose}
      />
    </>
  );
};

export default Documents;
