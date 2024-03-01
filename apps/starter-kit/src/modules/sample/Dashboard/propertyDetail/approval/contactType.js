import React from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Stack,
  Button,
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
  createData('John Smith ', 'Buyer 1  '),
  createData('John Doe ', 'Buyer 2  '),
  createData('Document.pdf ', 'KYC Documents '),
  createData('1', 'Sold price  '),
  createData('Bill Smith  ', 'Agent sold by '),
  createData('Sam Smith  ', 'Secondary Agent '),
  createData('10/12/2024 ', 'Under contract  '),
  createData('10/12/2025 ', 'Date Sold '),
  createData('Smith Associates ', 'Co-broke agency    '),
  createData('Under contract ', 'Status'),
  createData('We are pleased to announce we secured the buyer in the sale of this  home. Pictures courtesy of The Bahamas MLS. ', 'Phrase '),
  ];

const ContactType = () => {
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
          Contact Type
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
                      No Contact detail submitted yet,
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
            Approve buyer details
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ContactType;
