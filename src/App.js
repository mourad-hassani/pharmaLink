import React from 'react';
import SimpleMap from './components/SimpleMap';
import RemoteMap from './components/RemoteMap';
import './App.css';
import './css/leaflet-container.css';

function App() {
  return (
    <>
      <div className="leaflet-container">
        <SimpleMap />
      </div>
      <div className="leaflet-container">
        <RemoteMap />
      </div>
    </>
  );
}

export default App;
