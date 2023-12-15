import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const Dashboard = React.lazy(() => import('../../modules/sample/Dashboard'));

const PropertyList = React.lazy(() =>
  import('../../modules/sample/Propertylist'),
);
const AdvanceSearch = React.lazy(() =>
  import('../../modules/sample/Propertylist/advanceSearch'),
);
const NewListing = React.lazy(() => import('../../modules/sample/Newlisting'));
const Campaigns = React.lazy(() => import('../../modules/sample/Campaigns'));
const CreateCampaign = React.lazy(() =>
  import('../../modules/sample/Campaigns/create'),
);
const Worklists = React.lazy(() => import('../../modules/sample/Worklists'));

const Contacts = React.lazy(() => import('../../modules/sample/Contacts'));
const ContactDetails = React.lazy(() =>
  import('../../modules/sample/Contacts/contactDetails'),
);
const MyContacts = React.lazy(() =>
  import('../../modules/sample/Contacts/myContacts'),
);
const ListingalertsTab = React.lazy(() =>
  import(
    '../../modules/sample/Contacts/contactDetails/Otherdetails/listingalertsTab'
  ),
);

// import MyContacts from '../../modules/sample/Contacts/myContacts';
// import ListingalertsTab from '../../modules/sample/Contacts/contactDetails/Otherdetails/listingalertsTab';

const Document = React.lazy(() => import('../../modules/sample/Document'));

const HelpDocument = React.lazy(() =>
  import('../../modules/sample/Document/helpDocuments'),
);

const SharedDocument = React.lazy(() =>
  import('../../modules/sample/Document/sharedDocuments'),
);
// import Document from '../../modules/sample/Document';
// import HelpDocument from '../../modules/sample/Document/helpDocuments';
// import SharedDocument from '../../modules/sample/Document/sharedDocuments';

export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/my-listing',
    element: <PropertyList />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/advanced-search',
    element: <AdvanceSearch />,
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
  {
    permittedRole: RoutePermittedRole.User,
    path: '/contacts/details',
    element: <ContactDetails />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/my-contacts',
    element: <MyContacts />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/listing-alert',
    // element: <ListingAlert />,
    element: <ListingalertsTab />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/documents',
    element: <Document />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/shared-documents',
    element: <SharedDocument />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/help-documents',
    element: <HelpDocument />,
  },
];
