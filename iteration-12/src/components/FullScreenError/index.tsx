import React, { FC } from 'react';
import './style.css';

import FullScreenStatus from '../FullScreenStatus';

type propsType = {
    header: string|number,
    description?: string
}

const FullScreenError: FC<propsType> = function(props) {
    return (
        <FullScreenStatus>
            <div className="display-error">
                <h3 className="display-error__header">{props.header}</h3>
                {props.description && (
                    <p className="display-error__description">{props.description}</p>
                )}
            </div>
        </FullScreenStatus>
    );
}

export default FullScreenError;