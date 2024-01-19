import React, { useState } from 'react';
import { Box, Button, Paper, Stack, Typography, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RiArrowDownSLine } from 'react-icons/ri';


function createData(name, date, property, action) {
  return { name, date, property, action };
}

const rows = [
  createData('John Smith   ', '05/07/24', 'NS26157 '),
  createData('John Smith  ', '05/07/24', 'NS26157 '),
  createData('John Smith  ', '05/07/24', 'NS26157 '),
  createData('John Smith   ', '05/07/24', 'NS26157 '),
];


const RecentInquires = () => {
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
          Recent Inquires
          </Typography>

          <Select
                  id='demo-simple-select'
                  value={value}
                  defaultValue='none'
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={(e) => setShowPlaceholder(false)}
                  onClose={(e) =>
                    setShowPlaceholder(e.target.value === undefined)
                  }
                  IconComponent={RiArrowDownSLine}
                  className='more-action-btn'
                >
                  <MenuItem
                    key='0'
                    disabled
                    value='none'
                    className='place-holder'
                  >
                   ---
                  </MenuItem>
                  <MenuItem value={20}>Action 1</MenuItem>
                  <MenuItem value={30}>Action 2 </MenuItem>
                  <MenuItem value={40}>Action 3</MenuItem>
                </Select>

          </Stack>
       
        <Box
          variant='div'
          component='div'
          className='recent-inquiry-list'
        >
          <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper scrollable-table'
        >
          <TableContainer>
            <Table sx={{ minWidth: 430 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='left'>Date</TableCell>
                  <TableCell align='left'>Property</TableCell>
                  <TableCell align='right'></TableCell>
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
                      {row.name}
                    </TableCell>
                    <TableCell align='left'>{row.date}</TableCell>
                    <TableCell align='left'>{row.property}</TableCell>
                    <TableCell align='right'>
                      {' '}
                      <Button
                        variant='outlined'
                        size='small'
                        className='edit-btn secondary-btn-small'
                        // onClick={() => setIsEventview(true)}
                      >
                        View
                      </Button>{' '}
                    </TableCell>
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

export default RecentInquires;
