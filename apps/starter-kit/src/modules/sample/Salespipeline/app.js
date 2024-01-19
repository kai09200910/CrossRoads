import React from 'react';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { RiTimeLine } from 'react-icons/ri';
import PropertyCard from './propertyCard';
import './salespipeline.scss';
import { motion } from "framer-motion"
import Filters from './filters';

class TaskList extends React.Component {
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
    let approvalPending = tasks.filter((data) => data.status === 'Approval Pending');   
    let activeListings = tasks.filter((data) => data.status === ' Active Listings');
    let offerPening = tasks.filter((data) => data.status === 'Under Contract');
    let underContract  = tasks.filter((data) => data.status === 'Offer Pening');
  
    return (

      <>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          paddingBottom: { xs: 3, xl: 3 },
          paddingTop: { xs: 5, xl: 2 },
        }}
      >
        Sales Pipeline 
      </Typography>

      <Filters /> 

      <Box className='container'>

      <Box
          className=' small-box'
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, 'Under Contract')}
        >
          <Box className='drag_container'>
            <Box className='salespipeline-wrapper'>
              <Box className='drag_column'>
                
                <Box variant='Box' component={Paper} className='drag_row property-list'>
                <Stack
                  direction='row'
                  justifyContent='flex-start'
                  alignItems='center'
                  spacing={2}
                  className='status-title approval-pending'
                >
                      <RiTimeLine size={22} />
                      <Typography variant='span' component='span'>
                        Approval Pending
                      </Typography>
                </Stack >
                <Box className=' property-card-list'
                   >
                  {offerPening.map((task) => (
                    
                    <motion.div
                      drag
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                      className='card card123'
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                    >
                       <PropertyCard />
                    </motion.div>
                  
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
          onDrop={(e) => this.onDrop(e, false, 'Approval Pending')}
        >
          <Box className='drag_container'>
            <Box className=' salespipeline-wrapper'>
              <Box className='drag_column'>
                <Box variant='Box' component={Paper} className='drag_row property-list'>
                <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
                className='status-title active-listings '
              >
                <RiTimeLine size={22} />
                <Typography variant='span' component='span'>
                  Active Listings
                </Typography>
              </Stack>
              <Box className=' property-card-list'>
                  {approvalPending.map((task) => (
                    <Box
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                      className='card'
                    >
                       <PropertyCard />
                    </Box>
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
          onDrop={(e) => this.onDrop(e, true, 'Offer Pening')}
        >
          <Box className='drag_container'>
            <Box className=' salespipeline-wrapper'>
              <Box className='drag_column'>
                <Box variant='Box' component={Paper} className='drag_row property-list'>
                <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
                className='status-title offer-pening'
              >
                <RiTimeLine size={22} />
                <Typography variant='span' component='span'>
                  Offer Pending
                </Typography>
              </Stack>
              <Box className=' property-card-list'>
                  {underContract.map((task) => (
                    <Box
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                      className='card'
                    >
                      <PropertyCard />
                    </Box>
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
                <Box variant='Box' component={Paper} className='drag_row property-list'>
                <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
                className='status-title under-contract'
              >
                <RiTimeLine size={22} />
                <Typography variant='span' component='span'>
                  Under Contract
                </Typography>
              </Stack>
              <Box className=' property-card-list'>
                  {activeListings.map((task) => (
                    <Box
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                      className='card'
                    >
                       <PropertyCard />
                    </Box>
                  ))}
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
