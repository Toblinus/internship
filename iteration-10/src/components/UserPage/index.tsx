import React, { FC, useState, useEffect } from 'react';

import GHConnector from '../../helpers/GithubConnector';
import Profile from '../Profile';
import Spinner from '../Spinner';
import FullScreenError from '../FullScreenError';

type propsType = {
    username: string
}

const UserPage: FC<propsType> = function(props){
    const [isLoad, setIsLoad] = useState(true);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [userUrl, setuserUrl] = useState('');
    const [isError, setIsError] = useState(false);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        if(isLoad)
        GHConnector.getUser(props.username)
            .then((user) => {          
                if(user) {
                    setAvatarUrl(user.avatar_url);
                    setuserUrl(user.html_url);
                    setIsError(false);
                    setIsLoad(false);
                    return GHConnector.getRepos(props.username)
                } else {
                    setIsError(true);
                    setIsLoad(false);
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
                setRepos(repos);
            })
    });

    return isLoad ? (<Spinner />) : (
        isError ? (
            <FullScreenError header="404" description="Not found" />
        ) : (
            <Profile 
                username={props.username}
                avatar={avatarUrl}
                repos={repos}
                user_url={userUrl}
            />
        )
    );
}

export default UserPage;