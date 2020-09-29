import React from 'react';
import { action } from '@storybook/addon-actions'
import Configurator from '../component/configuration/configurator'

export default {
    title: 'Confifurateur',
    component: Configurator,
  };

const Template = (args) => <Configurator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

