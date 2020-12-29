

const API_URL: string = 'https://api.github.com';

type GithubUser = {
    login: string,
    avatar_url: string,
    html_url: string
}

type GithubRepo = {
    name: string,
    html_url: string
}

function getUserURL(username: string): string {
    return `${API_URL}/users/${username}`;
}

function getReposURL(username: string): string {
    return getUserURL(username) + '/repos'
}

export default class {
    static async getUser(username: string): Promise<GithubUser|null> {
        const response = await fetch(getUserURL(username));
        const user = (response.ok) ? await response.json() : null;
        return user;
    }

    static async getRepos(username: string): Promise<GithubRepo[]|null> {
        const response = await fetch(getReposURL(username));
        const user = (response.ok) ? await response.json() : null;
        return user;
    }
}