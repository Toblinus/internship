import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import joinClasses from '../../helpers/joinClasses';

const Card = ({ header, text, className }) => {
    const maxLen = 300;
    return (<div className={joinClasses('card', className)}>
        {header && <p className='card__header'>{ header }</p>}
        {text && <p className='card__text'>{ 
            text.length > maxLen ?  (text.substr(0, maxLen) + '...') : text
        }</p>}
    </div>)
}

Card.propTypes = {
    /**
     * Заголовок задачи
     */
    header: PropTypes.string.isRequired,
    /**
     * Текст задачи
     */
    text: PropTypes.string
}

export default Card;