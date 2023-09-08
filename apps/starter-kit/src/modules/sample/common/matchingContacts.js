import React from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, match, email) {
  return { name, match, email };
}

const rows = [createData('John Smith', '95%', 'johnsmith@email.com')];

const MatchingContacts = () => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }} className='table-wrapper'>
      <TableContainer className='matching-contact-detail'>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align=''>Name</TableCell>
              <TableCell align=''>Match&nbsp;%</TableCell>
              <TableCell align=''>Email</TableCell>
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
                <TableCell>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label=''
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                {/* <TableCell align='right'>{row.name}</TableCell> */}
                <TableCell align=''>{row.match}</TableCell>
                <TableCell align=''>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MatchingContacts;
