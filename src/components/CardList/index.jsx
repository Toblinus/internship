import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Card from '../Card';
import joinClasses from '../../helpers/joinClasses';

const CardList = ({ header, tasks, className }) => {
    return (<div className={joinClasses("card-list", className)}>
        {header && <p className="card-list__header">{ header }</p>}
        <div className="card-list__content">
            { tasks.map((args, index) => <Card key={index} className="card-list__item" {...args} />) }
        </div>
    </div>);
}

CardList.propTypes = {
    /** 
     * Заголовок списка задач 
     */
    header: PropTypes.string.isRequired,
    /** 
     * Cписко задач 
     */
    tasks: PropTypes.arrayOf(
        PropTypes.exact({
            header: PropTypes.string.isRequired,
            text: PropTypes.string
        })
    )
}

CardList.defaultProps = {
    tasks: []
}

export default CardList;