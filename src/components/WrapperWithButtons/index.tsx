import React from 'react';

import './style.css';

import ActionsBar, { buttonPropTypes as btnTypes } from '../ActionsBar';

export type Props = {
    children: JSX.Element,
    buttons: btnTypes,
    hasToolbar?: boolean
};

const WrapperWithButtons: React.FC<Props> = ({ children, buttons, hasToolbar = false }) => {
    return (<div className='wrap-with-btns'>
        <div className={'wrap-with-btns__buttons' + (hasToolbar ? ' wrap-with-btns__toolbar' : '')}>
            <ActionsBar 
                isReverse={hasToolbar} 
                buttons={buttons} 
                btnClassName={hasToolbar ? 'wrap-with-btns__button' : ''} 
            />
        </div>
        <div className='wrap-with-btns__content'>{ children }</div>
    </div>);
}

export type buttonPropTypes = btnTypes;
export default WrapperWithButtons;