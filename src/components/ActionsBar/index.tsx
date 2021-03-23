import React from 'react';
import './style.css';

import ActionBarBtn, { themes } from './ActionBarBtn';

export type Props = {
  isReverse?: boolean;
  buttons: buttonPropTypes;
  btnClassName?: string;
};

const ActionBar: React.FC<Props> = ({ isReverse = false, buttons, btnClassName = '' }) => {
  return (<div className={'action-bar' + (isReverse ? ' action-bar_reverse' : '')}>{ 
    buttons.map((btn, index) => <ActionBarBtn
      className={btnClassName}
      onClick={btn.action}
      key={index}
      theme={btn.mode} >{ 
        btn.content 
      }</ActionBarBtn>)
}</div>);
}

export type buttonPropTypes = {
  content: JSX.Element,
  action: (a: number) => void,
  mode: themes
}[];

export default ActionBar;
