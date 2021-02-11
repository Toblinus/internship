import React from './index';
import MFF from './index';

export default {
    title: 'Trello/Modal/FormField',
    component: MFF
}

const Template = (args) => <MFF {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'this is title'
}
