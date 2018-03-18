/**
 * Created by abhisheksinghal on 18/03/18.
 */
import { FETCH_USER_ALBUMS } from '../Actions';
import _ from 'lodash';

let initialState = {
    data:{},
    error: null
}

export default function (state=initialState,action) {
    switch (action.type){
        case FETCH_USER_ALBUMS:
            return {...state,data:_.mapKeys(action.payload.data,"id")};
        default :
            return state
    }
}