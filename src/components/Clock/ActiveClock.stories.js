import React from 'react';
import Clock from './ActiveClock.jsx';

const Template = (args = {}) => <Clock />;

export default {
    title: 'Clock/Active',
    component: Clock
}

export const Primary = Template.bind({});