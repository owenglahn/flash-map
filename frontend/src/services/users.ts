const URL: string = "http://localhost:3333/api";

export function getUser(username: string) {
    return fetch(`${URL}/users/${username}`).then(data => data.json());
}

export function getSimilarUsers(key: string) {
    return fetch(`${URL}/users/userSearch/${key}`).then(data => data.json());
}