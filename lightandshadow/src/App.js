import React from 'react'
import './app.scss';
import Canvas from './component/component3d/canvas/mainCanvas'
import Configurator from './component/configuration/configurator'

const App = () => {
  return (
    <div className="app">
      <Configurator/>
      <Canvas />
    </div>
  );
}
export default App;
