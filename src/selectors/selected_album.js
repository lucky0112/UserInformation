import { createSelector } from 'reselect';
import _ from 'lodash';

const userAlbums = state => state.UserAlbumReducer.data;
const userSelected = state => state.UserAlbumReducer.userAlbumID;

const getAlbums = (userAlbums,userSelected) => {
    const selectedAlbums = _.filter(userAlbums, ['userId', Number(userSelected)]);
    return selectedAlbums;
};

export default createSelector(
    userAlbums,
    userSelected,
    getAlbums
);


