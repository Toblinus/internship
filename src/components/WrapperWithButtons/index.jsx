import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import ActionsBar from '../ActionsBar';

const WrapperWithButtons = ({ children, buttons, hasToolbar }) => {
    return (<div className='wrap-with-btns'>
        <div className={'wrap-with-btns__buttons' + (hasToolbar ? ' wrap-with-btns__toolbar' : '')}>
            <ActionsBar isReverse={hasToolbar} buttons={buttons} />
        </div>
        <div className='wrap-with-btns__content'>{ children }</div>
    </div>);
}

WrapperWithButtons.propTypes = {
    children: PropTypes.element.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.exact({
        content: PropTypes.node.isRequired,
        action: PropTypes.func.isRequired
    })),
    hasToolbar: PropTypes.bool
}

WrapperWithButtons.defaultProps = {
    buttons: [],
    hasToolbar: false
}

export default WrapperWithButtons;