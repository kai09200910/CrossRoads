import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Documents from './documents';
import ListingDetails from './listingDetails';
import PropertyDetails from './propertyDetails';
import MediaTabs from '../../../Page2/mediaTabs';
import { RiCheckFill, RiErrorWarningLine } from 'react-icons/ri';

const Approval = () => {
  const [value, setValue] = React.useState('1');
  const [approvalStatus, setApprovalStatus] = useState({
    documents: true,
    listing: true,
    property_detail: true,
    media: true,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckBoxClick = (event) => {
    setApprovalStatus((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
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
            className='approval-status-bar'
          >
            {/* <Stack spacing={{ xs: 1, sm: 2 }} direction='row' useFlexGap>
              <FormControlLabel
                control={<Checkbox checked={approvalStatus?.documents} />}
                label='Documents'
                name='documents'
                onChange={handleCheckBoxClick}
              />
              <FormControlLabel
                control={<Checkbox checked={approvalStatus?.listing} />}
                name='listing'
                label='Listing Details'
                onChange={handleCheckBoxClick}
              />
              <FormControlLabel
                control={<Checkbox checked={approvalStatus?.property_detail} />}
                name='property_detail'
                label='Property details'
                onChange={handleCheckBoxClick}
              />
              <FormControlLabel
                control={<Checkbox checked={approvalStatus?.media} />}
                name='media'
                label='Media'
                onChange={handleCheckBoxClick}
              />
            </Stack>
            <Button
              variant='contained'
              size='small'
              className={
                Object.values(approvalStatus).every((val) => val == true)
                  ? 'active'
                  : '' + 'primary-btn-small'
              }
            >
              Approve
            </Button> */}
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
                <Tab
                  label={
                    <>
                      <Typography>Documents</Typography>
                      <RiCheckFill size={15} />{' '}
                      {/* <RiErrorWarningLine size={15} /> */}
                    </>
                  }
                  value='1'
                  className={approvalStatus.documents ? 'submited' : 'error'}
                />
                <Tab
                  label={
                    <>
                      <Typography>Listing details</Typography>
                      {/* <RiCheckFill size={10} />{' '} */}
                      <RiErrorWarningLine size={15} />
                    </>
                  }
                  value='2'
                  className={approvalStatus.listing ? 'submited' : 'error'}
                />
                <Tab
                  label={
                    <>
                      <Typography>Property details</Typography>
                      <RiCheckFill size={15} />{' '}
                      {/* <RiErrorWarningLine size={15} /> */}
                    </>
                  }
                  value='3'
                  className={
                    approvalStatus.property_detail ? 'submited' : 'error'
                  }
                />
                <Tab
                  label={
                    <>
                      <Typography>Media</Typography>
                      <RiCheckFill size={15} />{' '}
                      {/* <RiErrorWarningLine size={15} /> */}
                    </>
                  }
                  value='4'
                  className={approvalStatus.media ? 'submited' : 'error'}
                />
              </TabList>
              <Button
                variant='contained'
                size='small'
                className={
                  Object.values(approvalStatus).every((val) => val == true)
                    ? 'active'
                    : '' + 'primary-btn-small'
                }
              >
                Approve
              </Button>
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
