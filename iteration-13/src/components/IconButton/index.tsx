import React, { FC } from 'react';

import './style.css';

export interface IIconButtonProps {
    type: 'remove'|'add',
    onClick: () => void 
}

const IconButton: FC<IIconButtonProps> = ({ type, onClick }) => {
    return <div 
        onClick={onClick}
        title={type == 'add' ? 'Добавить' : 'Удалить'} 
        className={`icon-button icon-button_${type}`} />
}

export default IconButton;