import { API_URL } from "../config";

const S3_URL: string = "";

export function getFlashSheetIds(username: string) {
    try {
        return fetch(`${API_URL}/flashsheets/${username}`).then(data => data.json());
    } catch (error) {
        console.error("Error fetching flash sheet image IDs.", error);
    }
}

export function getFlashImages(imageIds: string[]) {
    try {
        // TODO
        return fetch(`${S3_URL}`).then(data => data.json());
    } catch (error) {
        console.error("Error fetching flash sheet images.", error);
    }
}