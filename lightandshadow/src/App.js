import React from 'react'
import './App.css';
import MainCanvas from './component/canvas/mainCanvas'
import Configurator from './component/configuration/configurator'

function App() {
  return (
    <div className="App">
      <Configurator/>
      <MainCanvas/>
    </div>
  );
}
export default App;
