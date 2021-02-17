import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Card, { CardPropTypes } from '../Card';
import WrapperWithButtons, { buttonPropTypes } from '../WrapperWithButtons';
import joinClasses from '../../helpers/joinClasses';

const CardList = ({ header, tasks, className, tasksButtons, onTaskClick, swapTasks }) => {
    return (<div 
            className={joinClasses("card-list", className)}
        >
        {header && <p className="card-list__header">{ header }</p>}
        <div className="card-list__content">
            { tasks.map((args, index) => (args && <div 
                style={{opacity: args.isChecked ? .4 : 1}}
                key={args.id}  
                className="card-list__item">
                    <WrapperWithButtons  buttons={ tasksButtons.map(btn => ({ 
                        ...btn,
                        action: () => btn.action?.(index) 
                    }))} >
                            <Card {...args} onClick={
                                (typeof onTaskClick === 'function') ?
                                    () => {
                                        onTaskClick(args, index)
                                    } : null
                            } />
                    </WrapperWithButtons>
            </div>))}
        </div>
    </div>);
}

const cardPropTypes = {...CardPropTypes};
delete cardPropTypes.onClick;
cardPropTypes.id = PropTypes.number.isRequired;

CardList.propTypes = {
    /** 
     * Заголовок списка задач 
     */
    header: PropTypes.string.isRequired,
    /** 
     * Cписок задач 
     */
    tasks: PropTypes.arrayOf(
        PropTypes.exact({
            ...cardPropTypes
        })
    ),
    /**
     * Список кнопок, отбражаемых на карточках
     */
    tasksButtons: buttonPropTypes,
    onTaskClick: PropTypes.func,
    swapTasks: PropTypes.func
}

CardList.defaultProps = {
    tasks: [],
    tasksButtons: []
}

export default CardList;