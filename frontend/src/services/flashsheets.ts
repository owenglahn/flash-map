import { API_URL } from "../config";


export function getFlashSheetIds(username: string) {
    try {
        return fetch(`${API_URL}/flashsheets/${username}`).then(data => data.json());
    } catch (error) {
        console.error("Error fetching flash sheet image IDs.", error);
    }
}

export function getFlashImages(imageIds: string[]) {
    try {
        return fetch(`${API_URL}/images`).then(data => data.json()); 
    } catch (error) {
        console.error("Error fetching flash sheet images.", error);
    }
}