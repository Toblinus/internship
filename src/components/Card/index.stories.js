import React from 'react';
import Card from './index';

export default {
    title: 'Trello/Card',
    component: Card
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({});
Default.args = {
    header: 'title',
    text: ''
}