import React from 'react';
import PropsTypes from 'prop-types';
import SidebarBGWrapper from './SidebarBGWrapper';
import SidebarWrapper from './SidebarWrapper';
import { Button } from '@mui/material';

const MainSidebar = ({ children }) => {
  return (
    <SidebarWrapper className='app-sidebar sidebar-wrapper'>
      <SidebarBGWrapper>{children}</SidebarBGWrapper>
    </SidebarWrapper>
  );
};

export default MainSidebar;
MainSidebar.propTypes = {
  children: PropsTypes.node,
};
