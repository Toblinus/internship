import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../CardList';
import joinClasses from '../../helpers/joinClasses';

import './style.css';


const Board = ({ children, className }) => {
    return (<div className={joinClasses("board", className)}>
            { children.length ? children : 'Пусто' }
    </div>);
}

Board.propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(CardList))
}

Board.defaultProps = {
    children: []
}

export default Board;