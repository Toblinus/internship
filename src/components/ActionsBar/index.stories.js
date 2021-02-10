import React from 'react';
import ActionBar from './index';

export default {
    title: 'Trello/ActionBar/ActionBar',
    component: ActionBar
}

const Template = (args) => <ActionBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    buttons: [
        {
            content: '1',
            action: () => {}
        }, {
            content: '2',
            action: () => {}
        }, {
            content: '3',
            action: () => {}
        }, {
            content: '4',
            action: () => {}
        }
    ]
}