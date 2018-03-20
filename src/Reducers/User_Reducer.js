import { FETCH_USER } from '../Actions';
import _ from 'lodash';

let initialState = {
    data : {},
    error : null,
}

export default function (state=initialState,action) {
    switch (action.type){
        case FETCH_USER:
            return {...state,data:_.mapKeys(action.payload.data,"id")};
        default:
            return state;
    }

}