import React from 'react';
import PW from './index';

export default {
    title: 'Trello/PopoutWrapper',
    component: PW,
    decorators: [(Story) => (<div
        style={{
            position: 'relative',
            width: '100%',
            height: '100%'
        }}
    >{
        <Story />
    }</div>)]
}

const Template = (...args) => <PW {...args} />

export const Default = Template.bind();
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}