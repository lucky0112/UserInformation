import axios from 'axios';

export const FETCH_USER = "fetch_users";
export const FETCH_USER_ALBUMS = "fetch_user_albums";
export const FETCH_ALBUM_PHOTOS = "fetch_album_photos";
export const FETCH_CACHE_PHOTOS = "fetch_cache_photos";
const ROOT_URL =  "https://jsonplaceholder.typicode.com";


export function fetchPhotos(albumId) {
    return async (dispatch) => {
        const response = await axios.get(`${ROOT_URL}/photos?albumId=${albumId}`);
        dispatch({
            type:FETCH_ALBUM_PHOTOS,
            payload: {
                result: response,
                albumID: albumId
            }
        })
    }
}

export function fetchCachePhoto(albumId) {
    return {
        type:FETCH_CACHE_PHOTOS,
        payload:albumId
    }
}

export function fetchUsers() {
    return async (dispatch) => {
        const response = await axios.get(`${ROOT_URL}/users`);
        dispatch({
            type: FETCH_USER,
            payload: response
        })
    }
}

export function fetchUserAlbums(userId) {
    return async (dispatch) => {
        const response = await axios.get(`${ROOT_URL}/albums?userId=${userId}`);
        dispatch({
            type: FETCH_USER_ALBUMS,
            payload: {
                result:response,
                userID: userId
            }
        })
    }
}