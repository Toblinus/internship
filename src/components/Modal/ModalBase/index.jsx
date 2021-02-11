import React from "react";
import PropTypes from "prop-types";

import PopoutWrapper from '../../PopoutWrapper'
import ActionBar, { buttonPropTypes } from '../../ActionsBar';

import './style.css';

const ModalBase = ({ onCancel, children, actions }) => {
    return <PopoutWrapper className='modal-base' onClick={ onCancel } >
        <div className='modal-base__content' onClick={(event) => {
            event.stopPropagation();
        }}>
            <div className='modal-base__main'>
                { children }
            </div>
            {actions.length ? (<div className={'modal-base__footer'}>
                <ActionBar buttons={actions} />
            </div>) : null}
        </div>
    </PopoutWrapper>
}

ModalBase.propTypes = {
    onCancel: PropTypes.func,
    children: PropTypes.node.isRequired,
    actions: buttonPropTypes
}

ModalBase.defaultProps = {
    onCancel: () => {},
    actions: []
}

export default ModalBase;