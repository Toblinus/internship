import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import joinClasses from '../../helpers/joinClasses';

const Card = ({ header, text, className, onClick }) => {
    const maxLen = 300;
    return (<div className={joinClasses('card', className)} onClick={(event) => {
        event.stopPropagation();
        if(typeof onClick === 'function') {
            onClick(event);
        }
    }}>
        {header && <p className='card__header'>{ header }</p>}
        {text && <p className='card__text'>{ 
            text.length > maxLen ?  (text.substr(0, maxLen) + '...') : text
        }</p>}
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
    onClick: PropTypes.func
}

Card.propTypes = CardPropTypes;
export default Card;