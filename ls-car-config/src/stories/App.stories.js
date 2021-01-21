import React from 'react';
import {action} from '@storybook/addon-actions'
import App from '../App';

export default {
    title: 'App',
    component: App,
};

const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'site',
};