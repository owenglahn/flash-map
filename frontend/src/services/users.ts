const URL: string = "http://localhost:3333/";

export function getUser(username: string) {
    return fetch(`${URL}/users/${username}`).then(data => data.json());
}