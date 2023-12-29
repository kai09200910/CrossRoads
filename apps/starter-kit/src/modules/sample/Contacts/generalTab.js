import React, { useState } from 'react';
import {
  Box,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  Stack,
  Checkbox,
  ListItemText,
  FormControl,
  Typography,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import TagsInput from '../common/tagsInput';
import MatchingContacts from '../common/matchingContacts';
import ReactSelect from 'react-select';

const GeneralTab = () => {
  function handleSelecetedTags(items) {}

  const names = [
    'Buyer',
    'Seller',
    'Renter',
    'Landlord',
    'Appraisal client',
    'Co-broke agent',
    'Merchant/supplier',
    'HGC Associate',
  ];

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  const options = [
    { value: 'chocolate', label: 'Jhone Smith' },
    { value: 'Robert Doe', label: 'Robert Doe' },
    { value: 'Victoria', label: 'Victoria' },
    { value: 'Joss Mackison', label: 'Joss Mackison' },
    { value: 'Merry Jane', label: 'Merry Jane' },
    { value: 'Hoper', label: 'Stan Hoper' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Box className='genral-tab'>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>First name </label>
              <TextField
                fullWidth
                id='first-name'
                label=''
                variant='outlined'
                placeholder='Enter first name'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Last name </label>
              <TextField
                fullWidth
                id='last-name'
                label=''
                variant='outlined'
                placeholder='Enter last name '
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={3}>
          {/* <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Nick name</label>
              <TextField
                fullWidth
                id='nick-name'
                label=''
                variant='outlined'
                placeholder='Enter Nick Name'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Spouse name </label>
              <TextField
                fullWidth
                id='spouse-name'
                label=''
                variant='outlined'
                placeholder='Enter Spouse Name'
              />
            </Box>
          </Grid> */}

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label> Phone </label>
              <TextField
                fullWidth
                id='phone'
                type='number'
                variant='outlined'
                placeholder='Enter phone number'
              />
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Mobile phone </label>
              <TextField
                fullWidth
                id='mobile-phone'
                type='number'
                variant='outlined'
                placeholder='Enter Mobile Phone'
              />
            </Box>
          </Grid> */}

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Email </label>
              <TextField
                fullWidth
                id='email'
                type='email'
                variant='outlined'
                placeholder='Enter email address'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box variant='div' component='div'>
              <label>Profile type </label>
              <FormControl>
                <Select
                  labelId='demo-multiple-checkbox-label'
                  id='contact-type-multiple-checkbox'
                  multiple
                  placeholder='Select Contact Type'
                  value={personName}
                  onChange={handleChange}
                  IconComponent={RiArrowDownSLine}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Tags </label>
              <TagsInput
                selectedTags={handleSelecetedTags}
                fullWidth
                variant='outlined'
                id='tags'
                name='tags'
                placeholder='Tags (type and press enter)'
                className='tag-input'
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label> Agent </label>
              <Select
                fullWidth
                id='primary-agent'
                value={value}
                defaultValue='none'
                onChange={(e) => setValue(e.target.value)}
                onFocus={(e) => setShowPlaceholder(false)}
                onClose={(e) =>
                  setShowPlaceholder(e.target.value === undefined)
                }
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem
                  key='0'
                  disabled
                  value='none'
                  className='place-holder'
                >
                  Add agent
                </MenuItem>
                <MenuItem value={10}>Primary Agent 1</MenuItem>
                <MenuItem value={20}>Primary Agent 2</MenuItem>
                <MenuItem value={30}>Primary Agent 3</MenuItem>
                <MenuItem value={10}>Primary Agent 4</MenuItem>
                <MenuItem value={20}>Primary Agent 5</MenuItem>
                <MenuItem value={30}>Primary Agent 6</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>
                Secondary Agent
                <Typography
                  variant='body1'
                  component='span'
                  className='optional-label'
                >
                  Optional
                </Typography>
              </label>
              <Select
                fullWidth
                id='secondary-agent'
                value={value}
                defaultValue='none'
                onChange={(e) => setValue(e.target.value)}
                onFocus={(e) => setShowPlaceholder(false)}
                onClose={(e) =>
                  setShowPlaceholder(e.target.value === undefined)
                }
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem
                  key='0'
                  disabled
                  value='none'
                  className='place-holder'
                >
                  Add secondary agent
                </MenuItem>
                <MenuItem value={10}>Secondary Agent 1</MenuItem>
                <MenuItem value={20}>Secondary Agent 2</MenuItem>
                <MenuItem value={30}>Secondary Agent 3</MenuItem>
                <MenuItem value={10}>Secondary Agent 4</MenuItem>
                <MenuItem value={20}>Secondary Agent 5</MenuItem>
                <MenuItem value={30}>Secondary Agent 6</MenuItem>
              </Select>
            </Box>
          </Grid>

          {/* <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Office location </label>
              <TextField
                fullWidth
                id='care-of'
                label=''
                variant='outlined'
                placeholder='Add location '
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Website </label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Enter website URL'
              />
            </Box>
          </Grid> */}

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Care of</label>
              <TextField
                fullWidth
                id='care-of'
                label=''
                variant='outlined'
                placeholder='Add care of'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='div' component='div'>
              <label>Source</label>
              <TextField
                fullWidth
                id='outlined-basic'
                label=''
                variant='outlined'
                placeholder='Add source'
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box variant='div' component='div'>
              <label>Related contact </label>
              <ReactSelect
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={true}
                isClearable={true}
                className='react-select-wrap'
                placeholder='Search for contact record'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box variant='div' component='div'>
              <label>Relationship type </label>
              <Select
                fullWidth
                id='secondary-agent'
                value={value}
                defaultValue='none'
                onChange={(e) => setValue(e.target.value)}
                onFocus={(e) => setShowPlaceholder(false)}
                onClose={(e) =>
                  setShowPlaceholder(e.target.value === undefined)
                }
                IconComponent={RiArrowDownSLine}
              >
                <MenuItem
                  key='0'
                  disabled
                  value='none'
                  className='place-holder'
                >
                  Select
                </MenuItem>
                <MenuItem value={10}>Type 1</MenuItem>
                <MenuItem value={20}>Type 2</MenuItem>
                <MenuItem value={30}>Type 3</MenuItem>
                <MenuItem value={10}>Type 4</MenuItem>
                <MenuItem value={20}>Type 5</MenuItem>
                <MenuItem value={30}>Type 6</MenuItem>
              </Select>
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <Box variant='div' component='div'>
              <label>Matching contacts</label>

              <MatchingContacts />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={6}>
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Switch
                    sx={{ marginRight: 1 }}
                    className='ios-switch-custom'
                    focusVisibleClassName='.Mui-focusVisible'
                    disableRipple
                    defaultChecked
                  />
                }
                label=''
              />
              <label>Subscribe to emails </label>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GeneralTab;
