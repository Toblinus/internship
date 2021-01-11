import React, {FC, useRef} from 'react';
import './style.css';

import FullScreenStatus from '../FullScreenStatus';
import Wrapper from '../Wrapper';

type propsType = { 
    value?: string,
    btnText?: string, 
    onChangeEnd: Function 
};

const MainPage: FC<propsType> = function(props){
    const input = useRef(null);
    const endInput = function(){
        props.onChangeEnd?.call({}, input.current.value);
    }
    const keyUp = function(event: React.KeyboardEvent<HTMLInputElement>){
        event.preventDefault();
        if(event.key == 'Enter'){
            endInput();
        }
    }
    
    return (<FullScreenStatus>
        <Wrapper>
            <div className='input-username'>
                <input
                    ref={input}
                    className='input-username__input' 
                    defaultValue={props.value}
                    onKeyUp={ keyUp } />
                <button
                    className="input-username__btn" 
                    onClick={ endInput }>
                        {props.btnText || 'OK'}
                </button>
            </div>
        </Wrapper>
    </FullScreenStatus>);
}

export default MainPage;