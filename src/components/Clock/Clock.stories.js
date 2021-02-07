import React from 'react';
import Clock from './Clock.jsx';


export default {
  title: 'Clock/Base',
  component: Clock,
  argTypes: {
    s: {
      control: {
        type: 'range',
        min: 0, 
        max: 59, 
        step: 1
      }
    },
    m: {
      control: {
        type: 'range',
        min: 0, 
        max: 59,
        step: 1
      }
    },
    h: {
      control: {
        type: 'range',
        min: 0, 
        max: 11, 
        step: 1
      }
    },
    pathImg: {
      control: {
        type: 'text'
      }
    }
  }
};

const Template = (args) => <Clock {...args} />;
export const Primary = Template.bind({});