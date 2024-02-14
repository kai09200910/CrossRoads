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
import InstagramEmbed from 'react-instagram-embed';

function createData(name, date, property, action) {
  return { name, date, property, action };
}

const rows = [
  createData('John Smith   ', '05/07/24', 'NS26157 '),
  createData('John Smith  ', '05/07/24', 'NS26157 '),
  createData('John Smith  ', '05/07/24', 'NS26157 '),
  createData('John Smith   ', '05/07/24', 'NS26157 '),
];

const Instagram = () => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');
  const navigate = useNavigate();
  return (
    <Paper sx={{ marginTop: 1 }}>
      <Box
        sx={{
          padding: { xs: 5, xl: 5 },
        }}
        className='instagram-card'
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
            Instagram
          </Typography>
        </Stack>

        <Box variant='div' component='div' className='instagram-feed'>
          <Box
            sx={{ width: '100%', overflow: 'hidden' }}
            className='scrollable-table'
          >
            <InstagramEmbed
              clientAccessToken='<appId>|<clientToken>'
              url='https://instagr.am/p/Zw9o4/'
              maxWidth={375}
              hideCaption={false}
              containerTagName='div'
              injectScript
              protocol=''
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Instagram;
