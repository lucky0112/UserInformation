import { FETCH_USERS,FETCH_USER } from '../Actions';
import _ from 'lodash';

let initialState = {
    data : {},
    error : null,
};
let data = {};
export default function (state=initialState,action) {
    switch (action.type){
        case FETCH_USERS:
            return {...state,data:_.mapKeys(action.payload.data,"id")};
        case FETCH_USER:
            data[action.payload.data.id]=action.payload.data;
            return {...state,data:{...data}};
        default:
            return state;
    }

}