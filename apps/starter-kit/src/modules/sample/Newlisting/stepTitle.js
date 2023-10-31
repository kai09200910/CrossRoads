import React from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Checkbox,
  MenuItem,
  OutlinedInput,
  ListItemText,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { RiPencilFill } from 'react-icons/ri';

const Steptitle = ({
  isEditClicked,
  setIsEditClicked,
  personName,
  person,
  setPerson,
  setPersonName,
}) => {
  const names = [
    'Agent 1',
    'Agent 2',
    'Agent 3',
    'Agent 4',
    'Agent 5',
    'Agent 6',
    'Agent 7',
    'Agent 8',
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <Box variant='div' component='div' className='step-title'>
        <Typography variant='h2' component='h2'>
          Listing Details
        </Typography>
        Agent:{''}
        <IconButton
          aria-label='edit'
          onClick={() => {
            setIsEditClicked(true);
          }}
        >
          <RiPencilFill />
        </IconButton>
        {isEditClicked ? (
          <>
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              spacing={2}
              className='agent-selection'
            >
              <Grid container spacing={5} mt={0}>
                <Grid item xs={12} sm={6} md={5}>
                  <Select
                    id='demo-multiple-checkbox'
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => selected.join(', ')}
                    className='multiselect-input'
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />

                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Button
                  variant='text'
                  onClick={() => {
                    setPerson(personName);
                    setIsEditClicked(false);
                  }}
                  size='small'
                  className='small-btn'
                >
                  Save
                </Button>
                <Button
                  variant='text'
                  onClick={() => {
                    setIsEditClicked(false);
                  }}
                  size='small'
                  className='small-btn'
                >
                  Cancel
                </Button>
              </Grid>
            </Stack>
          </>
        ) : (
          <>
            <Typography
              variant='p'
              component='p'
              className='title-agent-detail'
            >
              <Typography
                variant='body1'
                component='span'
                className='agent-name'
              >
                {person.length > 0
                  ? person?.join(', ')
                  : 'No agent selected yet'}
              </Typography>
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default Steptitle;
