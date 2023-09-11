import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import './campaigns.scss';
import ViewemailcampaignDialog from './viewemailcampaignDialog';

const Campaigns = () => {
  const Row = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleClose = () => {
      setIsSubmitted(false);
    };

    const [isExpand, setIsExpand] = useState(false);
    const [isCompanignStatsOpen, SetIsCompanignStatsOpen] = useState(false);
    return (
      <>
        {' '}
        <Stack
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={2}
          sx={{
            marginBottom: 6,
          }}
          className='campaign-list'
          component={Paper}
        >
          {!isExpand ? (
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              spacing={2}
              className='campaign-list-card compact-data'
              sx={{ width: '100%', padding: '20px 32px' }}
            >
              <>
                <Grid
                  container
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                  spacing={5}
                >
                  <Grid item xs={12} md={5}>
                    <Stack
                      direction='column'
                      justifyContent='flex-start'
                      alignItems='flex-start'
                      spacing={2}
                      className='intro'
                    >
                      <Typography variant='h4' component='h4'>
                        New Listing - Tropical Paradise by the Beach with Ocean
                        View
                      </Typography>
                      <Typography variant='body1' component='span'>
                        Name
                      </Typography>
                      <Chip label='Comeplete' className='green' />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Stack
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'
                      className='detail'
                    >
                      <Grid
                        container
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                      >
                        <Divider orientation='vertical' flexItem></Divider>
                        <Grid xs sx={{ padding: '0px 24px' }}>
                          <Typography variant='p' component='p'>
                            12/05/2023
                          </Typography>
                          <Typography variant='body1' component='span'>
                            Creation date
                          </Typography>
                        </Grid>
                        <Divider orientation='vertical' flexItem></Divider>
                        <Grid xs sx={{ padding: '0px 24px' }}>
                          <Typography variant='p' component='p'>
                            John Smith
                          </Typography>
                          <Typography variant='body1' component='span'>
                            Created by
                          </Typography>
                        </Grid>
                        <Divider orientation='vertical' flexItem></Divider>
                        <Grid xs sx={{ padding: '0px 24px' }}>
                          <Typography variant='p' component='p'>
                            1,545
                          </Typography>
                          <Typography variant='body1' component='span'>
                            Emails sent
                          </Typography>
                        </Grid>
                        <Divider orientation='vertical' flexItem></Divider>
                      </Grid>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Button
                      variant='contained'
                      size='medium'
                      className='primary-btn'
                      onClick={() => setIsExpand(true)}
                    >
                      View
                    </Button>
                  </Grid>
                </Grid>
              </>
            </Stack>
          ) : (
            <Box
              className='campaign-list-card expand-data'
              sx={{ width: '100%', padding: '20px 32px' }}
            >
              <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={5}
              >
                <Grid item xs={12} md={6}>
                  <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={5}
                  >
                    <Grid item xs={12} md={12}>
                      <Stack
                        direction='column'
                        justifyContent='flex-start'
                        alignItems='flex-start'
                        spacing={2}
                        className='intro'
                      >
                        <Typography variant='h4' component='h4'>
                          New Listing - Tropical Paradise by the Beach with
                          Ocean View
                        </Typography>
                        <Typography variant='body1' component='span'>
                          Name
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Stack
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                        className='detail'
                      >
                        <Grid
                          spacing={5}
                          container
                          direction='row'
                          alignItems='center'
                        >
                          <Grid xs={12} md={3} sx={{ padding: '0px 20px' }}>
                            <Chip label='Comeplete' className='green' />
                          </Grid>
                          <Grid xs={12} md={3} sx={{ padding: '0px 24px' }}>
                            <Typography variant='p' component='p'>
                              12/05/2023
                            </Typography>
                            <Typography variant='body1' component='span'>
                              Creation date
                            </Typography>
                          </Grid>
                          <Divider orientation='vertical' flexItem></Divider>
                          <Grid xs={12} md={3} sx={{ padding: '0px 24px' }}>
                            <Typography variant='p' component='p'>
                              John Smith
                            </Typography>
                            <Typography variant='body1' component='span'>
                              Created by
                            </Typography>
                          </Grid>
                          <Grid
                            xs={12}
                            md={3}
                            sx={{ padding: '0px 20px' }}
                          ></Grid>
                        </Grid>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={12} container>
                      <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={3}
                        sx={{
                          paddingTop: { xs: 3, sm: 5, xl: 5 },
                        }}
                      >
                        <Button
                          variant='contained'
                          size='small'
                          autoFocus
                          onClick={() => SetIsCompanignStatsOpen(true)}
                          className='primary-btn'
                        >
                          View campaign
                        </Button>
                        <Button
                          variant='outlined'
                          size='small'
                          onClick={() => setIsSubmitted(true)}
                          className='outline-btn'
                        >
                          View email
                        </Button>
                        <Button
                          variant='text'
                          onClick={() => {
                            setIsExpand(false);
                            SetIsCompanignStatsOpen(false);
                          }}
                        >
                          Back
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  spacing={5}
                  container
                  direction='row'
                  alignItems='center'
                  className='campaign-info-card'
                >
                  <Grid item xs={12} md={4}>
                    <Card
                      variant='outlined'
                      className='info-card'
                      sx={{ padding: '0px 20px' }}
                    >
                      <Typography variant='p' component='p'>
                        1,545
                      </Typography>
                      <Typography variant='body1' component='span'>
                        Total emails sent
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card
                      variant='outlined'
                      className='info-card'
                      sx={{ padding: '20px 20px' }}
                    >
                      <Typography variant='p' component='p'>
                        644/860
                      </Typography>
                      <Typography variant='body1' component='span'>
                        Emails opened
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card
                      variant='outlined'
                      className='info-card'
                      sx={{ padding: '0px 20px' }}
                    >
                      <Typography variant='p' component='p'>
                        135
                      </Typography>
                      <Typography variant='body1' component='span'>
                        Emails clicked
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card
                      variant='outlined'
                      className='info-card'
                      sx={{ padding: '0px 20px' }}
                    >
                      <Typography variant='p' component='p'>
                        0
                      </Typography>
                      <Typography variant='body1' component='span'>
                        Emails not sent
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card
                      variant='outlined'
                      className='info-card'
                      sx={{ padding: '0px 20px' }}
                    >
                      <Typography variant='p' component='p'>
                        5
                      </Typography>
                      <Typography variant='body1' component='span'>
                        Emails bounced
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card
                      variant='outlined'
                      className='info-card'
                      sx={{ padding: '0px 20px' }}
                    >
                      <Typography variant='p' component='p'>
                        4
                      </Typography>
                      <Typography variant='body1' component='span'>
                        Emails unsubscribed
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          )}
        </Stack>
        {isCompanignStatsOpen ? (
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={2}
            sx={{
              paddingBottom: { xs: 2, xl: 3 },
              marginBottom: 7,
              marginTop: -4,
            }}
            className=''
            component={Paper}
          >
            <Box
              className='campaign-list-card expand-data'
              sx={{ width: '100%', padding: '20px 32px' }}
            >
              <Typography
                variant='h4'
                component='h4'
                sx={{
                  paddingBottom: { xs: 4, xl: 5 },
                }}
              >
                Campaign Stats
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align='left'>Clicks</TableCell>
                      <TableCell align='left'>Email</TableCell>
                      <TableCell align='left'>Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {row.name}
                        </TableCell>
                        <TableCell align='left'>{row.click}</TableCell>
                        <TableCell align='left'>{row.email}</TableCell>
                        <TableCell align='left'>{row.phone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        ) : null}
        <ViewemailcampaignDialog open={isSubmitted} handleClose={handleClose} />
      </>
    );
  };

  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/campaigns/create');
  };

  function createData(name, click, email, phone) {
    return { name, click, email, phone };
  }

  const rows = [
    createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
    createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
    createData('John Smith', '2', 'adriendubreuil@gmail.com', '242-123-4567'),
    createData('John Smith', '2', 'adriendubreuil@gmail.com', '242-123-4567'),
    createData('John Smith', '2', 'adriendubreuil@gmail.com', '242-123-4567'),
    createData('John Smith', '3', 'adriendubreuil@gmail.com', '242-123-4567'),
    createData('John Smith', '1', 'adriendubreuil@gmail.com', '242-123-4567'),
    createData('John Smith', '1', 'adriendubreuil@gmail.com', '242-123-4567'),
  ];

  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{
          paddingBottom: { xs: 4, xl: 4 },
          paddingTop: { xs: 5, xl: 5 },
        }}
      >
        <Typography variant='h3' component='h3'>
          Listing Campaigns
        </Typography>
        <Button
          variant='outlined'
          size='small'
          className='edit-btn secondary-btn-small'
          onClick={navigateToCreate}
        >
          +New campaign
        </Button>
      </Stack>
      <Box className='scrollable-content'>
        <Box sx={{ my: 2 }}>
          <Box className='campaign-list-wrap'>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Campaigns;
