import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Salespipelinelist from './salesPipeline';
import CommissionOutline from './commissionOutline';
import RecentInquires from './recentInquires';
import './salespipeline.scss';

// const Salespipeline = () => {
//   return (
//     <>
// <Grid container spacing={5} mt={0}>
//   <Grid item xs={12} md={12}>
//     <Salespipelinelist />
//   </Grid>
// </Grid>

//   <Grid container spacing={5} mt={0}>
//       <Grid item xs={12} md={6}>
//         <RecentInquires />
//       </Grid>
//       <Grid item xs={12} md={3}>
//         <CommissionOutline />
//       </Grid>
//       <Grid item xs={12} md={3}>
//         <CommissionOutline />
//       </Grid>
// </Grid>
//     </>
//   );
// };

// export default Salespipeline;


const DraggableComponent = ({ id, children, onDrop }) => {
  const ref = useRef(null);


  const handleTouchStart = (e) => {
    // Handle touch start
  };

  const handleTouchMove = (e) => {
    // Handle touch move
  };

  const handleTouchEnd = (e) => {
    // Handle touch end
  };

  const [, drop] = useDrop({
    accept: 'DRAGGABLE_COMPONENT',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = id;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      onDrop(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'DRAGGABLE_COMPONENT',
    item: () => {
      return { id, index: id }; // Fix here: Define the index property
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

const touchHandlers = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };

  // Merge touch handlers with drag and drop handlers
  const combinedHandlers = { ...touchHandlers, ...drag(drop(ref)) };

  return (
    <div
      ref={ref}
      style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}
      {...combinedHandlers}
    >
      {children}
    </div>
  );
};


const Salespipeline = () => {
  const [components, setComponents] = React.useState([
    'RecentInquires',
    'CommissionOutline',
    'CommissionOutline',
  ]); 

  const handleDrop = (dragIndex, hoverIndex) => {
    const newComponents = [...components];
    const draggedComponent = newComponents[dragIndex];
    newComponents.splice(dragIndex, 1);
    newComponents.splice(hoverIndex, 0, draggedComponent);
    setComponents(newComponents);
  };

  return (
    <>
      <Grid container spacing={5} mt={0}>
        <Grid item xs={12} md={12}>
          <Salespipelinelist />
        </Grid>
      </Grid>
      <DndProvider backend={HTML5Backend}>
        <Grid container spacing={5} mt={0}>
          {components.map((component, index) => (
            <Grid item key={index} xs={12} md={component === 'RecentInquires' ? 6 : 3}>
              <DraggableComponent id={index} onDrop={handleDrop}>
                {component === 'RecentInquires' ? (
                  <RecentInquires />
                ) : (
                  <CommissionOutline />
                )}
              </DraggableComponent>
            </Grid>                   
          ))}
        </Grid>
      </DndProvider>

      {/* <DndProvider backend={HTML5Backend}>
        <Grid container spacing={5} mt={0}>
          {components.map((component, index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={component === 'RecentInquires' ? 6 : 3}
            >
              <DraggableComponent id={index} onDrop={handleDrop}>
                {component === 'RecentInquires' ? (
                  <RecentInquires />
                ) : (
                  <CommissionOutline />
                )}
              </DraggableComponent>
            </Grid>
          ))}
          <Grid item xs={12} md={6}>
            <DraggableComponent id={components.length} onDrop={handleDrop} style={{ backgroundColor: 'green' }}>
              <RecentInquires />
            </DraggableComponent>
          </Grid>
          <Grid item xs={12} md={6}>
            <DraggableComponent id={components.length + 1} onDrop={handleDrop} style={{ backgroundColor: 'yellow' }}>
              <RecentInquires style={{ backgroundColor: 'red' }}/>
            </DraggableComponent>
          </Grid>
          <Grid item xs={12} md={3}>
            <DraggableComponent id={components.length + 2} onDrop={handleDrop} style={{ backgroundColor: 'red' }}>
              <CommissionOutline style={{ backgroundColor: 'yellow' }} />
            </DraggableComponent>
          </Grid>
          <Grid item xs={12} md={3}>
            <DraggableComponent id={components.length + 3} onDrop={handleDrop} style={{ backgroundColor: 'blue' }}>
              <CommissionOutline />
            </DraggableComponent>
          </Grid>
        </Grid>
      </DndProvider> */}
    </>
  );
};

export default Salespipeline;
