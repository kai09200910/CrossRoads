import React from 'react';
import { Box, Button, Stack, Paper, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ListingnoteDialog from '../../dailogs/listingnoteDialog';

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
];

// const History = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const handleClose = () => {
//     setIsSubmitted(false);
//   };
// };

const MatchingBuyers = ({ handleBack }) => {
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
        <TableContainer component={Paper}>
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
                  <TableCell align='left'>{row.contact}</TableCell>
                  {/* <TableCell align='right'>
                    {' '}
                    <Button
                      variant='outlined'
                      size='small'
                      className='edit-btn'
                      onClick={() => setIsSubmitted(true)}
                    >
                      View
                    </Button>{' '}
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Button variant="text" onclick>Text</Button> */}
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={1}
          sx={{
            paddingTop: { xs: 4, xl: 4 },
          }}
        >
          <Button variant='text' onClick={() => handleBack(null)}>
            Back
          </Button>
        </Stack>
      </Box>
      {/* <ListingnoteDialog open={isSubmitted} handleClose={handleClose} /> */}
    </>
  );
};

export default MatchingBuyers;
