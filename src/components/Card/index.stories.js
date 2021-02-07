import React from 'react';
import Card from './index';

export default {
    title: 'Trello/Card',
    component: Card
}

const Template = (args) => <Card {...args} />

export const Primary = Template.bind({});
Primary.args = {
    header: 'title',
    text: ''
}