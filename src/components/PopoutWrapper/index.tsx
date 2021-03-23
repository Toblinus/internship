import React from "react";
import PropTypes from "prop-types"

import joinClasses from '../../helpers/joinClasses';

import './style.css';

export type Props = {
    className?: string;
    children: JSX.Element;
    onClick?: () => void;
}

const PopoutWrapper: React.FC<Props> = ({ children, onClick = () => {}, className = '' }) => {
    return (<div className={joinClasses('popout-wrapper', className)} onClick={onClick} >
        { children }
    </div>);
}
export default PopoutWrapper;