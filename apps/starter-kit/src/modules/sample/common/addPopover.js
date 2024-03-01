import React from 'react';
import {
  Box,
  Button,
  Typography,
  Popover,
  TextField,
  Stack,
} from '@mui/material';
import { RiAddLine } from 'react-icons/ri';

const AddPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <Button
        variant='contained'
        size='small'
        autoFocus
        className='primary-btn secondary-btn'
        aria-describedby={id}
        onClick={handleClick}
      >
        <RiAddLine size={18} />
        Add
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        className='add-note-modal'
      >
        <Box className='add-note-modal-inner'>
          <Typography
            variant='h4'
            component='h4'
            sx={{
              paddingBottom: { xs: 3, xl: 3 },
            }}
          >
            Add note
          </Typography>
          <TextField
            fullWidth
            id='outlined-basic'
            label=''
            variant='outlined'
            placeholder='Type note here'
            multiline
            rows={4}
            maxRows={4}
          />
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={2}
            mt={4}
          >
            <Button
              variant='contained'
              size='medium'
              autoFocus
              className='primary-btn-small'
              onClick={handleClose}
              
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

export default AddPopover;
