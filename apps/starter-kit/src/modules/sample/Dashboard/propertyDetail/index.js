import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper, Stack } from '@mui/material';

import History from './history';
import Marketing from './marketing';
import Overview from './overview';
import MediaTabs from '../../Newlisting/mediaTabs';
import Approval from './approval';
import Activity from './activity';

const tabsOptions = ['Approval', 'Overview', 'Marketing', 'Media'];
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
  const [isAdmin, setIsAdmin] = useState(true);
  const [value, setValue] = React.useState(isAdmin ? 0 : 1);

  const handleChange = (event, newValue) => {
    console.log('newValue', newValue);
    setValue(newValue);
  };
  console.log('value=========', value);
  return (
    <>
      <Paper sx={{ marginTop: 5 }}>
        <Box sx={{ width: '100%' }} className='property-detail-wrap'>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              className='propertytab-wrap'
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
              >
                <Tab label='Approval' {...a11yProps(0)} />
                <Tab label='Overview' {...a11yProps(1)} />
                <Tab label='Marketing' {...a11yProps(2)} />
                <Tab label='Media' {...a11yProps(3)} />
                {/* {tabsOptions.map((opt, index) => {
                  return <Tab label={opt} {...a11yProps(index)} />;
                })} */}
                <Tab
                  label={isAdmin ? 'Activity' : 'History'}
                  {...a11yProps(4)}
                />
              </Tabs>

              {/* <Button
                variant='outlined'
                size='small'
                startIcon={<RiPencilFill />}
                className='edit-btn secondary-btn-small'
              >
                Edit
              </Button> */}
            </Stack>
          </Box>

          <TabPanel value={value} index={0} className='tab-content-wrap'>
            <Approval />
          </TabPanel>
          <TabPanel value={value} index={1} className='tab-content-wrap'>
            <Overview />
          </TabPanel>
          <TabPanel value={value} index={2} className='tab-content-wrap'>
            <Marketing />
          </TabPanel>
          <TabPanel value={value} index={3} className='tab-content-wrap'>
            <Box
              variant='div'
              component='div'
              className='media-tab-content-wrapper'
              sx={{
                padding: { xs: 4, xl: 4 },
              }}
            >
              <MediaTabs />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4} className='tab-content-wrap'>
            {isAdmin ? <Activity /> : <History />}
          </TabPanel>
        </Box>
      </Paper>
    </>
  );
};

export default PropertyDetails;
