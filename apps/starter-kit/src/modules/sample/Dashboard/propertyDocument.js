import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  CircularProgress,
  TextField,
} from '@mui/material';
import {
  // RiArrowDownSLine,
  // RiPencilFill,
  RiCheckboxCircleFill,
  RiAddCircleFill,
  RiErrorWarningFill,
} from 'react-icons/ri';
import ErrorDialog from './dailogs/errorDialog';
import ListingagreementDialog from './dailogs/listingagreementDialog';

const MediaTable = () => {
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const [isBuyerDialogOpen, setIsBuyerDialogOpen] = useState(false);

  const handleOpen = () => {
    setIsErrorDialogOpen(true);
  };
  const handleClose = () => {
    setIsErrorDialogOpen(false);
  };

  const handleBuyerOpen = () => {
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
          className='listing-doc-wrapper'
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
            sx={{
              paddingBottom: { xs: 2, xl: 3 },
            }}
            className='title-wrap'
          >
            <Typography variant='h4' component='h4'>
              Listing Documents
            </Typography>
            <Typography variant='body1' component='p' className='progress-area'>
              {/* <CircularProgressWithLabel value={progress} /> */}
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant='determinate' value={50} />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                ></Box>
              </Box>
              <Typography
                variant='body1'
                component='span'
                className='optional-label'
              >
                2/3
              </Typography>
              Complete
            </Typography>
          </Stack>
          <Stack
            spacing={{ xs: 1, sm: 4 }}
            direction='row'
            useFlexGap
            alignItems='center'
            className='add-doc-btn-grp'
          >
            {/* <Box
              variant='div'
              component='div'
              className='btn add-doc-btn doc-added upload-wrapper'
            >
              <TextField type='file' className='upload'></TextField>
              <Typography variant='body1' component='span' className=''>
                <RiCheckboxCircleFill size={20} />
                KYC Documents
              </Typography>
            </Box> */}

            <Button
              variant='contained'
              size='large'
              className='btn add-doc-btn error'
              startIcon={<RiErrorWarningFill />}
              onClick={() => handleOpen()}
            >
              KYC Documents
            </Button>
            <Box
              variant='div'
              component='div'
              className='btn add-doc-btn doc-added upload-wrapper'
              onClick={handleBuyerOpen}
            >
              {/* <TextField type='file' className='upload'></TextField> */}
              <Typography variant='body1' component='span' className=''>
                <RiCheckboxCircleFill size={20} />
                Listing Agreement
              </Typography>
            </Box>
            {/* <Button
              variant='contained'
              size='large'
              className='btn add-doc-btn doc-added'
              startIcon={<RiCheckboxCircleFill />}
            >
              Listing Agreement
            </Button> */}
            <Box
              variant='div'
              component='div'
              className='btn add-doc-btn upload-wrapper'
            >
              <TextField type='file' className='upload'></TextField>
              <Typography variant='body1' component='span' className=''>
                <RiAddCircleFill size={20} />
                Sales Agreement
              </Typography>
            </Box>
            <Box
              variant='div'
              component='div'
              className='btn add-doc-btn upload-wrapper other-doc'
            >
              <TextField type='file' className='upload'></TextField>
              <Typography variant='body1' component='span' className=''>
                <RiAddCircleFill size={20} />
                Other
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
      <ErrorDialog open={isErrorDialogOpen} handleClose={handleClose} />
      <ListingagreementDialog
        open={isBuyerDialogOpen}
        handleClose={handleBuyerClose}
      />
    </>
  );
};

export default MediaTable;
