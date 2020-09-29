import React from 'react'
import MainCanvas from '../component/canvas/mainCanvas'
import Configurator from '../component/configuration/configurator';

export default {
    title:"canvas",
    component:MainCanvas,
};

const Template = (args) => <MainCanvas {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: '3d',
};


