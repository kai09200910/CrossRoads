import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, Paper, Stack, TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { MdHomeFilled } from 'react-icons/md';
import { IoIosBed, IoIosSnow } from 'react-icons/io';
import { FaCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { GiTowerBridge } from 'react-icons/gi';
import { BiSolidShower } from 'react-icons/bi';
import { RiArrowDownSLine, RiPencilFill } from 'react-icons/ri';
import {
  HiOutlineCalendar,
  HiOutlineInbox,
  HiOutlineUsers,
  HiOutlineMail,
} from 'react-icons/hi';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import SubmittedDialogs from './submittedDialog';
import ListingnoteDialog from './listingnoteDialog';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function createData(activity, date, by, action) {
  return { activity, date, by, action };
}

const rows = [
  createData('New note ', 5.07, 12),
  createData('Listing active', 12, 34),
  createData('New note', 5.07, 32),
  createData('New note', 5.07, 34),
  createData('New note', 5.07, 23),
  createData('New note', 5.07, 12),
];

const PropertyDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <Paper sx={{ marginTop: 5 }}>
        <Box sx={{ width: '100%' }} className='property-detail-wrap'>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              // sx={{
              //   paddingTop: { xs: 2, xl: 3 },
              // }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
              >
                <Tab label='Overview' {...a11yProps(0)} />
                <Tab label='Marketing' {...a11yProps(1)} />
                <Tab label='Media' {...a11yProps(2)} />
                <Tab label='History' {...a11yProps(3)} />
              </Tabs>

              <Button
                variant='outlined'
                size='small'
                startIcon={<RiPencilFill />}
                className='edit-btn'
              >
                Edit
              </Button>
            </Stack>
          </Box>
          <TabPanel value={value} index={0}>
            <Box
              variant='div'
              component='div'
              sx={{
                padding: { xs: 5, xl: 4 },
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={7}>
                  <Typography
                    variant='h3'
                    component='h3'
                    sx={{
                      paddingBottom: { xs: 4, xl: 4 },
                    }}
                  >
                    Property Description
                  </Typography>
                  <Typography
                    variant='p'
                    component='p'
                    sx={{
                      paddingBottom: { xs: 4, xl: 2 },
                    }}
                  >
                    Sea Breeze is naturally possessed of a light, airy and
                    refreshing flow reminiscent of the tropical cocktail after
                    which it is so aptly named. Built in the mid 1980s this
                    well-maintained home boasts five bedrooms, four bathrooms
                    and two half bathrooms.
                  </Typography>
                  <Typography
                    variant='p'
                    component='p'
                    sx={{
                      paddingBottom: { xs: 4, xl: 2 },
                    }}
                  >
                    With a Spanish tile roof, this home encompasses 5,743 square
                    feet and is situated on a 0.61 acre lot nestled within the
                    desirable community of Lyford Cay. This well located
                    property is a short walk or bike ride from The Lyford Cay
                    Club and Lyford Cay School.
                  </Typography>
                  <Typography
                    variant='p'
                    component='p'
                    sx={{
                      paddingBottom: { xs: 4, xl: 2 },
                    }}
                  >
                    Upon arrival one walks up the terracotta tiled pathway to
                    the front entrance, flanked by light capturing oval windows
                    and ionic columns....
                  </Typography>
                  <Button
                    size='small'
                    className='link-btn'
                    sx={{
                      paddingTop: { xs: 2, xl: 3 },
                    }}
                  >
                    Continue reading <RiArrowDownSLine />{' '}
                  </Button>
                </Grid>
                <Grid item xs={12} md={5}>
                  <List className='property-feature'>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        {' '}
                        <MdHomeFilled size={22} />{' '}
                      </ListItemIcon>
                      <ListItemText primary='Single Family Residence ' />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        {' '}
                        <IoIosBed size={22} />{' '}
                      </ListItemIcon>
                      <ListItemText primary='10 Bedrooms ' />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        {' '}
                        {/* <BiSolidShower size={22} />{' '} */}
                        <IoIosBed size={22} />{' '}
                      </ListItemIcon>
                      <ListItemText primary='12 Bathrooms / 2 Partial' />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        {' '}
                        <FaCalendarAlt size={22} />{' '}
                      </ListItemIcon>
                      <ListItemText primary='Built in 2001' />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        {' '}
                        <FaMapMarkedAlt size={22} />{' '}
                      </ListItemIcon>
                      <ListItemText primary='1.35 acres / 5,000 Sq. Ft.  ' />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        {' '}
                        <IoIosSnow size={22} />{' '}
                      </ListItemIcon>
                      <ListItemText primary='Family Home' />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        {' '}
                        <GiTowerBridge size={22} />{' '}
                      </ListItemIcon>
                      <ListItemText primary='2 Stories' />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box variant='div' component='div'>
                    <label>
                      New note
                      <Typography
                        variant='body1'
                        component='span'
                        className='optional-label'
                      >
                        140/140 remaining
                      </Typography>
                    </label>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      label=''
                      variant='outlined'
                      placeholder='Enter descriptive words  '
                      multiline
                      rows={4}
                      maxRows={4}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Stack
                    direction='row'
                    justifyContent='flex-end'
                    alignItems='center'
                    sx={{
                      paddingTop: { xs: 2, xl: 3 },
                    }}
                  >
                    <Button
                      variant='contained'
                      size='large'
                      // onClick={handleNext}
                      className='primary-btn btn'
                    >
                      +Add
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              variant='div'
              component='div'
              className='marketing-tab-content-wrapper'
              sx={{
                padding: { xs: 5, xl: 4 },
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Button
                    variant='contained'
                    size='large'
                    // onClick={handleNext}
                    className='secondary-btn btn'
                  >
                    <HiOutlineCalendar size={34} />
                    Events
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant='contained'
                    size='large'
                    // onClick={handleNext}
                    className='secondary-btn btn'
                  >
                    <HiOutlineInbox size={34} />
                    Inquiries
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant='contained'
                    size='large'
                    // onClick={handleNext}
                    className='secondary-btn btn'
                  >
                    <HiOutlineUsers size={34} />
                    Matching buyers
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant='contained'
                    size='large'
                    // onClick={handleNext}
                    className='secondary-btn btn'
                  >
                    <HiOutlineMail size={34} />
                    Email campaign
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box
              variant='div'
              component='div'
              className='media-tab-content-wrapper'
              sx={{
                padding: { xs: 4, xl: 12 },
              }}
            >
              Media Tab Content display here
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box
              variant='div'
              component='div'
              className='history-tab-content-wrapper'
              sx={{
                padding: { xs: 5, xl: 4 },
              }}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Activity</TableCell>
                      <TableCell align='right'>Date</TableCell>
                      <TableCell align='right'>By</TableCell>
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
                          {row.activity}
                        </TableCell>
                        <TableCell align='right'>{row.date}</TableCell>
                        <TableCell align='right'>{row.by}</TableCell>
                        <TableCell align='right'>
                          {' '}
                          <Button
                            variant='outlined'
                            size='small'
                            className='edit-btn'
                            onClick={() => setIsSubmitted(true)}
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
          </TabPanel>
        </Box>
      </Paper>
      {/* <SubmittedDialogs open={isSubmitted} handleClose={handleClose} /> */}
      <ListingnoteDialog open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default PropertyDetails;
