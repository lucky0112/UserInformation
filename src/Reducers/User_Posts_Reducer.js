import { handleActions } from 'redux-actions';
import { FETCH_USER_POSTS } from '../Actions';
import _ from 'lodash';
const initialState = {
    data:{},
    error:null,
    userID:0,
    userSelected:[]
};

const userPosts = handleActions({
    [FETCH_USER_POSTS]: (state = initialState,
        { payload }) => ({
        ...state,
        data:{...state.data,..._.mapKeys(payload.result.data,"id")},
        userID:payload.userID,
        userSelected:[...state.userSelected,payload.userID]

    })
},initialState);


export default userPosts


