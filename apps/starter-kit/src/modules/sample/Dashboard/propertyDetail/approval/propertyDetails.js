import React, { useState } from 'react';
import { Box, Typography, FormControlLabel, Switch } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import DisapprovalDialog from './disapprovalDialog';

function createData(name, subinfo, approval) {
  return { name, subinfo, approval };
}

const rows = [
  createData('5', 'Bedrooms  '),
  createData('5', 'Bathrooms'),
  createData('1', 'Partial Bathrooms '),
  createData('Parking, Fence, Furnished, Gated ', 'Amenities'),
  createData('john@example.com ', 'Owner email'),
  createData('City ', 'Water '),
  createData('Connected ', 'Sewer'),

  createData('Garage', 'Parking   '),
  createData('5', 'Unit'),
  createData('10', 'Block '),
  createData('112', 'Lot number '),
  createData('Key box ', 'Appointments'),
  createData('Vacant  ', 'Occupancy  '),
  createData('Single Family lot  ', 'Style '),

  createData('3', 'Stories '),
  createData('Concrete block ', 'Construction   '),
  createData('Stone', 'Exterior finish '),
  createData('Finished concrete   ', 'Fee includes '),
  createData('Bahamas  ', 'Country '),
  createData('4.78', 'CiLand size (Acers) ty '),
  createData(' 5,000 ', 'Building size (Sq. Ft.)   '),

  createData('1970 ', 'Year built '),
  createData(
    'Enter the gate, make a right and its the first left  ',
    'Year built    ',
  ),
];

const PropertyDetails = () => {
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
          Property details
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
                      {row.name}
                      <Typography variant='body1' component='p'>
                        {/* Listing type */}
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
      </Box>
      {/* <DisapprovalDialog open={isSubmitted} handleClose={handleClose} /> */}
    </>
  );
};

export default PropertyDetails;
