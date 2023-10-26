import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import ReviewResubmissionDialog from '../common/reviewresubmissionDialog';
import SubmittedDialog from '../common/submittedDialog';

function createData(
  updates,
  namelabel,
  agent,
  date,
  listing,
  listingapproved,
  approvedby,
) {
  return {
    updates,
    namelabel,
    agent,
    date,
    listing,
    listingapproved,
    approvedby,
  };
}

const rows = [
  createData(
    'Document.pdf',
    '',
    'John Christie',
    '10/12/24',
    'NS12345',
    'Yes',
    'Chalene Curry',
  ),
  createData(
    '$4,000,000',
    'Listing price ',
    'John Christie',
    '10/12/24',
    'NS12345',
    'Yes',
    'Chalene Curry',
  ),
  createData(
    'Document.pdf',
    '',
    'John Christie',
    '10/12/24',
    'NS12345',
    'Yes',
    'Chalene Curry',
  ),
  createData(
    '$4,000,000',
    'Listing price ',
    'John Christie',
    '10/12/24',
    'NS12345',
    'Yes',
    'Chalene Curry',
  ),
  createData(
    'Document.pdf',
    '',
    'John Christie',
    '10/12/24',
    'NS12345',
    'No',
    '',
  ),
  createData(
    '$4,000,000',
    'Listing price ',
    'John Christie',
    '10/12/24',
    'NS12345',
    'Yes',
    'Chalene Curry',
  ),
  createData(
    'Document.pdf',
    '',
    'John Christie',
    '10/12/24',
    'NS12345',
    'No',
    '',
  ),
  createData(
    '$4,000,000',
    'Listing price ',
    'John Christie',
    '10/12/24',
    'NS12345',
    'Yes',
    'Chalene Curry',
  ),
];

const Test1 = () => {
  const [isEditClicked, setIsEditClicked] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isdisapproved, setIsDisapproved] = useState(false);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  const handleClose = () => {
    setIsSubmitted(false);
  };

  const handleFeedbackSubmitClose = () => setIsFeedbackSubmitted(false);
  const handleFeedbackSubmitOpen = () => {
    setIsSubmitted(false);
    setIsFeedbackSubmitted(true);
  };
  return (
    <>
      <Box className='work-list-table'>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper work-list-table'
        >
          <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Updates</TableCell>
                  <TableCell align='left'>Agent</TableCell>
                  <TableCell align='left'>Date</TableCell>
                  <TableCell align='left'>Listing #</TableCell>
                  <TableCell align='left'>Listing approved</TableCell>
                  <TableCell align='left'>Approved by</TableCell>
                </TableRow>
              </TableHead>
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
                    >
                      <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='flex-start'
                        spacing={2}
                      >
                        <Typography variant='body1' component='p'>
                          <Link
                            className='resubmition-btn'
                            onClick={() => setIsSubmitted(true)}
                          >
                            {' '}
                            {row.updates}{' '}
                          </Link>
                        </Typography>
                        <Typography variant='span' component='span'>
                          {row.namelabel}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography variant='body1' component='p'>
                        {row.agent}
                      </Typography>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography variant='body1' component='p'>
                        {row.date}
                      </Typography>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography
                        variant='body1'
                        component='p'
                        className='listing-number'
                      >
                        {row.listing}
                      </Typography>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography variant='body1' component='p'>
                        {row.listingapproved}
                      </Typography>
                    </TableCell>
                    <TableCell align='left'>
                      <Typography variant='body1' component='p'>
                        {row.approvedby}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <ReviewResubmissionDialog
        open={isSubmitted}
        handleClose={handleClose}
        isdisapproved={isdisapproved}
        setIsDisapproved={setIsDisapproved}
        handleSubmitOpen={handleFeedbackSubmitOpen}
      />
      <SubmittedDialog
        open={isFeedbackSubmitted}
        handleClose={handleFeedbackSubmitClose}
      />
    </>
  );
};

export default Test1;
