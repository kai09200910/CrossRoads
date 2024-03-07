import React from 'react';
import TaskList from './app';
import { Box } from '@mui/material';
import './dashboard.scss';

export const TASKS = [
  {
    id: 1,
    status: 'Under Contract',
  },
  {
    id: 2,
    status: 'Approval Pending',
  },
  {
    id: 3,
    status: ' Active Listings',
  },
  {
    id: 4,
    status: 'Under Contract',
  },
  {
    id: 5,
    status: 'Approval Pending',
  },
  {
    id: 6,
    status: ' Active Listings',
  },
  {
    id: 7,
    status: 'Offer Pening',
  },
  {
    id: 8,
    status: 'Offer Pening',
  },
  {
    id: 9,
    status: 'Offer Pening',
  },
];


const Salespipelinelist = () => {
 
    return (
      <Box className='App'>
        <TaskList tasks={TASKS} />
      </Box>
    );
};

export default Salespipelinelist;


