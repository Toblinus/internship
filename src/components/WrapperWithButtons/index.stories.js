import React from 'react';
import WWB from './index';
import { action } from "@storybook/addon-actions";

import CardComponent from '../Card';
import CardListComponent from '../CardList';
import BoardComponent from '../Board';

export default {
    title: 'Trello/WrapperWithButtons',
    component: WWB
}

const Template = (args) => <WWB {...args} />;

export const Card = Template.bind({});
Card.args = {
    children: <CardComponent header='this is title' text='this is content' />,
    buttons: [{
        content: 'h',
        action: action('click')
    }, {
        content: 'f',
        action: action('click')
    }]
};

export const CardList = Template.bind({});
CardList.args = {
    children: <CardListComponent header='this is title' />,
    buttons: [{
        content: 'h',
        action: action('click')
    }, {
        content: 'f',
        action: action('click')
    }]
};

export const Board = Template.bind({});
Board.args = {
    children: <BoardComponent header='this is title' />,
    buttons: [{
        content: '+',
        action: action('click')
    }, {
        content: 'f',
        action: action('click')
    }]
};