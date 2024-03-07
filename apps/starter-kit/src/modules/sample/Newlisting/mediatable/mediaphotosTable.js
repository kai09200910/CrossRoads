import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import RowOrderIcon from '../../../../assets/icon/table-row-ordering.svg';
import { ReactComponent as ListViewIcon } from '../../../../assets/icon/list-view.svg';
import { ReactComponent as GridViewIcon } from '../../../../assets/icon/grid-view.svg';
import {
  RiAddLine,
  RiCheckboxBlankCircleFill,
  RiDeleteBinLine,
} from 'react-icons/ri';
import {
  SortableContainer,
  SortableHandle,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
import AppList from '@crema/components/AppList';
import { useDropzone } from 'react-dropzone';
import UploadModern from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/UploadModern';
import FileRow from '../../../../../../../libs/modules/src/lib/thirdParty/reactDropzone/components/FileRow';
import EmptyTable from './emptyTable';

const userColumns = [
  { id: 'order', label: 'Order', minWidth: 40 },
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'size', label: 'Size' },
  {
    id: 'date',
    label: 'Date',
    align: 'left',
  },
  {
    id: 'displayonsite ',
    label: 'Display on site ',
    align: 'left',
  },
  {
    id: 'action',
    label: '',
    minWidth: 100,
    align: 'center',
  },
];

const adminColumns = [
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'size', label: 'Size' },
  { id: 'approval', label: 'Approval' },
];

function createData(order, name, size, date, displayonsite, action) {
  return { order, name, size, date, displayonsite, action };
}

const rows = [
  createData('', 'House.jpg', '500kb', '05/03/24', '', ''),
  createData('', 'House.jpg', '1mb', '05/03/24', '', ''),
  createData('', 'House.jpg', '5mb', '05/03/24', '', ''),
  createData('', 'House.jpg', '2mb', '05/03/24', '', ''),
  createData('', 'House.jpg', '4mb', '05/03/24', '', ''),
  createData('', 'House.jpg', '3mb', '05/03/24', '', ''),
];

const DragHandle = SortableHandle(({ style }) => (
  <span style={{ ...style, ...{ cursor: 'move' } }}>
    {' '}
    <img src={RowOrderIcon} alt='Icon' />{' '}
  </span>
));

const Row1 = ({ data, ...other }) => {
  return (
    <>
      <TableRow hover role='checkbox' tabIndex={-1} {...other}>
        <TableCell>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={4}
          >
            <Box className='img-wrap'>
              <img
                src='../../../assets/images/photo-house.png'
                alt='email-photo'
              />
            </Box>
            <Typography variant='span' component='span'>
              {data.name}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell className='size'>
          <Typography variant='p' component='p'>
            {data.size}
          </Typography>
        </TableCell>
        <TableCell className='size'>
          <FormControlLabel
            control={
              <Switch
                sx={{ m: 1 }}
                className='ios-switch-custom small'
                focusVisibleClassName='.Mui-focusVisible'
                disableRipple
                defaultChecked
                //onClick={() => setIsSubmitted(true)}
              />
            }
            label=''
          />
        </TableCell>
      </TableRow>
    </>
  );
};
const Row = SortableElement(({ data, ...other }) => {
  return (
    <>
      <TableRow hover role='checkbox' tabIndex={-1} {...other}>
        <TableCell style={{ width: '5%' }}>
          <DragHandle />
        </TableCell>
        <TableCell>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={4}
          >
            <Box className='img-wrap'>
              <img
                src='../../../assets/images/photo-house.png'
                alt='email-photo'
              />
            </Box>
            <Typography variant='span' component='span'>
              {data.name}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell className='size'>
          <Typography variant='p' component='p'>
            <RiCheckboxBlankCircleFill size={6} className='green' />
            {data.size}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant='span' component='span'>
            {data.date}
          </Typography>
        </TableCell>
        <TableCell>
          {' '}
          <FormControlLabel
                      control={
                        <Switch
                          sx={{ m: 1 }}
                          className='ios-switch-custom'
                          focusVisibleClassName='.Mui-focusVisible'
                          disableRipple
                        />
                      }
                      label=''
                    />
        </TableCell>
        <TableCell className='action'>
          {/* <RiDeleteBinLine size={24} /> */}
          <Button
            variant='outlined'
            size='small'
            className='icon-small-btn'
            // onClick={handleDeleteOpen}
          >
            <RiDeleteBinLine size={20} />
          </Button>{' '}
        </TableCell>
      </TableRow>
    </>
  );
});

