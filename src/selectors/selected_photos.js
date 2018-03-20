import { createSelector } from 'reselect';
import _ from 'lodash';

const selectedPhotos = state => state.AlbumPhotosReducer.data;
const selectedAlbum = state => state.AlbumPhotosReducer.photoAlbumID;

const getPhotos = (selectedPhotos,selectedAlbum) => {
    return _.filter(selectedPhotos, ['albumId', Number(selectedAlbum)]);
};

export default createSelector(
    selectedPhotos,
    selectedAlbum,
    getPhotos
);
