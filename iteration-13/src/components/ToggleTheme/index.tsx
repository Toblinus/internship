import React, { FC } from 'react';
import { ThemeEnum, Theme } from '../../App';

export interface IToggleThemeProps {
    onToggle: () => void
}

const ToggleTheme: FC<IToggleThemeProps> = ({ onToggle }) => {
    return (<Theme.Consumer>
        {(theme) => (<div style={{paddingTop: 20}}>
            Текущая тема: {theme == ThemeEnum.ligth ? 'Светлая' : 'Темная'}
             <div>
                <button onClick={onToggle} style={{ padding: 5 }}>
                    Переключить тему
                </button>
             </div>
        </div>)}
    </Theme.Consumer>)
}

export default ToggleTheme;