import React from 'react';
import { IconButton } from '@mui/material';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import NotificationItem from './NotificationItem';

const options = [
  'Listing admin has request an update of documents for your listing',
  'Listing admin has request an update of documents for your listing',
  'Listing admin has request an update of documents for your listing',
  'Listing admin has request an update of documents for your listing',
  'Listing admin has request an update of documents for your listing',
];

const ITEM_HEIGHT = 350;
const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    border: '1px solid #EFEFEF',
  };

  return (
    <>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <NotificationsNoneIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '56ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={handleClose}
            spacing={1}
            className='notification-list-wrap'
            Divider
            style={styles}
          >
            <NotificationItem item={option} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Notifications;
