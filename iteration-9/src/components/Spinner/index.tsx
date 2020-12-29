import React, { Component } from 'react';
import './style.css';

import FullScreenStatus from '../FullScreenStatus';

class Spinner extends Component {
    render(){
        return <FullScreenStatus>
            <div className='spinner' />
        </FullScreenStatus>;
    }
}

export default Spinner;