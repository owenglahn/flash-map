const URL: string = "http://localhost:3333/";

export function getFlashSheets(username: string) {
    return fetch(`${URL}/flashsheets/${username}`).then(data => data.json());
}