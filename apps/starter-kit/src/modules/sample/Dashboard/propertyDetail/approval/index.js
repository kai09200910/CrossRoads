import { Box, Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Documents from './documents';
import ListingDetails from './listingDetails';
import PropertyDetails from './propertyDetails';
import MediaTabs from '../../../Page2/mediaTabs';

const Approval = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        variant='div'
        component='div'
        sx={{
          padding: { xs: 5, xl: 4 },
        }}
        className='approval-tab-content'
      >
        <Box className=''>
          <Stack
            direction='row'
            alignItems='center'
            spacing={2}
            sx={{
              paddingBottom: { xs: 2, xl: 2 },
            }}
            className='status-bar'
          >
            <Stack spacing={{ xs: 1, sm: 2 }} direction='row' useFlexGap>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label='Documents'
              />
              <FormControlLabel
                control={<Checkbox />}
                label='Listing Details'
              />
              <FormControlLabel
                control={<Checkbox />}
                label='Property details'
              />
              <FormControlLabel control={<Checkbox />} label='Media' />
            </Stack>
            <Button
              variant='contained'
              size='small'
              className='primary-btn-small'
              // onClick={() => setIsSubmitted(true)}
            >
              Submit
            </Button>
          </Stack>
        </Box>
        <Box className='approval-tab'>
          <TabContext value={value}>
            <Box
              // sx={{ borderBottom: 1, borderColor: 'divider' }}
              className='tab-list-wrapper'
            >
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
                centered
                className='approval-tab-list'
              >
                <Tab label='Documents' value='1' />
                <Tab label='Listing details' value='2' />
                <Tab label='Property details' value='3' />
                <Tab label='Media' value='4' />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <Documents />
            </TabPanel>
            <TabPanel value='2'>
              <ListingDetails />
            </TabPanel>
            <TabPanel value='3'>
              <PropertyDetails />
            </TabPanel>
            <TabPanel value='4'>
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
          </TabContext>
        </Box>
      </Box>
    </>
  );
};

export default Approval;
