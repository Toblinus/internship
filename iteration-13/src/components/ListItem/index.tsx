import React, { FC } from 'react';

import IconButton from '../IconButton';
import './style.css';

export interface IListItemProps {
    text: string,
    onRemove: () => void   
}

const ListItem: FC<IListItemProps> = ({ text, onRemove }) => {
    return (<div className="list-item">
        <p className="list-item__text">{text}</p>
        <IconButton onClick={onRemove} type="remove" />
    </div>)
}

export default ListItem;