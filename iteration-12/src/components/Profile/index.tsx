import React, { FC } from 'react';

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

const Profile: FC<propsType> = function(props){
    const hasRepos: boolean = props.repos && props.repos.length > 0;
    const mainInfoTemplate = <div className="profile__main">
        <img 
            src={props.avatar} 
            alt="avatar" 
            className="profile__avatar" />
        <p className="profile__username">{props.username}</p>
    </div>
    const mainInfo = props.user_url ? (
            <a 
                href={props.user_url} 
                target="_blank">
                    {mainInfoTemplate}
            </a>
        ) : mainInfoTemplate;
    const content = (<div className="profile"> 
        { mainInfo }
        <ol className="profile__repos-list">
            {hasRepos ? props.repos.map(
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

export default Profile;