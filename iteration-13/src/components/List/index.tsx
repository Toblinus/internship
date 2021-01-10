import React, { FC } from 'react';

import ListItem from '../ListItem';
import { IListItemData } from '../../store';

import './style.css';

export interface IListProps {
    list: IListItemData[],
    onRemoveItem: (id: number) => void; 
}

const List: FC<IListProps> = ({ list, onRemoveItem }) => {
    return <div className="list">
        { list?.map(item => (<ListItem 
            text={item.text}
            onRemove={onRemoveItem.bind(item, item.id)}
            key={item.text + item.id}
        />)) }
    </div>;
}

export default List;