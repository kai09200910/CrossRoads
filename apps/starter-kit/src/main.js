import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import './assets/styles/index.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <DndProvider backend={HTML5Backend}>
    <StrictMode> 
      <App />
    </StrictMode>
  ,
  {/* </DndProvider> */}
);
