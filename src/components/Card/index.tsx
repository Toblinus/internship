import React from 'react';
import './style.css';

import joinClasses from '../../helpers/joinClasses';
import getNowDate from '../../helpers/getNowDate';

const calcDelta = (date: string) => {
    const now = new Date(getNowDate());
    const dt = new Date(date);
    const msDelta = now.getTime() - dt.getTime();
    return msDelta / (24 * 3600 * 1000);
}

const formatDate = (date: string) => {
    const isDate = /\d{4}-\d{2}-\d{2}/.test(date);
    if(!isDate) {
        return date;
    }

    const delta = calcDelta(date);

    if(delta === 1) {
        return 'Вчера';
    } else if(delta === 0) {
        return 'Сегодня';
    } else if(delta === -1) {
        return 'Завтра';
    }

    return date.split('-').reverse().join('.');
}



const maxLen = 300;

export type Props = {
  header: string; 
  text: string;
  date: string;
  className: string;         
  onClick: (() => void) | null;
};

export type CardType = Omit<Props, 'onClick'> & {
  isChecked: boolean;
  id: number;
};

const Card: React.FC<Props> = ({ 
  header, 
  text,
  date, 
  className,         
  onClick
}) => {

  return (<div
    className={joinClasses('card', className)} 
    onClick={(event) => {
    event.stopPropagation();
    if(typeof onClick === 'function') {
        onClick();
    }
  }}>
    {header && <p className='card__header'>{ header }</p>}
    {text && <p className='card__text'>{ 
      text.length > maxLen ?  (text.substr(0, maxLen) + '...') : text
    }</p>}
    {date && <p className='card__date'>{ formatDate(date) }</p>}
  </div>)
}

export default Card;