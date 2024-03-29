import React from 'react';
const Dashboard = React.lazy(() => import('./Dashboard'));
// const Salespipeline = React.lazy(() => import('./Salespipeline'));
const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));
const Campaigns = React.lazy(() => import('./Campaigns'));

export const samplePagesConfigs = [
  // {
  //   path: '/',
  //   element: <Dashboard />,
  // },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/my-listing',
    element: <Page1 />,
  },
  {
    path: '/add-new-listing',
    element: <Page2 />,
  },
  {
    path: '/campaigns',
    element: <Campaigns />,
  },
];
