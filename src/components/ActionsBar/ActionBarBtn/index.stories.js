import React from 'react';
import ActionBarBtn from './index';

export default {
    title: 'Trello/ActionBar/ActionBarBtn',
    component: ActionBarBtn
}

const Template = (args) => <ActionBarBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'test'
}