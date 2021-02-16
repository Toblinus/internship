import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import joinClasses from '../../helpers/joinClasses';
import getNowDate from '../../helpers/getNowDate';

const calcDelta = (date) => {
    const now = new Date(getNowDate());
    const dt = new Date(date);
    const msDelta = now.getTime() - dt.getTime();
    return msDelta / (24 * 3600 * 1000);
}

const formatDate = (date) => {
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




const Card = ({ 
        header, 
        text,
        date, 
        className,         
        onClick
    }) => {
    const maxLen = 300;
    return (<div
        className={joinClasses('card', className)} 
        onClick={(event) => {
        event.stopPropagation();
        if(typeof onClick === 'function') {
            onClick(event);
        }
    }}>
        {header && <p className='card__header'>{ header }</p>}
        {text && <p className='card__text'>{ 
            text.length > maxLen ?  (text.substr(0, maxLen) + '...') : text
        }</p>}
        {date && <p className='card__date'>{ formatDate(date) }</p>}
    </div>)
}

export const CardPropTypes = {
    /**
     * Заголовок задачи
     */
    header: PropTypes.string.isRequired,
    /**
     * Текст задачи
     */
    text: PropTypes.string,
    onClick: PropTypes.func,
    date: PropTypes.string
}

Card.propTypes = CardPropTypes;
export default Card;