import { RiLayoutGridFill } from 'react-icons/ri';
import { BsFillFolderFill } from 'react-icons/bs';
import { HiCurrencyDollar, HiSearch } from 'react-icons/hi';
import { IoMdContact } from 'react-icons/io';

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
        id: 'salespipeline',
        title: 'salespipeline',
        messageId: 'Salespipeline',
        type: 'item',
        icon: <RiLayoutGridFill />,
        url: '/salespipeline',
      },
      {
        id: 'listing',
        title: 'listing',
        messageId: 'Listings',
        type: 'collapse',
        icon: <HiSearch size={22} />,
        children: [
          {
            id: 'my-listings',
            title: 'My listings ',
            messageId: 'My listings',
            type: 'item',
            url: '/listing',
          },
          {
            id: 'my-listings',
            title: 'All listings',
            messageId: 'All listings',
            type: 'item',
            url: '/my-listing',
          },
          {
            id: 'add-listing',
            title: 'Add listing',
            messageId: 'Add listing',
            type: 'item',
            url: '/add-new-listing',
          },
          {
            id: 'worklists',
            title: 'Add new worklists',
            messageId: 'Worklists',
            type: 'item',
            url: '/worklists',
          },
          {
            id: 'campaigns',
            title: 'Add new campaigns',
            messageId: 'sidebar.sample.campaigns',
            type: 'item',
            url: '/campaigns',
          },
        ],
      },

      {
        id: 'contacts',
        title: 'Contacts',
        messageId: 'Contacts',
        type: 'collapse',
        icon: <IoMdContact size={22} />,
        children: [
          {
            id: 'all-contacts',
            title: 'All contacts ',
            messageId: 'All contacts',
            type: 'item',
            url: '/contacts',
          },
          {
            id: 'my-contacts',
            title: 'My contacts',
            messageId: 'My contacts',
            type: 'item',
            url: '/my-contacts',
          },
          {
            id: 'alert-listing',
            title: 'Contact Listing alerts',
            messageId: 'Listing alerts',
            type: 'item',
            url: '/listing-alert',
          },
        ],
      },

      {
        id: 'document',
        title: 'Document',
        messageId: 'Document',
        type: 'collapse',
        icon: <BsFillFolderFill size={17} />,
        children: [
          {
            id: 'My-documents',
            title: 'My documents ',
            messageId: 'My documents',
            type: 'item',
            url: '/documents',
          },
          {
            id: 'shared-documents ',
            title: 'shared documents ',
            messageId: 'Shared documents ',
            type: 'item',
            url: '/shared-documents ',
          },
          {
            id: 'help-documents ',
            title: 'Help documents',
            messageId: 'Help documents',
            type: 'item',
            url: '/help-documents',
          },
        ],
      },

      {
        id: 'accounting',
        title: 'Accounting',
        messageId: 'Accounting',
        type: 'collapse',
        icon: <HiCurrencyDollar size={22} />,
        children: [
          {
            id: 'my-transfers',
            title: 'My Transfers ',
            messageId: 'My Transfers ',
            type: 'item',
            url: '/my-transfers',
          },
          {
            id: 'add-transfers',
            title: 'Add Transfers ',
            messageId: 'Add Transfers  ',
            type: 'item',
            url: '/add-transfers',
          },
        ],
      },
    ],
  },
];
export default routesConfig;
