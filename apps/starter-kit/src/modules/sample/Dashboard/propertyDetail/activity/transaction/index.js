import React, { useState } from 'react';
import { Box, Breadcrumbs, Stack, Typography } from '@mui/material';
import InquiryinformationDialog from '../../../dailogs/inquiryinformationDialog';
import TransactionReport from './transactionReport';
import Receipts from './receipts';
import Expenses from './expenses';
import Totals from './totals';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function createData(name, date, listing, action) {
  return { name, date, listing, action };
}

const Transactions = ({ handleBack }) => {
  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      onClick={() => handleBack(null)}
    >
      Activity
    </Link>,
    <Typography key='3' color='text.primary'>
      Transaction Report
    </Typography>,
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };
  return (
    <>
      <Box
        variant='div'
        component='div'
        sx={{
          paddingBottom: { xs: 4, xl: 5 },
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

      <Box
        sx={{
          paddingTop: { xs: 0, xl: 0 },
        }}
      >
        <Stack
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={6}
        >
          <TransactionReport />

          <Receipts />

          <Expenses />

          <Totals />
        </Stack>
      </Box>
      <InquiryinformationDialog open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default Transactions;
