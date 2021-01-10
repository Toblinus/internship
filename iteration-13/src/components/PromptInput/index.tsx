import React, { FC, useRef } from 'react';

import IconButton from '../IconButton';
import './style.css'

export interface IPromptInputProps {
    onEndInput?: (text: string) => void,
    defaultValue?: string,
    autoClear?: boolean
}

const PropmptInput: FC<IPromptInputProps> = ({ defaultValue, onEndInput, autoClear }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const endInputHandler = () => {
        const value = inputRef.current.value;
        if(value){
            onEndInput?.(value);
            if(autoClear) {
                inputRef.current.value = '';
            }
        }
    }
    const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.code == 'Enter') {
            endInputHandler();
        }
    }
    return (<div className="propmpt-input">
        <input 
            type="text" 
            defaultValue={defaultValue} 
            ref={inputRef}
            className="propmpt-input__input"
            onKeyUp={(e) => keyUpHandler(e)}
        />
        <IconButton onClick={ endInputHandler } type="add" />
    </div>)
}

export default PropmptInput;