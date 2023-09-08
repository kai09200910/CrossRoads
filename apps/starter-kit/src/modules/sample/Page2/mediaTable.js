import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import RowOrderIcon from '../../../assets/icon/table-row-ordering.svg';
import ListViewIcon from '../../../assets/icon/list-view.svg';
import GridViewIcon from '../../../assets/icon/grid-view.svg';
import { RiCheckboxBlankCircleFill, RiDeleteBinLine } from 'react-icons/ri';
// import { IconName } from "react-icons/tfi";
// import { IconName } from "react-icons/hi";
import {
  SortableContainer,
  SortableHandle,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
const columns = [
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
  <span style={{ ...style, ...{ cursor: 'move' } }}> {'::::'} </span>
));

const Row = SortableElement(({ data, ...other }) => {
  return (
    <>
      {/* <TableRow {...other}>
      { other.children[0]}
      <TableRowColumn style={{width :  '5%' }} >
        <DragHandle/>
      </TableRowColumn>
      <TableRowColumn>
        {data.id}
      </TableRowColumn>
      <TableRowColumn>
        {data.name}
      </TableRowColumn>
      <TableRowColumn>
        {data.status}
      </TableRowColumn>
    </TableRow > */}

      <TableRow hover role='checkbox' tabIndex={-1} {...other}>
        <TableCell style={{ width: '5%' }}>
          <DragHandle />
        </TableCell>

        <TableCell className='order'>
          <img src={RowOrderIcon} alt='Icon' />
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
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={3}
          >
            <FormControlLabel
              control={<Checkbox />}
              label='Yes  '
              checked={true}
            />
            <FormControlLabel control={<Checkbox />} label='No  ' />
          </Stack>
        </TableCell>
        <TableCell className='action'>
          <RiDeleteBinLine size={24} />
        </TableCell>
      </TableRow>
    </>
  );
});

const MediaTable = () => {
  const [isGridView, setIsGridView] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [peoples, setPeoples] = React.useState([
    {
      id: 1,
      name: 'House.jpg',
      size: '500kb',
      date: '05/03/24',
    },
    {
      id: 2,
      name: 'House.jpg',
      size: '1mb',
      date: '05/03/24',
    },
    {
      id: 3,
      name: 'House.jpg',
      size: '2mb',
      date: '05/03/24',
    },
    {
      id: 4,
      name: 'House.jpg',
      size: '3mb',
      date: '05/03/24',
    },
    {
      id: 5,
      name: 'House.jpg',
      size: '4mb',
      date: '05/03/24',
    },
    {
      id: 6,
      name: 'House.jpg',
      size: '5mb',
      date: '05/03/24',
    },
  ]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const TableBodySortable = SortableContainer(
    ({ children, displayRowCheckbox }) => (
      <TableBody displayRowCheckbox={displayRowCheckbox}>{children}</TableBody>
    ),
  );

  TableBodySortable.muiName = 'TableBody';
  const onSortEnd = ({ oldIndex, newIndex }) => {
    // this.setState({
    //   peoples: arrayMove(this.state.peoples, oldIndex, newIndex),
    // });
    setPeoples(arrayMove(peoples, oldIndex, newIndex));
  };
  return (
    <Box
      sx={{ width: '100%', overflow: 'hidden' }}
      className='media-table-wrapper table-wrapper'
    >
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={4}
        className='view-action'
      >
        {/* IoGridSharp
   HiOutlineViewList */}
        <IconButton aria-label='list' disableRipple>
          <img
            src={ListViewIcon}
            alt='Icon'
            onClick={() => setIsGridView(false)}
          />
        </IconButton>
        <IconButton aria-label='grid' disableRipple>
          <img
            src={GridViewIcon}
            alt='Icon'
            onClick={() => setIsGridView(true)}
          />
        </IconButton>
      </Stack>
      {isGridView ? (
        <>
          <Box>Grid view</Box>
        </>
      ) : (
        <>
          <TableContainer sx={{ maxHeight: 440 }} className='media-table'>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {/* <TableBody> */}

              <TableBodySortable
                onSortEnd={onSortEnd}
                useDragHandle
                displayRowCheckbox={false}
              >
                {peoples
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      // <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                      //   <TableCell className='order'>
                      //     <img src={RowOrderIcon} alt='Icon' />
                      //   </TableCell>
                      //   <TableCell>
                      //     <Stack
                      //       direction='row'
                      //       justifyContent='flex-start'
                      //       alignItems='center'
                      //       spacing={4}
                      //     >
                      //       <Box className='img-wrap'>
                      //         <img
                      //           src='../../../assets/images/photo-house.png'
                      //           alt='email-photo'
                      //         />
                      //       </Box>
                      //       <Typography variant='span' component='span'>
                      //         House.jpg
                      //       </Typography>
                      //     </Stack>
                      //   </TableCell>
                      //   <TableCell className='size'>
                      //     <Typography variant='p' component='p'>
                      //       <RiCheckboxBlankCircleFill size={6} className='green' />
                      //       500Kb
                      //     </Typography>
                      //   </TableCell>
                      //   <TableCell>
                      //     <Typography variant='span' component='span'>
                      //       05/03/24
                      //     </Typography>
                      //   </TableCell>
                      //   <TableCell>
                      //     {' '}
                      //     <Stack
                      //       direction='row'
                      //       justifyContent='flex-start'
                      //       alignItems='center'
                      //       spacing={3}
                      //     >
                      //       <FormControlLabel
                      //         control={<Checkbox />}
                      //         label='Yes  '
                      //         checked={true}
                      //       />
                      //       <FormControlLabel control={<Checkbox />} label='No  ' />
                      //     </Stack>
                      //   </TableCell>
                      //   <TableCell className='action'>
                      //     <RiDeleteBinLine size={24} />
                      //   </TableCell>

                      //   {/* {columns.map((column) => {
                      //     const value = row[column.id];
                      //     return (
                      //       <>
                      //       <TableCell key={column.id} align={column.align}>
                      //         {column.format && typeof value === 'number'
                      //           ? column.format(value)
                      //           : value}
                      //       </TableCell>
                      //       </>
                      //     );
                      //   })} */}
                      // </TableRow>
                      <Row index={index} key={row.index} data={row} />
                    );
                  })}
              </TableBodySortable>
              {/* </TableBody> */}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Box>
  );
};

export default MediaTable;
