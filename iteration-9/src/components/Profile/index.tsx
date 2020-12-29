import React, { Component } from 'react';

import './style.css';

import Wrapper from '../Wrapper';

type propsType = { 
    username: string,
    user_url?: string,
    avatar?: string,
    repos?: {
        name: string,
        url: string
    }[]
};

class Profile extends Component<propsType> {
    constructor(props: propsType){
        super(props);
    }

    render(){
        const hasRepos: boolean = this.props.repos && this.props.repos.length > 0;
        const mainInfoTemplate = <div className="profile__main">
            <img 
                src={this.props.avatar} 
                alt="avatar" 
                className="profile__avatar" />
            <p className="profile__username">{this.props.username}</p>
        </div>
        const mainInfo = this.props.user_url ? (
                <a 
                    href={this.props.user_url} 
                    target="_blank">
                        {mainInfoTemplate}
                </a>
            ) : mainInfoTemplate;
        const content = (<div className="profile"> 
            { mainInfo }
            <ol className="profile__repos-list">
                {hasRepos ? this.props.repos.map(
                    (repo) => <li key={repo.name} className="profile__repo">
                        {repo.url ? 
                            (
                                <a href={repo.url} target="_blank">{repo.name}</a>
                            ) : (
                                repo.name
                            )
                        }
                    </li>
                ) : (<li className="profile__repo profile__repo--static">Репозиториев нет</li>)}
            </ol>
        </div>);
        return (
            <Wrapper>
                { content }
            </Wrapper>
            
        );
    }
}

export default Profile;