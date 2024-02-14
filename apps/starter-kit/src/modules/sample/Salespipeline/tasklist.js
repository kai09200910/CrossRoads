import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  MenuItem,
  Select,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RiArrowDownSLine } from 'react-icons/ri';
// import Link from '@mui/material/Link';

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

const TaskList = () => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');
  const navigate = useNavigate();
  return (
    <Paper sx={{ marginTop: 1 }}>
      <Box
        sx={{
          padding: { xs: 5, xl: 5 },
        }}
        className='task-list-wrapper'
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={1}
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
          }}
          className='card-title'
        >
          <Typography variant='h4' component='h4'>
            Task List
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

        <Box variant='div' component='div' className='task-list'>
          <Box
            sx={{ width: '100%', overflow: 'hidden' }}
            className='task-wrapper scrollable-table'
          >
            <Box sx={{ width: '100%', overflow: 'hidden' }} className='task'>
              <Link to='/dashboard'>Update KYC Document </Link>
              <Typography variant='p' component='p' className=''>
                Thursday, Nov 23
              </Typography>
            </Box>
            <Box sx={{ width: '100%', overflow: 'hidden' }} className='task'>
              <Link to='/dashboard'>Update KYC Document </Link>
              <Typography variant='p' component='p' className=''>
                Monday, Nov 29
              </Typography>
            </Box>
            <Box sx={{ width: '100%', overflow: 'hidden' }} className='task'>
              <Link to='/dashboard'>Update KYC Document </Link>
              <Typography
                variant='p'
                component='p'
                className='red'
              >
                Wednesday, Nov 15
              </Typography>
            </Box>
            <Box sx={{ width: '100%', overflow: 'hidden' }} className='task'>
              <Link to='/dashboard'>Update KYC Document </Link>
              <Typography
                variant='p'
                component='p'
                className='red'
              >
                Wednesday, Nov 15
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default TaskList;
