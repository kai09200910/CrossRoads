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
// import AddfamilymemberDialog from './addfamilymemberDialog';
import ReactSelect from 'react-select';
import AddfamilymemberDialog from '../../Contacts/addfamilymemberDialog';

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
      <Box className='personalinfo-tab'>
        <Grid container spacing={5} mt={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Birthday </label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Anniversary </label>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ width: '100%' }} />
              </DemoContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Related contact </label>
              <ReactSelect
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={true}
                isClearable={true}
                className='react-select-wrap'
                placeholder='Search for contact record'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box variant='div' component='div'>
              <label>Relationship </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Add relationship '
              />
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Personal Address </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter Address'
              />
            </Box>
          </Grid> */}
          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Additional info </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter Additional info'
                multiline
                rows={4}
                maxRows={4}
              />
            </Box>
          </Grid>
        </Grid>

        <Box className='family-member-list-wrapper' mt={7}>
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

            <Button
              variant='contained'
              size='small'
              autoFocus
              className='primary-btn secondary-btn'
              onClick={() => setIsFamilymember(true)}
            >
              <RiAddLine size={18} />
              Add
            </Button>
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
                    <TableCell align='left' style={{ width: '17%' }}>
                      Contact
                    </TableCell>
                    <TableCell align='left' style={{ width: '42%' }}>
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
                        No notes found,
                      </Typography>
                      <Typography gutterBottom variant='p' component='p'>
                        all recored notes will appear here
                      </Typography>
                    </Stack>
                  </Box>
                )}
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
      <AddfamilymemberDialog
        open={isFamilymember}
        handleClose={handleFamilymemberClose}
      />
    </>
  );
};

export default PersonalinfoTab;
