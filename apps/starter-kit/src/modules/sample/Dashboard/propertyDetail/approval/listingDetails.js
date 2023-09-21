import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Stack,
  IconButton,
  Button,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RiPencilFill } from 'react-icons/ri';
// import DisapprovalDialog from './disapprovalDialog';

function createData(name, subinfo, approval) {
  return { name, subinfo, approval };
}

const rows = [
  createData('Co-broke', 'Listing type '),
  createData('John Smith', 'Owner name'),
  createData('john@example.com', 'Owner email'),
  createData('123-456-7898 ', 'Owner cellphone'),
  createData('john@example.com ', 'Owner email'),
  createData('12/11/23 ', 'Contract start '),
  createData('12/12/24 ', 'Contract end '),

  createData('$5,000,000', 'Listing price  '),
  createData('HG Christie ', 'Co-broke brokerage'),
  createData('10%', 'Total Commission'),
  createData('50%', 'Co-broke split'),
  createData('$500 ', 'HOA Fees'),
  createData('Lots/acreage ', 'Property Type '),
  createData('USD ', 'Currency '),

  createData('USD', 'Currency '),
  createData('Vacant', 'Occupancy  '),
  createData('Tropical paradise at the beach ', 'Headline'),
  createData('Beachfront home ', 'Property name '),
  createData('4 Dunmore Island  ', 'Street address'),
  createData('Nassau', 'City '),
  createData('Bahamas  ', 'Country  '),

  createData('Nassau ', 'Island/State  '),
  createData('Lot 15, Block 12, Unit 5 ', 'Legal description   '),
  createData('Map location ', 'Google maps '),
];

const ListingDetails = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const handleClose = () => {
  //   setIsSubmitted(false);
  // };
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
          className='table-wrapper'
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
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
              <TableBody>
                {/* empty state here */}
                {rows.map((row) => (
                  <TableRow
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
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={2}
                      >
                        {row.name}
                        <IconButton aria-label='edit' disableRipple>
                          <RiPencilFill size={14} />
                        </IconButton>
                      </Stack>
                      <Typography variant='body1' component='p'>
                        {row.subinfo}
                      </Typography>
                    </TableCell>
                    <TableCell align='left'>
                      {' '}
                      <FormControlLabel
                        // control={<IOSSwitch  /> <Switch  sx={{ m: 1 }}
                        control={
                          <Switch
                            sx={{ m: 1 }}
                            className='ios-switch-custom small'
                            focusVisibleClassName='.Mui-focusVisible'
                            disableRipple
                            defaultChecked
                            // onClick={() => setIsSubmitted(true)}
                          />
                        }
                        label=''
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
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
            // onClick={() => setIsSubmitted(true)}
            className='primary-btn btn'
          >
            Submit for MLS review
          </Button>
        </Stack>
      </Box>
      {/* <DisapprovalDialog open={isSubmitted} handleClose={handleClose} /> */}
    </>
  );
};

export default ListingDetails;
