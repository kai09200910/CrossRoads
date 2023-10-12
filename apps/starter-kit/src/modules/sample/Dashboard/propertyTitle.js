import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import PropertyImg from '../../../assets/images/PI-home1.png';
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
  RiPencilFill,
} from 'react-icons/ri';
import SubmittedDialogs from './dailogs/submittedDialog';
import BuyerDialog from './dailogs/buyerDialog';

const PropertyTitle = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBuyerDialogOpen, setIsBuyerDialogOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handleClose = () => {
    setIsSubmitted(false);
    setStep(1);
  };
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleBuyerOpen = () => {
    setStep(1);
    setIsBuyerDialogOpen(true);
  };

  const handleBuyerClose = () => {
    setIsBuyerDialogOpen(false);
  };
  return (
    <>
      <Paper>
        <Box
          sx={{
            padding: { xs: 5, xl: 5 },
          }}
          className='property-title-wrap'
        >
          <>
            <Grid container spacing={5}>
              <Grid item xs={12} md={3} lg={3}>
                <Box variant='div' component='div' className='property-img'>
                  <Box
                    component='img'
                    src={PropertyImg}
                    alt='property-image'
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7} lg={7}>
                <Stack
                  direction='row'
                  justifyContent='flex-start'
                  alignItems='center'
                  spacing={2}
                  sx={{
                    paddingBottom: { xs: 3, xl: 4 },
                  }}
                  className='title-wrap'
                >
                  <Typography variant='h2' component='h2'>
                    Tropical Paradise by the Beach
                  </Typography>
                  <Chip label='Active' className='green' />
                  {/* <Chip label='Offer Pending' className='orange' />
                <Chip label='Under contract   ' className='blue ' /> */}
                </Stack>

                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  spacing={2}
                  sx={{
                    paddingBottom: { xs: 4, xl: 5 },
                  }}
                  className='property-info'
                >
                  <Box variant='div' component='div' className='info-wrap'>
                    <Typography variant='p' component='p'>
                      $5,000,000
                    </Typography>
                    <Typography variant='body1' component='span'>
                      Price
                    </Typography>
                  </Box>
                  <Box variant='div' component='div' className='info-wrap'>
                    <Typography variant='p' component='p'>
                      NS73646
                    </Typography>
                    <Typography variant='body1' component='span'>
                      Listing number
                    </Typography>
                  </Box>
                  <Box variant='div' component='div' className='info-wrap'>
                    <Typography variant='p' component='p'>
                      12/05/2023
                    </Typography>
                    <Typography variant='body1' component='span'>
                      Exp.
                    </Typography>
                  </Box>
                  <Box variant='div' component='div' className='info-wrap'>
                    <Typography variant='p' component='p'>
                      John Smith
                    </Typography>
                    <Typography variant='body1' component='span'>
                      Owner
                    </Typography>
                  </Box>
                  <Box variant='div' component='div' className='info-wrap'>
                    <Typography variant='p' component='p'>
                      Dylan Christie
                    </Typography>
                    <Typography variant='body1' component='span'>
                      Agent
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction='row'
                  alignItems='start'
                  spacing={1}
                  className='other-info'
                >
                  <Stack spacing={2} className='address'>
                    <Typography variant='p' component='p'>
                      4 Dunmore Island, Old Fort Bay, Nassau, Bahamas
                    </Typography>

                    <Stack
                      direction='row'
                      alignItems='center'
                      spacing={2}
                      sx={{
                        paddingBottom: { xs: 0, xl: 0 },
                      }}
                      className='mls-info'
                    >
                      <Typography variant='p' component='p'>
                        <RiCheckboxBlankCircleFill size={10} />
                        MLS Approved
                      </Typography>
                      <Typography variant='p' component='p'>
                        MLS #12345
                      </Typography>
                      <Button href='#' disableRipple>
                        Listing link{' '}
                      </Button>
                    </Stack>
                  </Stack>

                  <Stack
                    direction='row'
                    alignItems='center'
                    spacing={2}
                    sx={{
                      paddingBottom: { xs: 2, xl: 2 },
                    }}
                    className='status-bar'
                  >
                    <Stack direction='row' alignItems='start' spacing={1}>
                      <Box
                        variant='div'
                        component='div'
                        className='status active'
                        sx={{ textAlign: 'center' }}
                      >
                        <RiCheckboxCircleFill size={24} />

                        <Typography variant='body1' component='span'>
                          Required fields
                        </Typography>
                      </Box>
                      <Box
                        variant='div'
                        component='div'
                        className='status'
                        sx={{ textAlign: 'center' }}
                      >
                        <RiCheckboxCircleFill size={26} />

                        <Typography variant='body1' component='span'>
                          Offer pending
                        </Typography>
                      </Box>
                      <Box
                        variant='div'
                        component='div'
                        className='status'
                        sx={{ textAlign: 'center' }}
                      >
                        <RiCheckboxCircleFill size={24} />

                        <Typography variant='body1' component='span'>
                          Under Contract
                        </Typography>
                      </Box>
                      <Box
                        variant='div'
                        component='div'
                        className='status'
                        sx={{ textAlign: 'center' }}
                      >
                        <RiCheckboxCircleFill size={24} />

                        <Typography variant='body1' component='span'>
                          Close
                        </Typography>
                      </Box>
                    </Stack>
                    <Button
                      variant='contained'
                      size='small'
                      className='primary-btn-small'
                      onClick={() => setIsSubmitted(true)}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Stack
                  direction='column'
                  justifyContent='space-between'
                  alignItems='flex-end'
                  sx={{ height: '100%' }}
                  className='btn-group'
                >
                  <Button
                    variant='outlined'
                    size='small'
                    startIcon={<RiPencilFill />}
                    className='edit-btn secondary-btn-small'
                  >
                    Edit
                  </Button>
                  <Stack className='final-btn-group'>
                    <Button
                      variant='contained'
                      size='large'
                      onClick={handleBuyerOpen}
                      className='primary-btn btn'
                    >
                      +Add buyer
                    </Button>
                    {/* <Button
                    variant='outlined'
                    size='large'
                    className='outline-btn outline-success btn'
                  >
                    Buyer added
                  </Button> */}
                    <Button
                      variant='outlined'
                      size='large'
                      className='outline-btn outline-primary btn'
                    >
                      Owner info
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </>
        </Box>
      </Paper>
      <SubmittedDialogs open={isSubmitted} handleClose={handleClose} />
      <BuyerDialog
        open={isBuyerDialogOpen}
        handleClose={handleBuyerClose}
        nextStep={nextStep}
        step={step}
      />
    </>
  );
};

export default PropertyTitle;
