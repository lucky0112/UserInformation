import { createSelector } from 'reselect';
import _ from 'lodash';

const selectedPosts = state => state.userPosts.data;
const selectedUser = state => state.userPosts.userID;

const getPosts = (selectedPosts,selectedUser) => {
    return _.filter(selectedPosts, ['userId',Number(selectedUser)])
};

export default createSelector(
    selectedPosts,
    selectedUser,
    getPosts
);