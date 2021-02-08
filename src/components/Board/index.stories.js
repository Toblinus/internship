import React from 'react';
import Board from './index';
import CardList from '../CardList'; 

export default {
    title: 'Trello/Board',
    component: Board,
    argTypes: {
        children: {
            control: {
                type: 'text',
                // subControls: {
                //     json: {
                //         type: 'text'
                //     }
                // },
                resolve: (props) => {
                    console.log(props);
                    return 'sfd';
                }
            }
        }
    }
}

const Template = (args) => <Board {...args} />

export const Default = Template.bind({});
Default.args = {
    children: [
        <CardList header='fdf' key='dgf' tasks={[
            {
                header: 'test',
                text: 'dsff'
            }, {
                header: 'test',
                text: 'dsff'
            },
            {
                header: 'test',
                text: 'dsff'
            }
        ]} />,
        <CardList />
    ]
}