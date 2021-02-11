import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ModalFormField = ({ title, refProp, type, ...args }) => {
    const [ isV, setIsV ] = useState(true);
    const refFunc = useCallback((node) => {
        if(node === null){
            return;
        }

        if(refProp !== undefined) {
            if(refProp.current === undefined) {
                refProp.current = [ node ];
            } else if(!Array.isArray(refProp.current)) {
                refProp.current = [ refProp.current, node ];
            } else {
                refProp.current.push(node);
            }
        }
        window.addEventListener('resize', () => {
            const w = node.offsetWidth;
            setIsV(w < 450);
        })
    }, [ refProp ]);

    return (<div className={`modal-form-field ${isV ? 'v' : 'h'}`}>
        <span className='modal-form-field__title'>{ title }</span>
        {
            type === 'multiline' ? (
                <textarea
                    className='modal-form-field__input' 
                    { ...args } 
                    ref={ refFunc } 
                />
            ) : (
                <input
                    className='modal-form-field__input'
                    type={type} 
                    { ...args } 
                    ref={ refFunc } 
                />
            )
        }
        
    </div>);
}

ModalFormField.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    refProp: PropTypes.shape({ current: PropTypes.oneOf([
        PropTypes.instanceOf(Element),
        PropTypes.arrayOf(PropTypes.instanceOf(Element))
    ]) })
}

ModalFormField.defaultProps = {
    type: 'text'
}

export default ModalFormField;