// import { Box, Grid, Stack, Typography, Paper } from '@mui/material';
// import { RiTimeLine } from 'react-icons/ri';
// import PropertyCard from './propertyCard';
import './salespipeline.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './app';
import { TASKS } from './json';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

const Salespipeline = () => {
  function App() {
    return (
      <div className='App'>
        <TaskList tasks={TASKS} />
      </div>
    );
  }
  const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);
};

export default Salespipeline;

// export default List;
