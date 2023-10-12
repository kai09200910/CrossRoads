import React, { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import { RiPencilFill } from 'react-icons/ri';

function createData(name, size, submitted) {
  return { name, size, submitted };
}

const rows = [
  createData('KYC Documents ', '120kb', false),
  createData('Listing Agreement ', '5mb', null),
  createData('Sales agreement ', '2.6kb', true),
];

const TransactionReport = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };

  const [isBuyerDialogOpen, setIsBuyerDialogOpen] = useState(false);
  const handleBuyerOpen = () => {
    // setStep(1);
    setIsBuyerDialogOpen(true);
  };
  const handleBuyerClose = () => {
    setIsBuyerDialogOpen(false);
  };
  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={0}
        sx={{
          padding: '0px',
          width: '100%',
        }}
      >
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <Typography
            variant='h4'
            component='h4'
            sx={{
              paddingBottom: '0',
            }}
          >
            Transaction report
          </Typography>
          <IconButton aria-label='edit' disableRipple>
            <RiPencilFill size={18} />
          </IconButton>
        </Stack>

        <Button
          variant='contained'
          size='small'
          className='primary-btn-small secondary-btn'
        >
          + Add
        </Button>
      </Stack>
      <Box
        sx={{
          paddingTop: { xs: 0, xl: 0 },
          marginTop: '0',
        }}
        className='table-wrapper'
      >
        <Box
          className='t-report-wrapper'
          sx={{
            padding: '0 24px 24px 24px',
          }}
        >
          <Grid container spacing={5} mt={0}>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  NS354637
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Transaction
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  Sold
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Present status
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  Listed
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Transaction status
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  Listing
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Transaction type
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  John Smith
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Seller
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  Fred Smith
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Buyer
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  Phillip Smith
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Selling Agent
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  12/4/23
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Listing date
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  12/3/24
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Under contract date
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  4/12/24
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Sold date
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  $1,000,000
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Gross commission
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <Box variant='div' component='div'>
                <Typography gutterBottom variant='p' component='p'>
                  12/4/23
                </Typography>
                <Typography variant='body1' component='span' className='mb-0'>
                  Listing date
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TransactionReport;
