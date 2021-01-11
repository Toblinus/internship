import React, { FC } from 'react';

import GHConnector from '../../helpers/GithubConnector';
import Profile from '../Profile';
import Spinner from '../Spinner';
import FullScreenError from '../FullScreenError';
import { useLoader, StatusLoader } from '../../hooks/useLoader';

type propsType = {
    username: string
}

const UserPage: FC<propsType> = function(props){
    const [status, data] = useLoader(
        () => GHConnector.getUser(props.username), 
        [props.username]
    );

    const [reposStatus, reposData] = useLoader(
        () => GHConnector.getRepos(props.username),
        [props.username]
    );

    const repos = reposData?.map(repo => ({
        name: repo.name,
        url: repo.html_url
    }));

    return (status == StatusLoader.loading || 
            reposStatus == StatusLoader.loading) ? (<Spinner />) : (
        (status == StatusLoader.hasError) ? (
            <FullScreenError header="404" description="Not found" />
        ) : (
            <Profile 
                username={props.username}
                avatar={data.avatar_url}
                repos={repos}
                user_url={data.html_url}
            />
        )
    );
}

export default UserPage;