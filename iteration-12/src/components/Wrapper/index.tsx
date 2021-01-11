import React, { FC } from 'react';
import './style.css';

const Wrapper: FC = function(props) {
    return (<div className="wrapper">
        {props.children}
    </div>);
}

export default Wrapper;