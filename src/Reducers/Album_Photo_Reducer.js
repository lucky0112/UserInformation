/**
 * Created by abhisheksinghal on 18/03/18.
 */
import { FETCH_ALBUM_PHOTOS ,FETCH_CACHE_PHOTOS } from '../Actions';
import _ from 'lodash';

let initialState = {
    data:{},
    error: null,
    photoAlbumID: 0,
    albumSelected: []
};

export default function (state=initialState,action) {
    console.log("action");
    console.log(action);
    switch (action.type){
        case FETCH_ALBUM_PHOTOS:
            let data = {...state.data,..._.mapKeys(action.payload.result.data,"id")};
            return {
                ...state,
                data: {...data},
                photoAlbumID:action.payload.albumID,
                albumSelected: [...state.albumSelected,action.payload.albumID]
            };
        case FETCH_CACHE_PHOTOS:
            return {...state,photoAlbumID:action.payload};
        default:
            return state
    }
}