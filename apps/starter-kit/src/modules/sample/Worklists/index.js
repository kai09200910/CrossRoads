import React from 'react';
import { Box, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './worklists.scss';
import NewListing from './newListing';
import HistoryList from './historyList';
import UpdatesList from './updatesList';

const Worklists = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography
        variant='h3'
        component='h3'
        sx={{
          paddingBottom: { xs: 4, xl: 6 },
          paddingTop: { xs: 5, xl: 5 },
        }}
      >
        Work lists
      </Typography>
      <label>Sort by </label>

      <Box className='worklist-tab worklist-wrap'>
        <TabContext value={value} className=''>
          <Box className='tab-list-wrapper'>
            <TabList
              onChange={handleChange}
              aria-label='lab API tabs example'
              className='tab-list'
            >
              <Tab
                label={
                  <>
                    <Typography>Updates</Typography>
                  </>
                }
                value='1'
              />
              <Tab
                label={
                  <>
                    <Typography>New listings</Typography>
                  </>
                }
                value='2'
              />
              <Tab
                label={
                  <>
                    <Typography>History</Typography>
                  </>
                }
                value='3'
              />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <UpdatesList />
          </TabPanel>
          <TabPanel value='2'>
            <NewListing />
          </TabPanel>
          <TabPanel value='3'>
            <HistoryList />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Worklists;
