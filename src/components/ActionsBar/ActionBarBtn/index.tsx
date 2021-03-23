import React from 'react';

import joinClasses from '../../../helpers/joinClasses';
import './style.css';

export type themes = 'primary' | 'destructive';

export type Props = {
    children: JSX.Element;
    onClick: (a: any) => void;
    theme: themes;
    className: string; 
}

const ActionBarBtn: React.FC<Props> = ({ children = '', onClick, theme = 'primary', className }) => {
    return (<button
        onClick={onClick}
        className={joinClasses(
            'action-bar-btn', 
            `action-bar-btn_mode_${theme}`,
            className)}
    >{ 
        children 
    }</button>);
}

export default ActionBarBtn;