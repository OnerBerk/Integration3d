import React from 'react';
import {action} from '@storybook/addon-actions'
import Button from '../component/componentUi/button/button';

export default {
    title: 'Button',
    component: Button,
};

export const Text = () => <Button onclick={action('clicked')}>Hello button</Button>;


const Template = (args) => <Button {...args} > Hello button </Button>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Click',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};


