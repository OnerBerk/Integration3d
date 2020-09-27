import React from 'react';
import { action } from '@storybook/addon-actions'
import Button  from '../component/elements/button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = ()=> <Button onclick={action('clicked')}>Hello button</Button>;
