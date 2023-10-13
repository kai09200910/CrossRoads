import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import ReviewResubmissionDialog from '../common/reviewresubmissionDialog';
import SubmittedDialog from '../common/submittedDialog';

function createData(listing, agent, date, status) {
  return {
    listing,
    agent,
    date,
    status,
  };
}

const rows = [
  createData('NS12345', 'John Christie', '10/12/24', 'New '),
  createData('NS12345', 'John Christie', '10/12/24', 'New '),
  createData('NS12345', 'John Christie', '10/12/24', 'New '),
  createData('NS12345', 'John Christie', '10/12/24', 'In Progress '),
  createData('NS12345', 'John Christie', '10/12/24', 'In Progress '),
  createData('NS12345', 'John Christie', '10/12/24', 'New '),
  createData('NS12345', 'John Christie', '10/12/24', 'New '),
];

const NewListing = () => {
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
          className='table-wrapper work-list-table '
        >
          <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left' style={{ width: '%' }}>
                    Listing #
                  </TableCell>
                  <TableCell align='left' style={{ width: '%' }}>
                    Agent
                  </TableCell>
                  <TableCell align='left' style={{ width: '%' }}>
                    Date
                  </TableCell>
                  <TableCell align='left' style={{ width: '%' }}>
                    Status
                  </TableCell>
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
                          <Link className='resubmition-btn' to='/dashboard'>
                            {' '}
                            {row.listing}
                          </Link>
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
                      <Typography variant='body1' component='p' className=''>
                        {row.status}
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

export default NewListing;
