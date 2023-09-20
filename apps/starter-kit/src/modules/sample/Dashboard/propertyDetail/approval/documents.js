import React, { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Paper,
  Typography,
  FormControlLabel,
  Switch,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DisapprovalDialog from './disapprovalDialog';
import { RiErrorWarningFill } from 'react-icons/ri';

function createData(name, size, approval) {
  return { name, size, approval };
}

const rows = [
  createData('KYC Documents ', '120kb'),
  createData('Listing Agreement ', '5mb'),
  createData('Sales agreement ', '2.6kb'),
];

const Documents = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleClose = () => {
    setIsSubmitted(false);
  };
  return (
    <>
      <Box
        sx={{
          paddingTop: { xs: 0, xl: 0 },
        }}
      >
        <Typography
          variant='h4'
          component='h4'
          sx={{
            paddingBottom: { xs: 3, xl: 3 },
          }}
        >
          Documents
        </Typography>
        <Box
          sx={{ width: '100%', overflow: 'hidden' }}
          className='table-wrapper'
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left' style={{ width: '55%' }}>
                    Name
                  </TableCell>
                  {/* <TableCell align='left'>Date</TableCell> */}
                  <TableCell align='left' style={{ width: '15%' }}>
                    Size
                  </TableCell>
                  <TableCell align='left' style={{ width: '30%' }}>
                    Approval
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* empty state here */}
                <TableRow className='table-empty-state'>
                  {/* <TableCell align='center' style={{ width: '100%' }}>
                    <RiErrorWarningFill size={25} />
                      <Typography gutterBottom variant='p' component='p'>
                        No documents submitted yet,
                      </Typography>
                      <Typography gutterBottom variant='p' component='p'>
                        all submitted items will appear here.
                      </Typography>
                  </TableCell> */}
                  <Box variant='div' component='div' className=''>
                    <Stack
                      direction='column'
                      justifyContent='center'
                      alignItems='center'
                      spacing={1}
                      sx={{
                        paddingBottom: { xs: 2, xl: 2 },
                      }}
                      className=''
                    >
                      <RiErrorWarningFill size={25} />
                      <Typography gutterBottom variant='p' component='p'>
                        No documents submitted yet,
                      </Typography>
                      <Typography gutterBottom variant='p' component='p'>
                        all submitted items will appear here.
                      </Typography>
                    </Stack>
                  </Box>
                </TableRow>

                {/* {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='left'>{row.size}</TableCell>
                    <TableCell align='left'>
                      {' '}
                      <FormControlLabel
                        // control={<IOSSwitch  /> <Switch  sx={{ m: 1 }}
                        control={
                          <Switch
                            sx={{ m: 1 }}
                            className='ios-switch-custom small'
                            focusVisibleClassName='.Mui-focusVisible'
                            disableRipple
                            defaultChecked
                            onClick={() => setIsSubmitted(true)}
                          />
                        }
                        label=''
                      />
                    </TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Stack
          direction='row'
          justifyContent='end'
          alignItems='center'
          spacing={1}
          sx={{
            paddingTop: { xs: 5, xl: 8 },
          }}
        >
          {/* <Button
            variant='text'
            onClick={() => handleBack(null)}
            className='link-btn'
          >
            Back
          </Button> */}
          <Button
            variant='contained'
            size='large'
            // onClick={() => setIsSubmitted(true)}
            className='primary-btn btn'
          >
            Submit for MLS review
          </Button>
        </Stack>
      </Box>
      <DisapprovalDialog open={isSubmitted} handleClose={handleClose} />
    </>
  );
};

export default Documents;
