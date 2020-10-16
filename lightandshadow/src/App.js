import React from 'react'
import './app.scss';
import Configurator from './component/configuration/configurator'
import Canvas from './component/component3d/canvas/canvas';


const App = () => {
  return (
    <div className="app">
      <Configurator/>
      <Canvas/>
    </div>
  );
}
export default App;
