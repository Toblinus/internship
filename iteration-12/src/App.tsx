import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, useParams, useHistory} from 'react-router-dom';

import MainPage from './components/MainPage';
import UserPage from './components/UserPage';

function CreateMainPage(){
    const history = useHistory();
    if(history.location.pathname != '/'){
        history.push('/');
    }
    return <MainPage onChangeEnd={(text: string): void => {
        history.push(`/${text}`)
    }} />; 
}

function createUserPage(){
    const { username } = useParams<{ username }>();
    return (<UserPage username={username} />)
}

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:username" component={createUserPage} />
                <Route path='/' component={CreateMainPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;