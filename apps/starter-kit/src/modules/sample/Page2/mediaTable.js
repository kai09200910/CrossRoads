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
    minWidth: 40,
    align: 'right',
  },
];

function createData(order, name, size, date, displayonsite, action) {
  return { order, name, size, date, displayonsite, action };
}

const rows = [
  createData('', 'House.jpg', '500kb', '05/03/24', '', ''),
  createData('', 'House.jpg', '500kb', '05/03/24', '', ''),
  createData('', 'House.jpg', '500kb', '05/03/24', '', ''),
  createData('', 'House.jpg', '500kb', '05/03/24', '', ''),
  createData('', 'House.jpg', '1mb', '05/03/24', '', ''),
  createData('', 'House.jpg', '1mb', '05/03/24', '', ''),
  createData('', 'House.jpg', '2mb', '05/03/24', '', ''),
  createData('', 'House.jpg', '2mb', '05/03/24', '', ''),
  createData('', 'House.jpg', '3mb', '05/03/24', '', ''),
];

const MediaTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{ width: '100%', overflow: 'hidden' }}
      className='media-table-wrapper'
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
          <img src={ListViewIcon} alt='Icon' />
        </IconButton>
        <IconButton aria-label='grid' disableRipple>
          <img src={GridViewIcon} alt='Icon' />
        </IconButton>
      </Stack>
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
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
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
                          House.jpg
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell className='size'>
                      <Typography variant='p' component='p'>
                        <RiCheckboxBlankCircleFill size={6} className='green' />
                        500Kb
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='span' component='span'>
                        05/03/24
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

                    {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                        </>
                      );
                    })} */}
                  </TableRow>
                );
              })}
          </TableBody>
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
    </Paper>
  );
};

export default MediaTable;
