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
    { value: 'Jhone Smith', label: 'Jhone Smith' },
    { value: 'Robert Doe', label: 'Robert Doe' },
    { value: 'Victoria', label: 'Victoria' },
    { value: 'Joss Mackison', label: 'Joss Mackison' },
    { value: 'Merry Jane', label: 'Merry Jane' },
    { value: 'Hoper', label: 'Stan Hoper' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Box className='genral-tab tab-content-wrapper'>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                John
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                First name
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                Smith
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Last name
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                123-456-7891
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Primary phone
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                242-324-1356
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Additional phone
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                john.smith@example.com
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Email
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
               Co-broke Agent
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
              Profile type
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                property, agent, bahamas
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Tags
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                Fred Ryan
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Primary Agent
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                Jhon Doe
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Secondary Agent
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                value for care of
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Care of
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                value for Source
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Source
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                Merry Jane
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Related contact
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                Spouse
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Relationship type
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box variant='Box' component='Box' className='field-value'>
              <Typography variant='body1' component='span' className=''>
                xyz Agency
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Company name
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GeneralTab;
