import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import ContactviewDialog from './viewContact/contactviewDialog';

function createData(name, match, email) {
  return { name, match, email };
}

const rows = [createData('John Smith', '95%', 'johnsmith@email.com')];

const MatchingContacts = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
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
            {rows.length > 0 ? (
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
                    <TableCell>
                      <Link onClick={() => setIsSubmitted(true)}>
                        {' '}
                        {row.name}{' '}
                      </Link>
                    </TableCell>
                    <TableCell align=''>
                      Status ONLINE
                      {row.match}
                    </TableCell>
                    <TableCell align=''>{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <Box variant='div' component='div' className='table-empty-state'>
                <Stack
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                  spacing={2}
                >
                  No matching contacts
                </Stack>
              </Box>
            )}
          </Table>
        </TableContainer>
      </Box>

      <ContactviewDialog open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default MatchingContacts;
