import React from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Stack,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RiErrorWarningFill } from 'react-icons/ri';

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
                      No property detail submitted yet,
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
      </Box>
    </>
  );
};

export default PropertyDetails;
