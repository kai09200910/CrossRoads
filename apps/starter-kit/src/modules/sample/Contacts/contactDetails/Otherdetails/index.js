import React from 'react';
import { Box, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NotesTab from './notesTab';
import ActivitiesTab from './activitiesTab';
import InquiriesTab from './inquiriesTab';
import DocumentsTab from './documentsTab';
import ListingmatchesTab from './listingmatchesTab';
import ListingalertsTab from './listingalertsTab';
import EmailcampaignsTab from './emailcampaignsTab';

const OtherDetails = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='other-detail-tab'>
      <TabContext value={value}>
        <Box className='tab-list-wrapper'>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            className='tab-list'
          >
            <Tab
              label={
                <>
                  <Typography>Notes</Typography>
                </>
              }
              value='1'
            />
            <Tab
              label={
                <>
                  <Typography>Activities</Typography>
                </>
              }
              value='2'
            />
            <Tab
              label={
                <>
                  <Typography>Inquiries</Typography>
                </>
              }
              value='3'
            />
            <Tab
              label={
                <>
                  <Typography>Documents</Typography>
                </>
              }
              value='4'
            />
            <Tab
              label={
                <>
                  <Typography>Listing matches </Typography>
                </>
              }
              value='5'
            />
            <Tab
              label={
                <>
                  <Typography>Listing alerts</Typography>
                </>
              }
              value='6'
            />
             <Tab
              label={
                <>
                  <Typography>Email campaigns</Typography>
                </>
              }
              value='7'
            />
          </TabList>
        </Box>
        <TabPanel value='1'>
          {' '}
          <NotesTab />
        </TabPanel>
        <TabPanel value='2'>
          <ActivitiesTab />
        </TabPanel>
        <TabPanel value='3'>
          <InquiriesTab />
        </TabPanel>
        <TabPanel value='4'>
          <DocumentsTab />
        </TabPanel>
        <TabPanel value='5'>
          <ListingmatchesTab />
        </TabPanel>
        <TabPanel value='6'>
          <ListingalertsTab />
        </TabPanel>
        <TabPanel value='7'>
          <EmailcampaignsTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default OtherDetails;
