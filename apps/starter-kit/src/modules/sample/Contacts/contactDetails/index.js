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
            >
              Follow up
            </Button>
            <Button
              variant='contained'
              startIcon={<RiLogoutBoxRLine />}
              className='dwnload-btn primary-btn btn pink-btn'
            >
              Log activity
            </Button>
            <Button
              variant='contained'
              startIcon={<RiMailLine />}
              className='dwnload-btn primary-btn btn green-btn'
            >
              Send email
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
              className='dwnload-btn primary-btn btn blue-btn'
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
        // title={'Edit Contact'}
      />
    </>
  );
};

export default ContactDetails;
