import React, { Component } from 'react';

import GHConnector from '../../helpers/GithubConnector';
import Profile from '../Profile';
import Spinner from '../Spinner';
import FullScreenError from '../FullScreenError';

type propsType = {
    username: string
}

type stateType = {
    isLoad: boolean,
    avatar_url: string,
    user_url: string,
    isError: boolean,
    repos: {
        name: string,
        url: string
    }[]
}

class UserPage extends Component<propsType, stateType>{
    constructor(props: propsType) {
        super(props);
        this.state = {
            isLoad: true,
            avatar_url: '',
            user_url: '',
            isError: false,
            repos: []
        }
    }

    componentDidMount(){
        GHConnector.getUser(this.props.username)
            .then((user) => {          
                if(user) {
                    this.setState({
                        isLoad: false,
                        isError: false,
                        avatar_url: user.avatar_url,
                        user_url: user.html_url
                    });
                    return GHConnector.getRepos(this.props.username)
                } else {
                    this.setState({
                        isError: true,
                        isLoad: false
                    });
                }
                
            })
            .then((data) => {
                const repos = [];
                if(data) {
                    data.forEach(repo => { repos.push({
                        name: repo.name,
                        url: repo.html_url
                    }) });
                }
                this.setState({ repos });
            })
    }

    render() {
        return this.state.isLoad ? (<Spinner />) : (
            this.state.isError ? (
                <FullScreenError header="404" description="Not found" />
            ) : (
                <Profile 
                    username={this.props.username}
                    avatar={this.state.avatar_url}
                    repos={this.state.repos}
                    user_url={this.state.user_url}
                />
            )
        );
    }
}

export default UserPage;