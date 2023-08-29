import React from 'react';

const Dashboard = React.lazy(() => import('./Dashboard'));
const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));

export const samplePagesConfigs = [
  {
    path: '/',
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
];
