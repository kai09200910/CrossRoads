import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const Dashboard = React.lazy(() => import('../../modules/sample/Dashboard'));
const Page1 = React.lazy(() => import('../../modules/sample/Page1'));
const Page2 = React.lazy(() => import('../../modules/sample/Page2'));

export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/my-listing',
    element: <Page1 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/add-new-listing',
    element: <Page2 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboard',
    element: <Dashboard />,
  },
];
