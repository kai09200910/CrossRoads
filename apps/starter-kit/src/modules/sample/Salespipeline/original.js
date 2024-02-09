import React, { useState } from 'react';
import { Box, Grid, Stack, Typography, Paper } from '@mui/material';
import { RiTimeLine } from 'react-icons/ri';
import PropertyCard from './propertyCard';
import './salespipeline.scss';


// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import classNames from 'classnames';
// import EventEmitter from 'events';

const Salespipeline = () => {
  const [value, setValue] = useState('none');
  const [showPlaceholder, setShowPlaceholder] = useState(value === 'none');

  return (
    <>
      <Box variant='div' component='div' className='salespipeline-wrapper'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            paddingBottom: { xs: 4, xl: 4 },
            paddingTop: { xs: 5, xl: 5 },
          }}
          className='main-title'
        >
          <Typography variant='h3' component='h3'>
            Sales Pipeline
          </Typography>
        </Stack>
        {/* <Box variant='div' component='div' className='listing-fillter'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            className='detail'
          >
            <Grid container spacing={3} mt={1}>
              <Grid item xs={12} sm={6} md={2}>
                <Box variant='div' component='div'>
                  <label>Listing Type </label>
                  <Select
                    fullWidth
                    id='listing-type-1'
                    value={value}
                    defaultValue='none'
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                    IconComponent={RiArrowDownSLine}
                  >
                    <MenuItem
                      key='0'
                      disabled
                      value='none'
                      className='place-holder'
                    >
                      Select Listing Type
                    </MenuItem>
                    <MenuItem value={10}>MLS Exclusive</MenuItem>
                    <MenuItem value={20}>General</MenuItem>
                    <MenuItem value={30}>Co-broke </MenuItem>
                    <MenuItem value={40}>Exclusive (not on MLS)</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box variant='div' component='div'>
                  <label>Island </label>
                  <Select
                    fullWidth
                    id='island'
                    value={value}
                    defaultValue='none'
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                    IconComponent={RiArrowDownSLine}
                  >
                    <MenuItem
                      key='0'
                      disabled
                      value='none'
                      className='place-holder'
                    >
                      Select Island
                    </MenuItem>
                    <MenuItem value={1}>Island 1</MenuItem>
                    <MenuItem value={2}>Island 2</MenuItem>
                    <MenuItem value={3}>Island 3 </MenuItem>
                    <MenuItem value={4}>Island 4</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box variant='div' component='div'>
                  <label>Listing Type </label>
                  <Select
                    fullWidth
                    id='listing-type-1'
                    value={value}
                    defaultValue='none'
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                    IconComponent={RiArrowDownSLine}
                  >
                    <MenuItem
                      key='0'
                      disabled
                      value='none'
                      className='place-holder'
                    >
                      Select Listing Type
                    </MenuItem>
                    <MenuItem value={5}>MLS Exclusive</MenuItem>
                    <MenuItem value={6}>General</MenuItem>
                    <MenuItem value={7}>Co-broke </MenuItem>
                    <MenuItem value={8}>Exclusive (not on MLS)</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box variant='div' component='div'>
                  <label>Beds & Baths </label>
                  <Select
                    fullWidth
                    id='beds-baths'
                    value={value}
                    defaultValue='none'
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                    IconComponent={RiArrowDownSLine}
                  >
                    <MenuItem
                      key='0'
                      disabled
                      value='none'
                      className='place-holder'
                    >
                      Select Beds & Baths
                    </MenuItem>
                    <MenuItem value={11}>select Bath 1</MenuItem>
                    <MenuItem value={12}>select Bath 2</MenuItem>
                    <MenuItem value={13}>select Bed 1 </MenuItem>
                    <MenuItem value={14}>select Bed 2</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box variant='div' component='div'>
                  <label>Listing status </label>
                  <Select
                    fullWidth
                    id='listing-status'
                    value={value}
                    defaultValue='none'
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                    IconComponent={RiArrowDownSLine}
                  >
                    <MenuItem
                      key='0'
                      disabled
                      value={value}
                      defaultValue='none'
                      onChange={(e) => setValue(e.target.value)}
                      onFocus={(e) => setShowPlaceholder(false)}
                      onClose={(e) =>
                        setShowPlaceholder(e.target.value === undefined)
                      }
                    >
                      Select Listing status
                    </MenuItem>
                    <MenuItem value={10}>Listing status 1</MenuItem>
                    <MenuItem value={20}>Listing status 2</MenuItem>
                    <MenuItem value={30}>Listing status 3 </MenuItem>
                    <MenuItem value={40}>Listing status 4</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Box variant='div' component='div'>
                  <label>Sort by </label>
                  <FormControlLabel
                    sx={{
                      height: '47px',
                    }}
                    control={
                      <Switch
                        sx={{ m: 1 }}
                        className='ios-switch-custom fillter-switch'
                        focusVisibleClassName='.Mui-focusVisible'
                        disableRipple
                      />
                    }
                    label=''
                  />
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Box> */}

        <Grid container spacing={5} mt={2}>
          {/* <Grid item xs={12} md={3}>
            <Box variant='div' component={Paper} className='property-list'>
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
              </Stack>

              <Box
                direction='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={4}
                className='property-card-list'
              >
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
              </Box>
            </Box>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Box variant='div' component={Paper} className='property-list'>
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
                className='status-title active-listings'
              >
                <RiTimeLine size={22} />
                <Typography variant='span' component='span'>
                  Active Listings
                </Typography>
              </Stack>

              <Box
                direction='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={4}
                className='property-card-list'
              >
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
              </Box>
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <Box variant='div' component={Paper} className='property-list'>
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
                className='status-title offer-pening'
              >
                <RiTimeLine size={22} />
                <Typography variant='span' component='span'>
                  Offer Pening
                </Typography>
              </Stack>

              <Box
                direction='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={4}
                className='property-card-list'
              >
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
              </Box>
            </Box>
          </Grid> */}

          <Grid item xs={12} md={6}>
            <Box variant='div' component={Paper} className='property-list'>
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={2}
                className='status-title under-contract'
              >
                <RiTimeLine size={22} />
                <Typography variant='span' component='span'>
                  Under contract
                </Typography>
              </Stack>

              <Box
                direction='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={4}
                className='property-card-list'
              >
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
  // let classnames = classNames;
  // let data = [
  //   {
  //     icebox: true,
  //     type: 'First Icebox',
  //     content: [
  //       {
  //         id: 100,
  //         name: 'Build application server',
  //       },
  //       {
  //         id: 101,
  //         name: 'Continue Coding',
  //       },
  //     ],
  //   },
  //   {
  //     type: 'Icebox',
  //     content: [
  //       {
  //         id: 104,
  //         name: 'Programming',
  //       },
  //     ],
  //   },
  //   {
  //     type: 'Doing',
  //     content: [],
  //   },
  //   {
  //     type: 'Done',
  //     content: [],
  //   },
  // ];

  // let newId = 0;
  // let listener = new EventEmitter();

  // let createNewData = () => {
  //   newId = Math.floor(Math.random() * 100000000000);
  //   data[0].content.push({
  //     id: newId,
  //     name: '',
  //   });
  //   console.log('Modified data', data);
  //   listener.emit('moved');
  // };

  // let editData = (itemType, id, idx, editedText) => {
  //   data = data.map((obj) => {
  //     if (obj.type === itemType) {
  //       obj.content = obj.content.map((item) => {
  //         if (item.id === id) {
  //           return {
  //             ...item,
  //             name: editedText,
  //           };
  //         }
  //         return item;
  //       });
  //     }
  //     return obj;
  //   });
  //   console.log(data);
  //   listener.emit('moved');
  // };

  // let mutateData = (id, value, currentType, type) => {
  //   data = data.map((obj) => {
  //     if (obj.type === currentType) {
  //       obj.content = obj.content.filter((item) => item.id !== id);
  //       console.log('Content: ', obj.content);
  //     }
  //     if (obj.type === type) {
  //       console.log('Value: ', value);
  //       obj.content.push({
  //         id,
  //         name: value,
  //       });
  //     }
  //     return obj;
  //   });
  //   console.log('Modified data: ', data);
  //   listener.emit('moved');
  // };

  // const itemTypes = {
  //   CARD: 'card',
  // };

  // const CardDrop = ({ type, connectDropTarget, children }) => {
  //   return connectDropTarget(
  //     <Box variant='div' component='div' className='drop-area'>
  //       {' '}
  //       {children}
  //     </Box>,
  //   );
  // };

  // const cardTarget = {
  //   drop(props, monitor) {
  //     const items = monitor.getItem();
  //     const { type } = props;
  //     const { currentType, value, id } = items;
  //     console.log('Item: ', value, id);
  //     mutateData(id, value, currentType, type);
  //   },
  // };

  // const collectDrop = (connect, monitor) => {
  //   return {
  //     connectDropTarget: connect.dropTarget(),
  //     isOver: monitor.isOver(),
  //   };
  // };

  // const Card = ({
  //   value,
  //   isDragging,
  //   empty,
  //   connectDragSource,
  //   newItem,
  //   pos,
  //   id,
  // }) => {
  //   const [focus, setFocus] = useState(false);

  //   const loseFocus = () => {
  //     setFocus(false);
  //     newId = 0;
  //   };

  //   const handleKeyUp = (e) => {};

  //   const edit = () => {
  //     console.log('Edited');
  //     setFocus(true);
  //   };

  //   const onFocus = () => {
  //     console.log('Preparing to focus');
  //   };

  //   const onChange = (e) => {
  //     console.log('Value preparing to change', e.target.value);
  //     console.log('DOM', ReactDOM.findDOMNode(this.refs.textarea).rows);
  //     console.log('Val: ', this.refs.textarea.value);
  //     editData(type, id, pos, e.target.value);
  //   };

  //   useEffect(() => {
  //     const { newItem } = this.props;
  //     console.log('New: ', newItem);
  //     if (newItem) {
  //       ReactDOM.findDOMNode(this.refs.textarea).focus();
  //     }
  //   }, [newItem]);

  //   useEffect(() => {
  //     const { focus } = this.state;
  //     if (focus) {
  //       ReactDOM.findDOMNode(this.refs.textarea).focus();
  //     }
  //   }, [focus]);

  //   console.log('Id: ', id, 'Valuess: ', value);
  //   return connectDragSource(
  //     <Box variant='div' component='div'>
  //       <Box variant='div' component='div' className='label-wrapper'>
  //         <textarea
  //           onKeyUp={handleKeyUp}
  //           onFocus={onFocus}
  //           onChange={onChange}
  //           autofocus={focus}
  //           ref='textarea'
  //           onBlur={loseFocus}
  //           className='label'
  //           type='text'
  //           value={value}
  //           placeholder='Placeholder'
  //           disabled={!focus && !newItem}
  //         ></textarea>
  //         <a className='btn' onClick={edit}>
  //           <i className='fa fa-pencil-square-o' aria-hidden='true'></i>
  //         </a>
  //       </Box>
  //     </Box>,
  //   );
  // };

  // const collect = (connect, monitor) => {
  //   return {
  //     connectDragSource: connect.dragSource(),
  //     isDragging: monitor.isDragging(),
  //   };
  // };

  // const cardSource = {
  //   beginDrag(props) {
  //     console.log('Props: ', props);
  //     return {
  //       value: props.value,
  //       currentType: props.type,
  //       id: props.id,
  //     };
  //   },
  // };

  // const CardDeck = () => {
  //   const [state, setState] = useState({
  //     data: data,
  //   });

  //   useEffect(() => {
  //     listener.on('moved', (changes) => {
  //       console.log(data);
  //       setState({
  //         data: data,
  //       });
  //     });
  //   }, []);

  //   const addItem = () => {
  //     console.log('We have added items');
  //     createNewData();
  //   };

  //   const renderCards = () => {
  //     console.log('Updated data: ', state.data);
  //     return state.data.map((obj) => {
  //       const containerStyle = classnames({
  //         'label-container': true,
  //         icebox: false,
  //       });
  //       console.log('Content: ', obj);
  //       return (
  //         <Box
  //           variant='div'
  //           component='div'
  //           className={containerStyle}
  //           key={obj.type}
  //         >
  //           <Box variant='div' component='div' className='panel'>
  //             <h3 className='panel-label'>{obj.type}</h3>
  //           </Box>
  //           <CardDrop type={obj.type}>
  //             {obj.content.map((val, idx) => {
  //               const empty = val.name === '';
  //               const newItem = val.id === newId;
  //               console.log('name: ', val.name);
  //               return (
  //                 <Card
  //                   key={val.id}
  //                   empty={empty}
  //                   type={obj.type}
  //                   pos={idx}
  //                   id={val.id}
  //                   value={val.name}
  //                   newItem={newItem}
  //                 />
  //               );
  //             })}
  //             {obj.icebox && (
  //               <button onClick={addItem} className='plus' type='button'>
  //                 +
  //               </button>
  //             )}
  //           </CardDrop>
  //         </Box>
  //       );
  //     });
  //   };

  //   return;
  //   <Box variant='div' component='div' className='tag-wrapper'>
  //     {renderCards()}
  //   </Box>;
  // };

  // const Container = () => {
  //   return <CardDeck />;
  // };

  // const App = () => {
  //   return (
  //     <DndProvider backend={HTML5Backend}>
  //       <Container />
  //     </DndProvider>
  //   );
  // };

  // ReactDOM.render(<App />, document.getElementById('container'));
};

export default Salespipeline;
