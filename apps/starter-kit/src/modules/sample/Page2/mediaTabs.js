import * as React from 'react';
import { styled } from '@mui/system';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import Tab, { tabClasses } from '@mui/base/Tab';

const MediaTabs = () => {
  return (
    <>
      <Tabs defaultValue={0}>
        <StyledTabsList>
          <StyledTab value={0}>Photos</StyledTab>
          <StyledTab value={1}>Videos</StyledTab>
          <StyledTab value={2}>3D Tours</StyledTab>
          <StyledTab value={3}>Websites </StyledTab>
          <StyledTab value={4}>Brohures </StyledTab>
          {/* <StyledTab value={5}>Language</StyledTab> */}
        </StyledTabsList>
        <StyledTabPanel value={0}>Photos 123</StyledTabPanel>
        <StyledTabPanel value={1}>Videos</StyledTabPanel>
        <StyledTabPanel value={2}>3D Tours</StyledTabPanel>
        <StyledTabPanel value={3}>Websites</StyledTabPanel>
        <StyledTabPanel value={4}>Brohures</StyledTabPanel>
      </Tabs>
      {/* <Tabs value={value} onChange={handleChange} aria-label='nav tabs example'>
        <LinkTab label='Page One' href='/drafts' />
        <LinkTab label='Page Two' href='/trash' />
        <LinkTab label='Page Three' href='/spam' />
      </Tabs> */}
    </>
  );
};

export default MediaTabs;

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTab = styled(Tab)`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #292929;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 4px 4px;
  border: none;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  transition: all ease 0.3s;
  &:hover {
    background-color: #4381fd;
    color: #fff;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #4381fd;
  }

  &.${tabClasses.selected} {
    background-color: #2871ff;
    color: #fff;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  `,
);

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 400px;
  width: 550px;
  background-color: #fff;
  border-radius: 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 1px 10px rgb(41 41 41 / 13%)
  `,
);
