import React from 'react';
import PropTypes from 'prop-types';

const WrapperWithButtons = ({ children, buttons }) => {
    return (<div className='wrap-with-btns'>
        <div className='wrap-with-btns__buttons'>{ buttons }</div>
        <div className='wrap-with-btns__content'>{ children }</div>
    </div>);
}

WrapperWithButtons.propTypes = {
    children: PropTypes.element.isRequired,
    buttons: PropTypes.node
}

export default WrapperWithButtons;