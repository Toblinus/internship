import React from "react";

import PopoutWrapper from '../../PopoutWrapper'
import ActionBar, { buttonPropTypes } from '../../ActionsBar';

import './style.css';

export type Props = {
    onCancel: () => void,
    children: JSX.Element,
    actions: buttonPropTypes
}

const ModalBase: React.FC<Props> = ({ onCancel, children, actions }) => {
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

export default ModalBase;