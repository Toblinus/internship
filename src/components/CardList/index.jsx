import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Card, { CardPropTypes } from '../Card';
import WrapperWithButtons from '../WrapperWithButtons';
import joinClasses from '../../helpers/joinClasses';
import SortingElement from '../SortingElement';

const CardList = ({ header, tasks, className, tasksButtons, onTaskClick }) => {
    return (<div 
            className={joinClasses("card-list", className)}
        >
        {header && <p className="card-list__header">{ header }</p>}
        <div className="card-list__content">
            { tasks.map((args, index) => (<div key={index}  className="card-list__item">
                <SortingElement id={args.id}>
                    <WrapperWithButtons  buttons={ tasksButtons.map(btn => ({ 
                        content: btn.content,
                        action: () => btn.action?.(index) 
                    }))} >
                            <Card {...args} onClick={
                                (typeof onTaskClick === 'function') ?
                                    () => {
                                        onTaskClick(args, index)
                                    } : null
                            } />
                    </WrapperWithButtons>
                </SortingElement>
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
    tasksButtons: PropTypes.arrayOf(
        PropTypes.exact({
            content: PropTypes.node,
            action: PropTypes.func
        })
    ),
    onTaskClick: PropTypes.func
}

CardList.defaultProps = {
    tasks: [],
    tasksButtons: []
}

export default CardList;