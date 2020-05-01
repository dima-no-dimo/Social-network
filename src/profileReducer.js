import {deletePost, getUserInfo, newPost} from "./DAL/requests";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_POST_DATA = 'SET_POST_DATA';


let initialState = {
    profileData: {
    postData: [],
    userData: {},
    },
};

const profilePageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA: {
            return {
                ...state,
                profileData: {userData: action.data.userInfo, postData: action.data.posts}
            }
        }
        case SET_POST_DATA: {
            return {
                ...state, profileData: {userData: state.profileData.userData, postData: action.data}
            }
        }
        default: return state;
    }
};


export const setProfile = (data) => {
    return {
        type: SET_PROFILE_DATA,
        data,
    }
};
export const setPost = (data) => {
    return {
        type: SET_POST_DATA,
        data
    }
};

export const getUserInfo_Posts_TC = (userId, jwt) => {
    return (dispatch) => {
        const headers = {
            authorization: `Bearer ${jwt}`,
        };
        getUserInfo(userId, headers).then(data => {
            dispatch(setProfile(data))
        })

    }
};
export const createPost_TC = (data, jwt) => {
    return (dispatch) => {
        const headers = {
            authorization: `Bearer ${jwt}`,
        };
        newPost(data, headers).then(data => {
            dispatch(setPost(...data))
        });
    }
};
export const deletePost_TC = (id, postId, jwt) => {
    return (dispatch) => {
        const headers = {
            authorization: `Bearer ${jwt}`,
        };
        deletePost(id, postId, headers).then(data => {
            dispatch(setPost(...data))
        })
    }
};

export default profilePageReducer

