import React, { useState } from 'react';
import {
  Box,
  Stack,
  Paper,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import { RiArrowDownSLine, RiFilter3Line, RiTimeLine } from 'react-icons/ri';
import PropertyCard from './propertyCard';
import './dashboard.scss';
import Filters from '../common/filters';
import { Link } from 'react-router-dom';

class TaskList extends React.Component {
  state = {
    isFiltersVisible: false,
  };

  toggleFiltersVisibility = () => {
    this.setState((prevState) => ({
      isFiltersVisible: !prevState.isFiltersVisible,
    }));
  };

  state = { tasks: [] };
  componentDidMount() {
    const { tasks } = this.props;
    this.setState({
      tasks,
    });
  }

  onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add('dragged');
    evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = 'move';
  };
  onDragEnd = (evt) => {
    evt.currentTarget.classList.remove('dragged');
  };
  onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add('dragged-over');
    evt.dataTransfer.dropEffect = 'move';
  };
  onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove('dragged-over');
  };
  onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';
  };
  onDrop = (evt, value, status) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove('dragged-over');
    let data = evt.dataTransfer.getData('text/plain');
    let tasks = this.state.tasks;
    let updated = tasks.map((task) => {
      if (task.id.toString() === data.toString()) {
        task.status = status;
      }
      return task;
    });
    this.setState({ tasks: updated });
  };

  render() {
    const { tasks } = this.state;
    let approvalPending = tasks.filter(
      (data) => data.status === 'Approval Pending',
    );
    let activeListings = tasks.filter(
      (data) => data.status === ' Active Listings',
    );
    let offerPening = tasks.filter((data) => data.status === 'Under Contract');
    let underContract = tasks.filter((data) => data.status === 'Offer Pening');

    return (
      <>
        <Box className='dashboard-wrap'>
          {this.state.isFiltersVisible && (
            <Filters toggleVisibility={this.toggleFiltersVisibility} />
          )}
          <Box className='container'>
            <Box
              className=' small-box'
              onDragLeave={(e) => this.onDragLeave(e)}
              onDragEnter={(e) => this.onDragEnter(e)}
              onDragEnd={(e) => this.onDragEnd(e)}
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, false, 'Approval Pending')}
            >
              <Box className='drag_container'>
                <Box className=' salespipeline-wrapper'>
                  <Box className='drag_column'>
                    <Box
                      variant='Box'
                      component={Paper}
                      className='drag_row property-list'
                    >
                      <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={2}
                        sx={{
                          marginBottom: { xs: 2, xl: 2 },
                        }}
                      >
                        <Box className='custom-select-menu-wrapper'>
                          <RiTimeLine className='clock-icon' />
                          <Select
                            value={''} // Provide the selected value
                            onChange={(e) => {
                              // Handle onChange event
                            }}
                            displayEmpty
                            className='custom-select-menu status-title approval-pending '
                            IconComponent={RiArrowDownSLine}
                            startIcon={<RiArrowDownSLine />}
                          >
                            <MenuItem value='' disabled>
                              Select an option
                            </MenuItem>
                            <MenuItem value='option1'>
                              Approval pending{' '}
                            </MenuItem>
                            <MenuItem value='option2'>Listed</MenuItem>
                            <MenuItem value='option1'>Offer Pending </MenuItem>
                            <MenuItem value='option2'>Under Contact </MenuItem>
                            <MenuItem value='option2'>Closed </MenuItem>
                          </Select>
                        </Box>
                        <IconButton
                          aria-label='edit'
                          className='filter-btn'
                          onClick={this.toggleFiltersVisibility}
                        >
                          <RiFilter3Line size={30} />
                        </IconButton>
                      </Stack>
                      <Box className=' property-card-list'>
                        {approvalPending.map((task) => (
                          <>
                            <Link
                              to='/propertyview'
                              className='property-card-link-wrap'
                            >
                              <Box
                                id={task.id}
                                draggable
                                onDragStart={(e) => this.onDragStart(e)}
                                onDragEnd={(e) => this.onDragEnd(e)}
                                className='card'
                              >
                                <PropertyCard />
                              </Box>
                            </Link>
                            <Link
                              to='/propertyview'
                              className='property-card-link-wrap'
                            >
                              <Box
                                id={task.id + '_duplicate'} // Using a different key for the duplicate element
                                draggable
                                onDragStart={(e) => this.onDragStart(e)}
                                onDragEnd={(e) => this.onDragEnd(e)}
                                className='card'
                              >
                                <PropertyCard />
                              </Box>
                            </Link>
                          </>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              className=' small-box'
              onDragLeave={(e) => this.onDragLeave(e)}
              onDragEnter={(e) => this.onDragEnter(e)}
              onDragEnd={(e) => this.onDragEnd(e)}
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, true, ' Active Listings')}
            >
              <Box className='drag_container'>
                <Box className=' salespipeline-wrapper'>
                  <Box className='drag_column'>
                    <Box
                      variant='Box'
                      component={Paper}
                      className='drag_row property-list'
                    >
                      <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={2}
                        sx={{
                          marginBottom: { xs: 2, xl: 2 },
                        }}
                      >
                        <Box className='custom-select-menu-wrapper'>
                          <RiTimeLine className='clock-icon' />
                          <Select
                            value={''} // Provide the selected value
                            onChange={(e) => {
                              // Handle onChange event
                            }}
                            displayEmpty
                            className='custom-select-menu status-title under-contract '
                            IconComponent={RiArrowDownSLine}
                            startIcon={<RiArrowDownSLine />}
                          >
                            <MenuItem value='' disabled>
                              Select an option
                            </MenuItem>
                            <MenuItem value='option1'>Under Contract</MenuItem>
                            <MenuItem value='option2'>Listed</MenuItem>
                            <MenuItem value='option1'>Offer Pending </MenuItem>
                            <MenuItem value='option2'>Under Contact </MenuItem>
                            <MenuItem value='option2'>Closed </MenuItem>
                          </Select>
                        </Box>
                        <IconButton
                          aria-label='edit'
                          className='filter-btn'
                          onClick={this.toggleFiltersVisibility}
                        >
                          <RiFilter3Line size={30} />
                        </IconButton>
                      </Stack>

                      <Box className=' property-card-list'>
                        {activeListings.map((task) => (
                          <>
                            <Link
                              to='/propertyview'
                              className='property-card-link-wrap'
                            >
                              <Box
                                id={task.id}
                                draggable
                                onDragStart={(e) => this.onDragStart(e)}
                                onDragEnd={(e) => this.onDragEnd(e)}
                                className='card'
                              >
                                <PropertyCard />
                              </Box>
                            </Link>
                            <Link
                              to='/propertyview'
                              className='property-card-link-wrap'
                            >
                              <Box
                                id={task.id}
                                draggable
                                onDragStart={(e) => this.onDragStart(e)}
                                onDragEnd={(e) => this.onDragEnd(e)}
                                className='card'
                              >
                                <PropertyCard />
                              </Box>
                            </Link>
                            <Link
                              to='/propertyview'
                              className='property-card-link-wrap'
                            >
                              <Box
                                id={task.id}
                                draggable
                                onDragStart={(e) => this.onDragStart(e)}
                                onDragEnd={(e) => this.onDragEnd(e)}
                                className='card'
                              >
                                <PropertyCard />
                              </Box>
                            </Link>
                          </>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default TaskList;
