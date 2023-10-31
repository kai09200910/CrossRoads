import { BiAlignLeft } from 'react-icons/bi';
import {
  RiContactsBook2Line,
  RiFileAddLine,
  RiFileList2Line,
  RiLayoutGridFill,
  RiMailLine,
  RiSearchLine,
  // RiListCheck3,
} from 'react-icons/ri';

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
        icon: <RiLayoutGridFill />,
        url: '/dashboard',
      },
      {
        id: 'propertylist',
        title: 'listings',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        icon: <RiSearchLine />,
        url: '/my-listing',
      },
      {
        id: 'page-2',
        title: 'Add new listing',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        icon: <RiFileAddLine />,
        url: '/add-new-listing',
      },
      {
        id: 'campaigns',
        title: 'Add new campaigns',
        messageId: 'sidebar.sample.campaigns',
        type: 'item',
        icon: <RiMailLine />,
        url: '/campaigns',
      },
      {
        id: 'worklists',
        title: 'Add new worklists',
        messageId: 'Worklists',
        type: 'item',
        icon: <RiFileList2Line />,
        url: '/worklists',
      },
      {
        id: 'contacts',
        title: 'Add new contact',
        messageId: 'Contacts',
        type: 'item',
        icon: <RiContactsBook2Line />,
        url: '/contacts',
      },
    ],
  },
];
export default routesConfig;
