import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Offcanvas from './Offcanvas';
import Map from './Map';
import React from 'react';
import { OffCanvasProvider } from './OffCanvasProvider';

function App() {
  return (
    <div className="d-flex">
      <OffCanvasProvider>
        <Sidebar />
        <div className="w-100">
          <Header />
          <div style={{ position: 'relative' }}>
            <div className='map-box'>
              <Map />
              <Offcanvas />
            </div>
          </div>
        </div>
      </OffCanvasProvider>
    </div>
  );
}

export default App;
