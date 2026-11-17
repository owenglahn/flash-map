import { API_URL } from "../config";

type User = {
    username: string,
    password?: string
};

function authFunction(body: User, method: string) {
    return fetch(`${API_URL}/auth/${method}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });
}

export function postRegister(username: string, password: string) {
    return authFunction({username, password}, "register");
}

export function postLogin(username: string, password: string) {
    return authFunction({username, password}, "login");
}

export function verifyToken( token: string) {
    return fetch(`${API_URL}/auth/verifyToken`, {
        method: "POST",
        headers: {"authorization": token}
    });
}

export function postLogout(username: string) {
    return authFunction({username}, "logout");
}