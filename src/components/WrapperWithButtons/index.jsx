import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import ActionsBar, { buttonPropTypes as btnTypes } from '../ActionsBar';

const WrapperWithButtons = ({ children, buttons, hasToolbar }) => {
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

WrapperWithButtons.propTypes = {
    children: PropTypes.element.isRequired,
    buttons: btnTypes,
    hasToolbar: PropTypes.bool
}

WrapperWithButtons.defaultProps = {
    buttons: [],
    hasToolbar: false
}

export const buttonPropTypes = btnTypes;
export default WrapperWithButtons;