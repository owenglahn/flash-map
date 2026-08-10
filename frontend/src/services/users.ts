import { API_URL } from "..";

export function getUser(username: string) {
    return fetch(`${API_URL}/users/${username}`).then(data => data.json());
}

export function getSimilarUsers(key: string) {
    return fetch(`${API_URL}/users/userSearch/${key}`).then(data => data.json());
}