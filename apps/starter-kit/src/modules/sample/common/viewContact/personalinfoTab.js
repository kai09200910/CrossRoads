import React, { useState } from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { RiAddLine, RiErrorWarningFill } from 'react-icons/ri';
import ReactSelect from 'react-select';

function createData(name, relationship, contact, note) {
  return {
    name,
    relationship,
    contact,
    note,
  };
}

const rows = [
  createData(
    'John Smith',
    'Father',
    '123-456-1245',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
  ),
  createData(
    'John Smith',
    'Father',
    '123-456-1245',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
  ),
  createData(
    'John Smith',
    'Father',
    '123-456-1245',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
  ),
];

const PersonalinfoTab = () => {
  const [isFamilymember, setIsFamilymember] = useState(false);
  const handleFamilymemberClose = () => {
    setIsFamilymember(false);
  };

  const options = [
    { value: 'chocolate', label: 'Jhone Smith' },
    { value: 'Robert Doe', label: 'Robert Doe' },
    { value: 'Victoria', label: 'Victoria' },
    { value: 'Joss Mackison', label: 'Joss Mackison' },
    { value: 'Merry Jane', label: 'Merry Jane' },
    { value: 'Hoper', label: 'Stan Hoper' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <Box className='personalinfo-tab tab-content-wrapper'>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                14 January 1985
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Birthday
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                18 October 2011
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Anniversary
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                Merry Jane
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Related contact
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                Spouse
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Relationship
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box className='family-member-list-wrapper' mt={6}>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
            className='main-title'
          >
            <Typography variant='h4' component='h4'>
              Family members
            </Typography>
          </Stack>
          <Box
            sx={{ width: '100%', overflow: 'hidden' }}
            className='table-wrapper note-list-table member-list'
          >
            <TableContainer>
              <Table sx={{ minWidth: 400 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left' style={{ width: '25%' }}>
                      Name
                    </TableCell>
                    <TableCell align='left' style={{ width: '16%' }}>
                      Relationship
                    </TableCell>
                    <TableCell align='left' style={{ width: '19%' }}>
                      Contact
                    </TableCell>
                    <TableCell align='left' style={{ width: '40%' }}>
                      Notes
                    </TableCell>
                  </TableRow>
                </TableHead>
                {rows.length > 0 ? (
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        className={
                          row?.approval > false ? 'resubmitted-approval' : ''
                        }
                        key={row.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          component='th'
                          scope='row'
                          className='field-name'
                          align='left'
                        >
                          <Typography variant='body1' component='p'>
                            {' '}
                            {row.name}
                          </Typography>
                        </TableCell>
                        <TableCell align='left'>
                          <Typography variant='body1' component='p'>
                            {row.relationship}
                          </Typography>
                        </TableCell>
                        <TableCell align='left'>
                          <Typography variant='body1' component='p'>
                            {row.contact}
                          </Typography>
                        </TableCell>
                        <TableCell align='left'>
                          <Typography variant='body1' component='p'>
                            {row.note}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                ) : (
                  <Box
                    variant='div'
                    component='div'
                    className='table-empty-state'
                  >
                    <Stack
                      direction='column'
                      justifyContent='center'
                      alignItems='center'
                      spacing={1}
                      sx={{
                        paddingBottom: { xs: 2, xl: 2 },
                      }}
                      className=''
                    >
                      <RiErrorWarningFill size={25} />
                      <Typography gutterBottom variant='p' component='p'>
                        No Family members found,
                      </Typography>
                      <Typography gutterBottom variant='p' component='p'>
                        all Family members list will appear here
                      </Typography>
                    </Stack>
                  </Box>
                )}
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PersonalinfoTab;
