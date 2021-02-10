import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Card from '../Card';
import WrapperWithButtons from '../WrapperWithButtons';
import joinClasses from '../../helpers/joinClasses';

const CardList = ({ header, tasks, className, tasksButtons }) => {
    return (<div className={joinClasses("card-list", className)}>
        {header && <p className="card-list__header">{ header }</p>}
        <div className="card-list__content">
            { tasks.map((args, index) => (<div className="card-list__item">
                <WrapperWithButtons buttons={ tasksButtons.map(btn => ({ 
                    content: btn.content,
                    action: () => btn.action?.(index) 
                }))} >
                    <Card key={index} {...args} />
                </WrapperWithButtons>
            </div>))}
        </div>
    </div>);
}

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
            header: PropTypes.string.isRequired,
            text: PropTypes.string
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
    )
}

CardList.defaultProps = {
    tasks: [],
    tasksButtons: []
}

export default CardList;