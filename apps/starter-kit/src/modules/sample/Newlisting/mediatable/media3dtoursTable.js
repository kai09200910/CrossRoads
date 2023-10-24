import * as React from 'react';
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
  IconButton,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import RowOrderIcon from '../../../../assets/icon/table-row-ordering.svg';
import { ReactComponent as ListViewIcon } from '../../../../assets/icon/list-view.svg';
import { ReactComponent as GridViewIcon } from '../../../../assets/icon/grid-view.svg';

import { RiDeleteBinLine } from 'react-icons/ri';
import {
  SortableContainer,
  SortableHandle,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
import { Link } from 'react-router-dom';

const adminColumns = [
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'approval', label: 'Approval' },
];
const userColumns = [
  { id: 'order', label: 'Order', minWidth: 40 },
  { id: 'name', label: 'Name', align: 'center' },
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
            <Link href='#'>3D-tour-link-here-for-property</Link>
          </Stack>
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
            <Link href='#'>3D-tour-link-here-for-property</Link>
          </Stack>
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

const Media3dtoursTable = ({ isAdmin = false }) => {
  const [isGridView, setIsGridView] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [peoples, setPeoples] = React.useState([
    {
      id: 1,
      name: 'Video1.mp4',
      size: '200mb',
      date: '05/03/24',
    },
    {
      id: 2,
      name: 'Video2.mp4',
      size: '180mb',
      date: '05/03/24',
    },
    {
      id: 3,
      name: 'Video3.mp4',
      size: '210mb',
      date: '05/03/24',
    },
    {
      id: 4,
      name: 'Video4.mp4',
      size: '300mb',
      date: '05/03/24',
    },
    {
      id: 5,
      name: 'Video5.mp4',
      size: '94mb',
      date: '05/03/24',
    },
    {
      id: 6,
      name: 'Video6.mp4',
      size: '65mb',
      date: '05/03/24',
    },
  ]);
  const [columns, setColumns] = React.useState(userColumns);

  React.useEffect(() => {
    setColumns(isAdmin ? adminColumns : userColumns);
  }, [isAdmin]);

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
    setPeoples(arrayMove(peoples, oldIndex, newIndex));
  };
  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-end'
        alignItems='flex-start'
        spacing={1}
        className='add-btn-wrapper'
      >
        <Button
          variant='contained'
          size='small'
          className='primary-btn-small secondary-btn'
        >
          + Add
        </Button>
      </Stack>
      <Box
        sx={{ width: '100%', overflow: 'hidden' }}
        className='media-table-wrapper table-wrapper'
      >
        {!isAdmin ? (
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={4}
            className='view-action'
          >
            <IconButton
              aria-label='list'
              disableRipple
              className={!isGridView ? 'active' : ''}
              onClick={() => setIsGridView(false)}
            >
              <ListViewIcon />
            </IconButton>
            <IconButton
              aria-label='grid'
              disableRipple
              className={isGridView ? 'active' : ''}
              onClick={() => setIsGridView(true)}
            >
              <GridViewIcon />
            </IconButton>
          </Stack>
        ) : null}
        {isGridView ? (
          <>
            <Box className='mediatable-gridlist'>
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-start'
                // spacing={2}
                className='gridlist'
              >
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                  spacing={1}
                  className='data-block'
                >
                  <Box className='img-wrap'>
                    <img
                      src='../../../assets/images/photo-house.png'
                      alt='email-photo'
                    />
                  </Box>
                  <Typography variant='p' component='p'>
                    House.jpg
                  </Typography>
                  <Typography variant='body1' component='span'>
                    500x345
                  </Typography>
                </Stack>
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                  spacing={1}
                  className='data-block'
                >
                  <Box className='img-wrap'>
                    <img
                      src='../../../assets/images/photo-house.png'
                      alt='email-photo'
                    />
                  </Box>
                  <Typography variant='p' component='p'>
                    House.jpg
                  </Typography>
                  <Typography variant='body1' component='span'>
                    500x345
                  </Typography>
                </Stack>
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                  spacing={1}
                  className='data-block'
                >
                  <Box className='img-wrap'>
                    <img
                      src='../../../assets/images/photo-house.png'
                      alt='email-photo'
                    />
                  </Box>
                  <Typography variant='p' component='p'>
                    House.jpg
                  </Typography>
                  <Typography variant='body1' component='span'>
                    500x345
                  </Typography>
                </Stack>
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                  spacing={1}
                  className='data-block'
                >
                  <Box className='img-wrap'>
                    <img
                      src='../../../assets/images/photo-house.png'
                      alt='email-photo'
                    />
                  </Box>
                  <Typography variant='p' component='p'>
                    House.jpg
                  </Typography>
                  <Typography variant='body1' component='span'>
                    500x345
                  </Typography>
                </Stack>
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                  spacing={1}
                  className='data-block'
                >
                  <Box className='img-wrap'>
                    <img
                      src='../../../assets/images/photo-house.png'
                      alt='email-photo'
                    />
                  </Box>
                  <Typography variant='p' component='p'>
                    House.jpg
                  </Typography>
                  <Typography variant='body1' component='span'>
                    500x345
                  </Typography>
                </Stack>
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                  spacing={1}
                  className='data-block'
                >
                  <Box className='img-wrap'>
                    <img
                      src='../../../assets/images/photo-house.png'
                      alt='email-photo'
                    />
                  </Box>
                  <Typography variant='p' component='p'>
                    House.jpg
                  </Typography>
                  <Typography variant='body1' component='span'>
                    500x345
                  </Typography>
                </Stack>
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                  spacing={1}
                  className='data-block'
                >
                  <Box className='img-wrap'>
                    <img
                      src='../../../assets/images/photo-house.png'
                      alt='email-photo'
                    />
                  </Box>
                  <Typography variant='p' component='p'>
                    House.jpg
                  </Typography>
                  <Typography variant='body1' component='span'>
                    500x345
                  </Typography>
                </Stack>
                <Stack
                  direction='column'
                  justifyContent='space-evenly'
                  alignItems='center'
                  spacing={1}
                  className='data-block'
                >
                  <Box className='img-wrap'>
                    <img
                      src='../../../assets/images/photo-house.png'
                      alt='email-photo'
                    />
                  </Box>
                  <Typography variant='p' component='p'>
                    House.jpg
                  </Typography>
                  <Typography variant='body1' component='span'>
                    500x345
                  </Typography>
                </Stack>
              </Stack>
            </Box>
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
                <TableBodySortable
                  onSortEnd={onSortEnd}
                  useDragHandle
                  displayRowCheckbox={false}
                >
                  {peoples
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return isAdmin ? (
                        <Row1 index={index} key={row.index} data={row} />
                      ) : (
                        <Row index={index} key={row.index} data={row} />
                      );
                    })}
                </TableBodySortable>
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
    </>
  );
};

export default Media3dtoursTable;
