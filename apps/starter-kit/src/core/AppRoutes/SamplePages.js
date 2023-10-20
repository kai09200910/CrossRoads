import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const Dashboard = React.lazy(() => import('../../modules/sample/Dashboard'));
const PropertyList = React.lazy(() =>
  import('../../modules/sample/Propertylist'),
);
const NewListing = React.lazy(() => import('../../modules/sample/Newlisting'));
const Campaigns = React.lazy(() => import('../../modules/sample/Campaigns'));
const CreateCampaign = React.lazy(() =>
  import('../../modules/sample/Campaigns/create'),
);
const Worklists = React.lazy(() => import('../../modules/sample/Worklists'));

const Contacts = React.lazy(() => import('../../modules/sample/Contacts'));

export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/my-listing',
    element: <PropertyList />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/add-new-listing',
    element: <NewListing />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/campaigns',
    element: <Campaigns />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/campaigns/create',
    element: <CreateCampaign />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/worklists',
    element: <Worklists />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/contacts',
    element: <Contacts />,
  },
];
