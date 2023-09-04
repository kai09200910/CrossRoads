import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Paper, Stack } from '@mui/material';
import { RiPencilFill } from 'react-icons/ri';

import History from './history';
import Marketing from './marketing';
import Overview from './overview';

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

const PropertyDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                className='edit-btn secondary-btn-small'
              >
                Edit
              </Button>
            </Stack>
          </Box>
          <TabPanel value={value} index={0}>
            <Overview />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Marketing />
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
            <History />
          </TabPanel>
        </Box>
      </Paper>
    </>
  );
};

export default PropertyDetails;
