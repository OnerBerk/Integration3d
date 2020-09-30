import React from 'react'
import './app.scss';
import MainCanvas from './component/canvas/mainCanvas'
import Configurator from './component/configuration/configurator'

const App = () => {
  return (
    <div>
      <Configurator/>
      <MainCanvas/>
    </div>
  );
}
export default App;
