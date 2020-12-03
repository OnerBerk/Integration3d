import React from 'react'
import './app.scss';
import Configurator from './component/configuration/configurator'
import CanvasProject from './component/component3d/canvas';



const App = () => {
  return (
    <div className="app">
      <Configurator/>
      <CanvasProject/>
    </div>
  );
}
export default App;
