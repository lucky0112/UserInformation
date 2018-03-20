/**
 * Created by abhisheksinghal on 18/03/18.
 */
import { FETCH_USER_ALBUMS } from '../Actions';
import _ from 'lodash';

let initialState = {
    data:{},
    error: null,
    userAlbumID : 0,
    userSelected: []
};

export default function (state=initialState,action) {
    switch (action.type){
        case FETCH_USER_ALBUMS:
            let data = {...state.data,..._.mapKeys(action.payload.result.data,"id")};
            return {
                ...state,
                data: {...data} ,
                userAlbumID:action.payload.userID,
                userSelected: [...state.userSelected,action.payload.userID]
            };
        default :
            return state
    }
}