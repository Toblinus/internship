import React, { FC } from 'react';
import './style.css';

const FullScreenStatus: FC =  function(props) {
    return <div className="full-screen-status">
        {props.children}
    </div>
}

export default FullScreenStatus;