import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ActionBarBtn, { themes } from './ActionBarBtn';

const ActionBar = ({ isReverse, buttons, btnClassName }) => {
    return (<div className={'action-bar' + (isReverse ? ' action-bar_reverse' : '')}>{ 
        buttons.map((btn, index) => <ActionBarBtn
            className={btnClassName}
            onClick={btn.action}
            key={index}
            theme={btn.mode} >{ 
                btn.content 
            }</ActionBarBtn>)
    }</div>);
}

export const buttonPropTypes = PropTypes.arrayOf(
    PropTypes.exact({
        content: PropTypes.node.isRequired,
        action: PropTypes.func.isRequired,
        mode: themes
    })
).isRequired;

ActionBar.propTypes = {
    isReverse: PropTypes.bool,
    buttons: buttonPropTypes,
    btnClassName: PropTypes.string
}

ActionBar.defaultProps = {
    isReverse: true,
    btnClassName: ''
}

export default ActionBar;