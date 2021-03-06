import React from 'react';
import CardList from './index';

export default {
    title: 'Trello/CardList',
    component: CardList
}

const Template = (args) => <CardList {...args} />

export const Default = Template.bind({});
Default.args = {
    header: 'Испытательный срок',
    tasks: [
        {
            header: 'Lodash',
            text: 'Изучить и интегрировать в проект'
        }, {
            header: 'Redux',
            text: 'Изучить и интегрировать в проект'
        }
    ]
}