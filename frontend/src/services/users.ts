import { API_URL } from "../config";

export function getUser(username: string) {
    return fetch(`${API_URL}/users/${username}`);
}

export function getSimilarUsers(key: string) {
    return fetch(`${API_URL}/users/userSearch/${key}`).then(data => data.json());
}