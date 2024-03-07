import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, date, property, action) {
  return { name, date, property, action };
}

const rows = [
  createData('John Smith   ', '05/07/24'),
  createData('John Smith  ', '05/07/24'),
  createData('John Smith  ', '05/07/24'),
  createData('John Smith   ', '05/07/24'),
  createData('John Smith   ', '05/07/24'),
  createData('John Smith  ', '05/07/24'),
  createData('John Smith  ', '05/07/24'),
];

const NewLeads = () => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');
  const navigate = useNavigate();
  return (
    <Paper sx={{ marginTop: 1 }}>
      <Box
        sx={{
          padding: { xs: 5, xl: 5 },
        }}
        className='recent-inquires-wrapper'
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={1}
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
          }}
        >
          <Typography variant='h4' component='h4'>
            New Leads
          </Typography>
          <Button
            variant='outlined'
            size='small'
            className='edit-btn secondary-btn-small'
            // onClick={() => setIsEventview(true)}
          >
            View All
          </Button>{' '}
        </Stack>

        <Box variant='div' component='div' className='recent-inquiry-list'>
          <Box
            sx={{ width: '100%', overflow: 'hidden' }}
            className='table-wrapper scrollable-table'
          >
            <TableContainer>
              <Table sx={{ minWidth: 220 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align='left'>Date</TableCell>
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
                      <Link  to='/contacts/details'>{row.name} </Link>
                      </TableCell>
                      <TableCell align='left'>{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default NewLeads;
