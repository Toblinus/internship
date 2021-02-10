import React from 'react';
import PropTypes from 'prop-types';
import joinClasses from '../../helpers/joinClasses';

import './style.css';


const Board = ({ children, className }) => {
    return (<div className={joinClasses("board", className)}>
            { children.length || !Array.isArray(children) ? children : 'Пусто' }
    </div>);
}

Board.propTypes = {
    children: PropTypes.node
}

Board.defaultProps = {
    children: []
}

export default Board;