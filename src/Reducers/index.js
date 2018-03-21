import { combineReducers } from 'redux';
import UserReducer from './User_Reducer';
import UserAlbumReducer from './User_Albums_Reducer';
import AlbumPhotosReducer from './Album_Photo_Reducer';
import userPosts from './User_Posts_Reducer';

const rootReducer = combineReducers({
    UserReducer,
    UserAlbumReducer,
    AlbumPhotosReducer,
    userPosts
});

export default rootReducer;