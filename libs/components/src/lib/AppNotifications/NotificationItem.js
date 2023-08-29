import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const NotificationItem = ({ item }) => {
  return (
    <Stack
      direction='row'
      spacing={4}
      justifyContent='space-between'
      alignItems='center'
      sx={{
        padding: { xs: 5, xl: 5 },
      }}
    >
      <NotificationsNoneIcon
        sx={{
          marginRight: { xs: 4, xl: 4 },
        }}
      />
      {item}
      <Typography variant='body1' component='span' className=''>
        1d
      </Typography>
    </Stack>
  );
};

export default NotificationItem;

NotificationItem.propTypes = {
  item: PropTypes.object.isRequired,
};
