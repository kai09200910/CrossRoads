import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import InquiryinformationDialog from '../../../dailogs/inquiryinformationDialog';
import TransactionReport from './transactionReport';
import Receipts from './receipts';
import Expenses from './expenses';
import Totals from './totals';

function createData(name, date, listing, action) {
  return { name, date, listing, action };
}

const Transactions = ({ handleBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };
  return (
    <>
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
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={1}
          sx={{
            paddingTop: { xs: 4, xl: 4 },
          }}
        >
          <Button
            variant='text'
            onClick={() => handleBack(null)}
            className='link-btn'
          >
            Back
          </Button>
        </Stack>
      </Box>
      <InquiryinformationDialog open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default Transactions;
