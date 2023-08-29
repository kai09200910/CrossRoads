import { BiAlignLeft } from 'react-icons/bi';

const routesConfig = [
  {
    id: 'app',
    title: 'listing',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        messageId: 'sidebar.sample.dashboard',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/dashboard',
      },
      {
        id: 'page-1',
        title: 'My listings',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/my-listing',
      },
      {
        id: 'page-2',
        title: 'Add new listing',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/add-new-listing',
      },
    ],
  },
];
export default routesConfig;
