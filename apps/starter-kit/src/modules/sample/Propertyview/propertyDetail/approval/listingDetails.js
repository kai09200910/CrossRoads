import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Stack,
  IconButton,
  Button,
  TextField,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RiErrorWarningFill, RiPencilFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ReviewResubmissionDialog from '../../../common/reviewresubmissionDialog';
import SubmittedDialog from '../../../common/submittedDialog';

function createData(name, namelabel, approval) {
  return { name, namelabel, approval };
}

const rows = [
  createData('Co-broke', 'Listing type ', true),
  createData('John Smith', 'Owner name', true),
  createData('john@example.com', 'Owneremail', true),
  createData('123-456-7898 ', 'Owner cellphone', true),
  createData('john@example.com ', 'Owner email', true),
  createData('12/11/23 ', 'Contract start ', true),
  createData('12/12/24 ', 'Contract end ', true),

  createData('$5,000,000', 'Listing price  ', true),
  createData('HG Christie ', 'Co-broke brokerage', true),
  createData('10%', 'Total Commission', true),
  createData('50%', 'Co-broke split', true),
  createData('$500 ', 'HOA Fees', false),
  createData('Lots/acreage ', 'Property Type ', true),
  createData('USD ', 'Currency ', true),

  createData('USD', 'Currency ', true),
  createData('Vacant', 'Occupancy  ', true),
  createData('Tropical paradise at the beach ', 'Headline', true),
  createData('Beachfront home ', 'Property name ', true),
  createData('4 Dunmore Island  ', 'Street address', true),
  createData('Nassau', 'City ', true),
  createData('Bahamas  ', 'Country  ', true),

  createData('Nassau ', 'Island/State  ', true),
  createData('Lot 15, Block 12, Unit 5 ', 'Legal description   ', true),
  createData('Map location ', 'Google maps ', true),
];

const ListingDetails = () => {
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
          Listing details
        </Typography>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper listing-detail-table'
        >
          <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left' style={{ width: '70%' }}>
                    Field
                  </TableCell>
                  <TableCell align='left' style={{ width: '30%' }}>
                    Approval
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
                      >
                        {isEditClicked !== row?.name && (
                          <Stack
                            direction='row'
                            justifyContent='flex-start'
                            alignItems='center'
                            spacing={2}
                          >
                            {row?.approval ? (
                              <Typography className='main-name'>
                                {row.name}
                              </Typography>
                            ) : (
                              <Link
                                className='resubmition-btn'
                                onClick={() => setIsSubmitted(true)}
                              >
                                {' '}
                                {row.name}{' '}
                              </Link>
                            )}
                            <IconButton
                              aria-label='edit'
                              disableRipple
                              onClick={() => {
                                setIsEditClicked(row?.name);
                              }}
                            >
                              <RiPencilFill size={14} />
                            </IconButton>
                          </Stack>
                        )}
                        {isEditClicked === row?.name && (
                          <Stack
                            direction='row'
                            justifyContent='flex-start'
                            alignItems='center'
                            spacing={2}
                          >
                            <TextField
                              fullWidth
                              id='outlined-basic'
                              label=''
                              variant='outlined'
                              placeholder='First Name'
                              size='small'
                              className='small-input'
                              value={row?.name}
                            />
                          </Stack>
                        )}

                        <Typography variant='body1' component='p'>
                          {row.namelabel}
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        {' '}
                        {row?.approval ? (
                          <FormControlLabel
                            control={
                              <Switch
                                sx={{ m: 1 }}
                                className='ios-switch-custom small'
                                focusVisibleClassName='.Mui-focusVisible'
                                disableRipple
                                defaultChecked
                              />
                            }
                            label=''
                          />
                        ) : (
                          <Box
                            variant='div'
                            component='div'
                            align='center'
                            className='note-label'
                          >
                            RESUBMITTED NEEDS APPROVAL
                          </Box>
                        )}
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
                      No listing detail submitted yet,
                    </Typography>
                    <Typography gutterBottom variant='p' component='p'>
                      all submitted details will appear here.
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
          <Button variant='contained' size='large' className='primary-btn btn'>
            {/* Submit for MLS review */}
            Approve listing details 
          </Button>
        </Stack>
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

export default ListingDetails;
