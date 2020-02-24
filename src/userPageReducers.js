const SHOW_MORE_USERS = 'SHOW_MORE_USERS';
const FOLLOW_BUTTON = 'FOLLOW_BUTTON';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};

const usersPageReducer = (state=initialState, action) => {
    switch (action.type) {
        // case SHOW_MORE_USERS:
        case FOLLOW_BUTTON:
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.id) {
                        item.follow = (item.follow === 'Follow') ? 'Unfollow' : 'Follow';
                    }
                    return item
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
    }
    return state
};

export const createFollowButtonAC = (id) => {
    return {
        type: FOLLOW_BUTTON,
        id: id,
    }
};
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    }
};

export { usersPageReducer }