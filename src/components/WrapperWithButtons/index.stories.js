import React from 'react';
import WWB from './index';

import Card from '../Card';

export default {
    title: 'WrapperWithButtons',
    component: WWB
}

const Template = (args) => <WWB {...args} />;

export Card = Template.bind({});