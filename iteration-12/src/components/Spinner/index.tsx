import React from 'react';
import './style.css';

import FullScreenStatus from '../FullScreenStatus';

function Spinner() {
    return <FullScreenStatus>
            <div className='spinner' />
        </FullScreenStatus>;
}

export default Spinner;