import React, { useState } from 'react';
import { Button, Stack, Typography, Box, Chip } from '@mui/material';
import '../contacts.scss';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import {
  RiMailLine,
  RiPencilFill,
  RiRocketLine,
  RiArrowRightLine,
  RiLogoutBoxRLine,
  RiNotification3Line,
  RiAddLine,
} from 'react-icons/ri';
import PersonalDetails from './personalDetails';
import OtherDetails from './Otherdetails';
import ListingalertDialog from './listingalertDialog';
import AddcontactDialog from '../addcontactDialog';
import TransferDialog from './dailogs/transfercontactDialog';
import LogactivityDialog from './dailogs/logactivityDialog';
import FollowupDialog from './dailogs/followupDialog';

const breadcrumbs = [
  <Link underline='hover' key='1' color='inherit' to='/contacts'>
    Contacts
  </Link>,
  <Typography key='3' color='text.primary'>
    Contact Details
  </Typography>,
];

const ContactDetails = () => {
  const [isListingalert, setIsListingalert] = useState(false);
  const handlelistingalertClose = () => {
    setIsListingalert(false);
  };

  const [isAddcontact, setIsAddcontact] = useState(false);
  const handleaddcontactClose = () => {
    setIsAddcontact(false);
  };

  const [isTransfercontact, setIsTransfercontact] = useState(false);
  const handletransfercontactClose = () => {
    setIsTransfercontact(false);
  };

  const [isLogactivity, setIsLogactivity] = useState(false);
  const handlelogactivityClose = () => {
    setIsLogactivity(false);
  };

  const [isFollowup, setIsFollowup] = useState(false);
  const handlefollowupClose = () => {
    setIsFollowup(false);
  };

  // const emailAddress = 'example@example.com';
  // const subject = 'Subject of the email';
  // const body = 'Body of the email';

  const handleEmailButtonClick = () => {
    // // Change the email address and other parameters as needed
    // const emailAddress = 'example@example.com';
    // const subject = 'Subject of the email';
    // const body = 'Body of the email';

    // // Create the mailto link
    // const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    //   subject,
    // )}&body=${encodeURIComponent(body)}`;

    // // Open the user's default email client
    // window.location.href = mailtoLink;
    window.open('mailto:email@example.com');
  };

  return (
    <>
      <Box variant='div' component='div' className='contact-detail-wrapper'>
        <Box
          variant='div'
          component='div'
          sx={{
            paddingTop: { xs: 4, xl: 4 },
          }}
          className='breadcrumb-wrap'
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
            paddingTop: { xs: 5, xl: 5 },
          }}
          className='contact-detail-title'
        >
          <Stack
            direction='row'
            alignItems='center'
            spacing={2}
            className='main-title'
            flexWrap='wrap'
          >
            <Typography variant='h3' component='h3'>
              Contact Details
            </Typography>
            <Chip label=' Buyer profile' className='green' />
            {/* <Chip label=' Seller profile' className='yellow' />
          <Link href='#' className='chip green'>
            Buyer profile
          </Link> */}
            <Link
              href='#'
              className='chip yellow'
              onClick={() => setIsAddcontact(true)}
            >
              Seller profile
            </Link>
          </Stack>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            flexWrap='wrap'
            spacing={2}
            className='btn-group'
          >
            <Button
              variant='contained'
              startIcon={<RiArrowRightLine />}
              className='add-btn primary-btn btn yellow-btn'
              onClick={() => setIsTransfercontact(true)}
            >
              Transfer
            </Button>
            <Button
              variant='contained'
              startIcon={<RiAddLine />}
              className='dwnload-btn primary-btn btn sky-blue-btn'
              onClick={() => setIsFollowup(true)}
            >
              Follow up
            </Button>
            <Button
              variant='contained'
              startIcon={<RiLogoutBoxRLine />}
              className='dwnload-btn primary-btn btn pink-btn'
              onClick={() => setIsLogactivity(true)}
            >
              Log activity
            </Button>
            {/* <Link
              className='dwnload-btn btn green-btn'
              to='mailto:someone@example.com'
              target='_blank'
            >
              <RiMailLine size={20} />
              Send email
            </Link> */}
            {/* <Link
              to='http://www.gmail.com'
              target='_blank'
              className='dwnload-btn btn green-btn'
            >
              <RiMailLine size={20} />
              Send email
            </Link> */}
            <Button
              onClick={handleEmailButtonClick}
              className='custom-btn btn green-btn'
            >
              <RiMailLine size={20} />
              Send Email
            </Button>

            <Button
              variant='contained'
              startIcon={<RiNotification3Line />}
              className='dwnload-btn primary-btn btn purple-btn'
              onClick={() => setIsListingalert(true)}
            >
              Listing alerts
            </Button>
            <Button
              variant='contained'
              startIcon={<RiPencilFill />}
              className='dwnload-btn primary-btn btn blue-btn edit-btn'
              onClick={() => setIsAddcontact(true)}
            >
              Edit
            </Button>
          </Stack>
        </Stack>

        <PersonalDetails />
        <OtherDetails />
      </Box>
      <ListingalertDialog
        open={isListingalert}
        handleClose={handlelistingalertClose}
        title='Create listing alert'
      />
      <AddcontactDialog
        open={isAddcontact}
        handleClose={handleaddcontactClose}
        title={'Edit Contact'}
      />

      <TransferDialog
        open={isTransfercontact}
        handleClose={handletransfercontactClose}
      />

      <LogactivityDialog
        open={isLogactivity}
        handleClose={handlelogactivityClose}
      />

      <FollowupDialog open={isFollowup} handleClose={handlefollowupClose} />
    </>
  );
};

export default ContactDetails;
