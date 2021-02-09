import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const WrapperWithButtons = ({ children, buttons }) => {
    return (<div className='wrap-with-btns'>
        <div className='wrap-with-btns__buttons'>{ 
            buttons.map((btn, index) => <button
                 onClick={btn.action}
                 key={index}
                 className='wrap-with-btns__button'>{ 
                    btn.content 
                }</button>)
        }</div>
        <div className='wrap-with-btns__content'>{ children }</div>
    </div>);
}

WrapperWithButtons.propTypes = {
    children: PropTypes.element.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.exact({
        content: PropTypes.node.isRequired,
        action: PropTypes.func.isRequired
    }))
}

WrapperWithButtons.defaultProps = {
    buttons: []
}

export default WrapperWithButtons;