import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

import { add, remove } from './actions';
import List from './components/List';
import PromptInput from './components/PromptInput';
import Wrapper from './components/Wrapper';
import ToggleTheme from './components/ToggleTheme';
import { IListItemData } from './store';

export enum ThemeEnum {
    ligth,
    dark
}

const themes = [
    {
        background: "#FFF",
        color: "#000" 
    },
    {
        background: "#000",
        color: "#FFF"
    }
];

export const Theme = React.createContext(ThemeEnum.ligth);

interface IAppProps {
    list: IListItemData[],
    add: typeof add,
    remove: typeof remove
}

const App: FC<IAppProps> = ({ list, add, remove }) => {
    const [theme, setTheme] = useState(ThemeEnum.ligth);
    return (<Theme.Provider value={theme}>
        <div style={{
            minHeight: '100vh',
            width: '100%',
            ...themes[theme]
        }}>
            <Wrapper>
                <ToggleTheme
                    onToggle={() => {
                        console.log(theme);
                        setTheme((theme == ThemeEnum.dark) ? ThemeEnum.ligth : ThemeEnum.dark)
                    }}
                />
                <PromptInput 
                    onEndInput={(text: string) => {
                        add(Date.now(), text);
                    }}
                    autoClear
                />
                <List list={list} onRemoveItem={remove} />
            </Wrapper>
        </div>
    </Theme.Provider>
    );
}

export default connect(({ list }) => ({
    list
}), { add, remove })(App);