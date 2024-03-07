import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  Stack,
  IconButton,
  FormControl,
  Checkbox,
  ListItemText,
  Button,
} from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import CloseIcon from '@mui/icons-material/Close';

const islandtype = [
  'Island 1 abcd',
  'Island 2',
  'Island 3 efgh',
  'Island 4',
  'Island 5',
  'Island 6',
  'Island 7 wxyz',
];

const transactiontype = [
  'MLS Exclusive',
  'General',
  'Co-broke',
  'Exclusive (not on MLS)',
];

const listingtype = ['For Sale', 'For Rent', 'Both'];

const listingstatus = ['Listed', 'Sold', 'Under Contract', 'Submit Transfer'];

const Filters = (props) => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  const handleClose = () => {
    props.toggleVisibility();
  };

  const [islandName, setIslandName] = React.useState([]);
  const handleislandChange = (event) => {
    const {
      target: { value },
    } = event;
    setIslandName(typeof value === 'string' ? value.split(',') : value);
  };

  const [transactionType, setTransactionType] = React.useState([]);
  const handletransactiontypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setTransactionType(typeof value === 'string' ? value.split(',') : value);
  };

  const [listingType, setListingType] = React.useState([]);
  const handlelistingtypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setListingType(typeof value === 'string' ? value.split(',') : value);
  };

  const [listingStatus, setListingStatus] = React.useState([]);
  const handlelistingstatusChange = (event) => {
    const {
      target: { value },
    } = event;
    setListingStatus(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <Box variant='div' component='div' className='listing-fillter'>
        <Stack
          direction='row'
          // justifyContent='space-between'
          alignItems='center'
          className='fillter-menu-list'
          gap={3}
        >
          <Box variant='div' component='div' className='multiple-selection'>
            <label>Transaction Type </label>
            <FormControl>
              <Select
                labelId='demo-multiple-checkbox-label'
                id='contact-type-multiple-checkbox'
                multiple
                placeholder='Select Contact Type'
                value={transactionType}
                onChange={handletransactiontypeChange}
                IconComponent={RiArrowDownSLine}
                renderValue={(selected) => selected.join(', ')}
              >
                {transactiontype.map((transactiontype) => (
                  <MenuItem key={transactiontype} value={transactiontype}>
                    <Checkbox
                      checked={transactionType.indexOf(transactiontype) > -1}
                    />
                    <ListItemText primary={transactiontype} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box variant='div' component='div' className='multiple-selection'>
            <label>Island </label>
            <FormControl>
              <Select
                labelId='demo-multiple-checkbox-label'
                id='contact-type-multiple-checkbox'
                multiple
                placeholder='Select Contact Type'
                value={islandName}
                onChange={handleislandChange}
                IconComponent={RiArrowDownSLine}
                renderValue={(selected) => selected.join(', ')}
              >
                {islandtype.map((islandname) => (
                  <MenuItem key={islandname} value={islandname}>
                    <Checkbox checked={islandName.indexOf(islandname) > -1} />
                    <ListItemText primary={islandname} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box variant='div' component='div' className='area'>
            <label>Area</label>
            <Select
              fullWidth
              id='listing-type-1'
              value={value}
              defaultValue='none'
              onChange={(e) => setValue(e.target.value)}
              onFocus={(e) => setShowPlaceholder(false)}
              onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
              IconComponent={RiArrowDownSLine}
            >
              <MenuItem key='0' disabled value='none' className='place-holder'>
                Select Area
              </MenuItem>
              <MenuItem value={5}>Sale </MenuItem>
              <MenuItem value={6}>Rent</MenuItem>
            </Select>
          </Box>
          <Box variant='div' component='div' className='multiple-selection'>
            <label>Listing type </label>
            <FormControl>
              <Select
                labelId='demo-multiple-checkbox-label'
                id='contact-type-multiple-checkbox'
                multiple
                placeholder='Select Contact Type'
                value={listingType}
                onChange={handlelistingtypeChange}
                IconComponent={RiArrowDownSLine}
                renderValue={(selected) => selected.join(', ')}
              >
                {listingtype.map((listingtype) => (
                  <MenuItem key={listingtype} value={listingtype}>
                    <Checkbox checked={listingType.indexOf(listingtype) > -1} />
                    <ListItemText primary={listingtype} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box variant='div' component='div' className='multiple-selection bed-bath-selection'>
            <label>Beds & Baths </label>
            <FormControl>
              <Select
                labelId='demo-multiple-checkbox-label'
                id='contact-type-multiple-checkbox'
                multiple
                placeholder='Select Contact Type'
                value={listingStatus}
                onChange={handlelistingstatusChange}
                IconComponent={RiArrowDownSLine}
                renderValue={(selected) => selected.join(', ')}
              >
                {/* {listingstatus.map((listingstatus) => (
                  <MenuItem key={listingstatus} value={listingstatus}>
                    <Checkbox
                      checked={listingStatus.indexOf(listingstatus) > -1}
                    />
                    <ListItemText primary={listingstatus} />
                  </MenuItem>
                ))} */}
              
            <Box variant='div' component='div' className='bed-bath-menu'>
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
              >
                <Box variant='div' component='div' className='bed-selection'>
                  <label>Beds</label>
                  <Select
                    fullWidth
                    id='beds'
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
                    <MenuItem value={1}> 1 +</MenuItem>
                    <MenuItem value={2}> 2 +</MenuItem>
                    <MenuItem value={3}> 3+</MenuItem>
                    <MenuItem value={4}> 4+</MenuItem>
                    <MenuItem value={5}> 5+</MenuItem>
                    <MenuItem value={6}> 6+</MenuItem>
                    <MenuItem value={7}> 7+</MenuItem>
                    <MenuItem value={8}> 8+</MenuItem>
                    <MenuItem value={9}> 9+</MenuItem>
                    <MenuItem value={10}> 10+</MenuItem>
                  </Select>
                </Box>
                <Box variant='div' component='div' className='bath-selection'>
                  <label>Baths</label>
                  <Select
                    fullWidth
                    id='baths'
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
                    <MenuItem value={1}> 1 +</MenuItem>
                    <MenuItem value={2}> 2 +</MenuItem>
                    <MenuItem value={3}> 3+</MenuItem>
                    <MenuItem value={4}> 4+</MenuItem>
                    <MenuItem value={5}> 5+</MenuItem>
                    <MenuItem value={6}> 6+</MenuItem>
                    <MenuItem value={7}> 7+</MenuItem>
                    <MenuItem value={8}> 8+</MenuItem>
                    <MenuItem value={9}> 9+</MenuItem>
                    <MenuItem value={10}> 10+</MenuItem>
                  </Select>
                </Box>
              </Stack>
              <Button
                variant='contained'
                size='large'
                autoFocus
                className='primary-btn btn bed-bath-apply-btn'
              >
                Apply
              </Button>
            </Box>
            </Select>
            </FormControl>
          </Box>
          <Box variant='div' component='div' className='multiple-selection'>
            <label>Listing status </label>
            <FormControl>
              <Select
                labelId='demo-multiple-checkbox-label'
                id='contact-type-multiple-checkbox'
                multiple
                placeholder='Select Contact Type'
                value={listingStatus}
                onChange={handlelistingstatusChange}
                IconComponent={RiArrowDownSLine}
                renderValue={(selected) => selected.join(', ')}
              >
                {listingstatus.map((listingstatus) => (
                  <MenuItem key={listingstatus} value={listingstatus}>
                    <Checkbox
                      checked={listingStatus.indexOf(listingstatus) > -1}
                    />
                    <ListItemText primary={listingstatus} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box variant='div' component='div' className='sort-by-switch'>
            <label>Sort by </label>
            <FormControlLabel
              sx={{
                height: '47px',
              }}
              control={
                <Switch
                  sx={{ m: 1 }}
                  className='ios-switch-custom fillter-switch'
                  focusVisibleClassName='.Mui-focusVisible'
                  disableRipple
                />
              }
              label=''
            />
          </Box>
        </Stack>
        <IconButton
          edge='start'
          color='inherit'
          onClick={handleClose}
          aria-label='close'
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Filters;
