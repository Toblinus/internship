import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ActionBarBtn = ({ children, onClick, theme }) => {
    return (<button
        onClick={onClick}
        className={`action-bar-btn action-bar-btn_mode_${theme}`}
    >{ 
        children 
    }</button>);
}

export const themes = PropTypes.oneOf(['primary', 'destructive']);

ActionBarBtn.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    theme: themes
}

ActionBarBtn.defaultProps = {
    theme: 'primary',
    children: ''
}

export default ActionBarBtn;