const MediaphotoTable = ({ isAdmin = false }) => {
  // console.log('isAdmin', isAdmin);
  // const [isGridView, setIsGridView] = React.useState(false);
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [peoples, setPeoples] = React.useState([
  //   {
  //     id: 1,
  //     name: 'House.jpg',
  //     size: '500kb',
  //     date: '05/03/24',
  //   },
  //   {
  //     id: 2,
  //     name: 'House.jpg',
  //     size: '1mb',
  //     date: '05/03/24',
  //   },
  //   {
  //     id: 3,
  //     name: 'House.jpg',
  //     size: '2mb',
  //     date: '05/03/24',
  //   },
  //   {
  //     id: 4,
  //     name: 'House.jpg',
  //     size: '3mb',
  //     date: '05/03/24',
  //   },
  //   {
  //     id: 5,
  //     name: 'House.jpg',
  //     size: '4mb',
  //     date: '05/03/24',
  //   },
  //   {
  //     id: 6,
  //     name: 'House.jpg',
  //     size: '5mb',
  //     date: '05/03/24',
  //   },
  // ]);
  // const [columns, setColumns] = React.useState(userColumns);
  // React.useEffect(() => {
  //   setColumns(isAdmin ? adminColumns : userColumns);
  // }, [isAdmin]);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  // const TableBodySortable = SortableContainer(
  //   ({ children, displayRowCheckbox }) => (
  //     <TableBody displayRowCheckbox={displayRowCheckbox}>{children}</TableBody>
  //   ),
  // );
  // TableBodySortable.muiName = 'TableBody';
  // const onSortEnd = ({ oldIndex, newIndex }) => {
  //   setPeoples(arrayMove(peoples, oldIndex, newIndex));
  // };
  // return (
  //   <Box
  //     sx={{ width: '100%', overflow: 'hidden' }}
  //     className='media-table-wrapper table-wrapper'
  //   >
  //     {!isAdmin ? (
  //       <Stack
  //         direction='row'
  //         justifyContent='flex-start'
  //         alignItems='center'
  //         spacing={4}
  //         className='view-action'
  //       >
  //         <IconButton
  //           aria-label='list'
  //           disableRipple
  //           className={!isGridView ? 'active' : ''}
  //           onClick={() => setIsGridView(false)}
  //         >
  //           <ListViewIcon />
  //         </IconButton>
  //         <IconButton
  //           aria-label='grid'
  //           disableRipple
  //           className={isGridView ? 'active' : ''}
  //           onClick={() => setIsGridView(true)}
  //         >
  //           <GridViewIcon />
  //         </IconButton>
  //       </Stack>
  //     ) : null}
  //     {isGridView ? (
  //       <>
  //         <Box className='mediatable-gridlist'>
  //           <Stack
  //             direction='row'
  //             justifyContent='flex-start'
  //             alignItems='flex-start'
  //             // spacing={2}
  //             className='gridlist'
  //           >
  //             <Stack
  //               direction='column'
  //               justifyContent='space-evenly'
  //               alignItems='center'
  //               spacing={1}
  //               className='data-block'
  //             >
  //               <Box className='img-wrap'>
  //                 <img
  //                   src='../../../assets/images/photo-house.png'
  //                   alt='email-photo'
  //                 />
  //               </Box>
  //               <Typography variant='p' component='p'>
  //                 House.jpg
  //               </Typography>
  //               <Typography variant='body1' component='span'>
  //                 500x345
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction='column'
  //               justifyContent='space-evenly'
  //               alignItems='center'
  //               spacing={1}
  //               className='data-block'
  //             >
  //               <Box className='img-wrap'>
  //                 <img
  //                   src='../../../assets/images/photo-house.png'
  //                   alt='email-photo'
  //                 />
  //               </Box>
  //               <Typography variant='p' component='p'>
  //                 House.jpg
  //               </Typography>
  //               <Typography variant='body1' component='span'>
  //                 500x345
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction='column'
  //               justifyContent='space-evenly'
  //               alignItems='center'
  //               spacing={1}
  //               className='data-block'
  //             >
  //               <Box className='img-wrap'>
  //                 <img
  //                   src='../../../assets/images/photo-house.png'
  //                   alt='email-photo'
  //                 />
  //               </Box>
  //               <Typography variant='p' component='p'>
  //                 House.jpg
  //               </Typography>
  //               <Typography variant='body1' component='span'>
  //                 500x345
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction='column'
  //               justifyContent='space-evenly'
  //               alignItems='center'
  //               spacing={1}
  //               className='data-block'
  //             >
  //               <Box className='img-wrap'>
  //                 <img
  //                   src='../../../assets/images/photo-house.png'
  //                   alt='email-photo'
  //                 />
  //               </Box>
  //               <Typography variant='p' component='p'>
  //                 House.jpg
  //               </Typography>
  //               <Typography variant='body1' component='span'>
  //                 500x345
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction='column'
  //               justifyContent='space-evenly'
  //               alignItems='center'
  //               spacing={1}
  //               className='data-block'
  //             >
  //               <Box className='img-wrap'>
  //                 <img
  //                   src='../../../assets/images/photo-house.png'
  //                   alt='email-photo'
  //                 />
  //               </Box>
  //               <Typography variant='p' component='p'>
  //                 House.jpg
  //               </Typography>
  //               <Typography variant='body1' component='span'>
  //                 500x345
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction='column'
  //               justifyContent='space-evenly'
  //               alignItems='center'
  //               spacing={1}
  //               className='data-block'
  //             >
  //               <Box className='img-wrap'>
  //                 <img
  //                   src='../../../assets/images/photo-house.png'
  //                   alt='email-photo'
  //                 />
  //               </Box>
  //               <Typography variant='p' component='p'>
  //                 House.jpg
  //               </Typography>
  //               <Typography variant='body1' component='span'>
  //                 500x345
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction='column'
  //               justifyContent='space-evenly'
  //               alignItems='center'
  //               spacing={1}
  //               className='data-block'
  //             >
  //               <Box className='img-wrap'>
  //                 <img
  //                   src='../../../assets/images/photo-house.png'
  //                   alt='email-photo'
  //                 />
  //               </Box>
  //               <Typography variant='p' component='p'>
  //                 House.jpg
  //               </Typography>
  //               <Typography variant='body1' component='span'>
  //                 500x345
  //               </Typography>
  //             </Stack>
  //             <Stack
  //               direction='column'
  //               justifyContent='space-evenly'
  //               alignItems='center'
  //               spacing={1}
  //               className='data-block'
  //             >
  //               <Box className='img-wrap'>
  //                 <img
  //                   src='../../../assets/images/photo-house.png'
  //                   alt='email-photo'
  //                 />
  //               </Box>
  //               <Typography variant='p' component='p'>
  //                 House.jpg
  //               </Typography>
  //               <Typography variant='body1' component='span'>
  //                 500x345
  //               </Typography>
  //             </Stack>
  //           </Stack>
  //         </Box>
  //       </>
  //     ) : (
  //       <>
  //         <TableContainer sx={{ maxHeight: 440 }} className='media-table'>
  //           <Table stickyHeader aria-label='sticky table'>
  //             <TableHead>
  //               <TableRow>
  //                 {columns.map((column) => (
  //                   <TableCell
  //                     key={column.id}
  //                     align={column.align}
  //                     style={{ minWidth: column.minWidth }}
  //                   >
  //                     {column.label}
  //                   </TableCell>
  //                 ))}
  //               </TableRow>
  //             </TableHead>
  //             <TableBodySortable
  //               onSortEnd={onSortEnd}
  //               useDragHandle
  //               displayRowCheckbox={false}
  //             >
  //               {peoples
  //                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //                 .map((row, index) => {
  //                   return isAdmin ? (
  //                     <Row1 index={index} key={row.index} data={row} />
  //                   ) : (
  //                     <Row index={index} key={row.index} data={row} />
  //                   );
  //                 })}
  //             </TableBodySortable>
  //           </Table>
  //         </TableContainer>
  //         <TablePagination
  //           rowsPerPageOptions={[10, 25, 100]}
  //           component='div'
  //           count={rows.length}
  //           rowsPerPage={rowsPerPage}
  //           page={page}
  //           onPageChange={handleChangePage}
  //           onRowsPerPageChange={handleChangeRowsPerPage}
  //         />
  //       </>
  //     )}
  //   </Box>
  // );

  const dropzone = useDropzone();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-end'
        alignItems='flex-start'
        spacing={1}
        className='add-media-btn-wrapper'
      >
        <Typography
          variant='body1'
          component='span'
          className='primary-btn-small secondary-btn'
        >
          <RiAddLine size={18} />
          Add
          <TextField type='file' className='upload'></TextField>
        </Typography>
      </Stack>

      <EmptyTable />
    </>
  );
};

export default MediaphotoTable;
