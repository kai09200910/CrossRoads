import React, { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import MatchingbuyersDialog from '../../dailogs/matchingbuyersDialog';

function createData(matchingbuyer, match, contact) {
  return { matchingbuyer, match, contact };
}

const rows = [
  createData('John Smith', '95%', 'View info'),
  createData('John Smith', '95%', 'View info'),
  createData('John Smith', '95%', 'View info'),
  createData('John Smith', '95%', 'View info'),
  createData('John Smith', '95%', 'View info'),
  createData('John Smith', '95%', 'View info'),
  createData('John Smith', '95%', 'View info'),
  createData('John Smith', '95%', 'View info'),
  createData('John Smith', '95%', 'View info'),
];

const MatchingBuyers = ({ handleBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
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
          Matching Buyers
        </Typography>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper scrollable-table'
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Matching Buyers</TableCell>
                  <TableCell align='left'>Match %</TableCell>
                  <TableCell align='left'>Contact</TableCell>
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
                      {row.matchingbuyer}
                    </TableCell>
                    <TableCell align='left'>{row.match}</TableCell>
                    <TableCell align='left'>
                      <Link
                        className='viewinfo-btn'
                        onClick={() => setIsSubmitted(true)}
                      >
                        {row.contact}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={1}
          sx={{
            paddingTop: { xs: 4, xl: 4 },
          }}
        >
          <Button
            variant='text'
            onClick={() => handleBack(null)}
            className='link-btn'
          >
            Back
          </Button>
        </Stack>
      </Box>
      <MatchingbuyersDialog open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default MatchingBuyers;
