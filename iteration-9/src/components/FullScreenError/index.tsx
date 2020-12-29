import React, { Component } from 'react';
import './style.css';

import FullScreenStatus from '../FullScreenStatus';

type propsType = {
    header: string|number,
    description?: string
}

class FullScreenError extends Component<propsType> {
    render(){
        return (
            <FullScreenStatus>
                <div className="display-error">
                    <h3 className="display-error__header">{this.props.header}</h3>
                    {this.props.description && (
                        <p className="display-error__description">{this.props.description}</p>
                    )}
                </div>
            </FullScreenStatus>
        );
    }
}

export default FullScreenError;