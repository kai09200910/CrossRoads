import React from 'react';
import { Box, Container, Paper, Stack } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListingDetails from './listingDetails';
import PropertyDetails from './propertyDetails';
import PropertyMedia from './propertyMedia';

import './listing.scss';

const steps = ['Listing details', 'Property details', 'Listing media'];

const NewListing = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ListingDetails />;
      case 1:
        return <PropertyDetails />;
      case 2:
        return <PropertyMedia />;

      default:
        break;
    }
  };

  return (
    <>
      <Paper>
        <Container maxWidth='md'>
          <Box
            sx={{
              width: '100%',
              paddingTop: { xs: 5, xl: 8 },
              paddingBottom: { xs: 5, xl: 8 },
            }}
            className='stepper-wrap'
          >
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant='caption'>Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Box
                  variant='div'
                  component='div'
                  sx={{
                    padding: { xs: 5, xl: 12 },
                  }}
                >
                  <Typography
                    sx={{ mt: 2, mb: 5, color: '#009a6c', fontSize: 22 }}
                    align='center'
                  >
                    Your property has been successfully listed.
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: { xs: 9, xl: 18 },
                  }}
                  className='listing-form-footer'
                >
                  <Button
                    variant='outlined'
                    size='large'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className='outline-btn btn'
                  >
                    Back
                  </Button>

                  <Box sx={{ flex: '1 1 auto' }} />

                  <Stack
                    spacing={{ xs: 3, sm: 5 }}
                    direction='row'
                    useFlexGap
                    className='btn-group'
                  >
                    <Button
                      variant='contained'
                      size='large'
                      className='secondary-btn btn'
                    >
                      Show required fields
                    </Button>
                    <Button
                      variant='contained'
                      size='large'
                      onClick={handleNext}
                      className='primary-btn btn'
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                  </Stack>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default NewListing;
