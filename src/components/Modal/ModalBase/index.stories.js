import React from 'react';
import Modal from './index';

export default {
    title: 'Trello/Modal/Base',
    component: Modal
}

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (<h2>This is modal window</h2>),
    actions: [
        {
            content: 'OK'
        }, {
            content: 'Cancel'
        }
    ]
}