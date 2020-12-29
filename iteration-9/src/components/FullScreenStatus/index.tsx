import React, { Component } from 'react';
import './style.css';

class FullScreenStatus extends Component {
    render(){
        return <div className="full-screen-status">
            {this.props.children}
        </div>
    }
}

export default FullScreenStatus;