import React, {Component} from 'react';
import './style.css';

import FullScreenStatus from '../FullScreenStatus';
import Wrapper from '../Wrapper';

type propsType = { 
    value?: string,
    btnText?: string, 
    onChangeEnd: Function 
};
type stateType = {
    text: string
};

class MainPage extends Component<propsType, stateType> {
    constructor(props: propsType){
        super(props);
        this.state = {
            text: props.value || ""
        }
    }

    doChangeEnd(){
        this.props.onChangeEnd?.call({}, this.state.text);
    }

    change(event: Event){
        const input = event.target as HTMLInputElement;
        this.setState({text: input.value});
    }

    keyUp(event: KeyboardEvent){
        event.preventDefault();
        if(event.key == 'Enter'){
            this.doChangeEnd();
        }
    }

    render(){
        return (<FullScreenStatus>
            <Wrapper>
                <div className='input-username'>
                    <input
                        className='input-username__input' 
                        value={this.state.text} 
                        onChange={ this.change.bind(this) } 
                        onKeyUp={ this.keyUp.bind(this) } />
                    <button
                        className="input-username__btn" 
                        onClick={ this.doChangeEnd.bind(this) }>
                            {this.props.btnText || 'OK'}
                    </button>
                </div>
            </Wrapper>
        </FullScreenStatus>);
    }
}

export default MainPage;