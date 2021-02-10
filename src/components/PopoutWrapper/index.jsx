import React from "react";
import PropTypes from "prop-types"

import joinClasses from '../../helpers/joinClasses';

import './style.css';

const PopoutWrapper = ({ children, onClick, className }) => {
    return (<div className={joinClasses('popout-wrapper', className)} onClick={onClick} >
        { children }
    </div>);
}

PopoutWrapper.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
}

PopoutWrapper.defaultProps = {
    onClick: () => {}
}

export default PopoutWrapper;