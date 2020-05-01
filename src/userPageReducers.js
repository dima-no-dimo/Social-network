import {getUsers, subscribeUser} from "./DAL/requests";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    selectedUserId: '5e70f8181c9d440000080fef'
};

const usersPageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
                return {
                ...state,
                users: [...action.users.AllUsers],
                totalCount: action.users.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.page,
                users: [...state.users]
            }
        }
            default: return state
    }
    
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
};
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
};

export const setUsers_TC = (data) => {
    return (dispatch) => {
        dispatch(setCurrentPage(data.page));
        getUsers(data).then(res => {
            dispatch(setUsers(res))
        })
    }
};
export const subscribeTo_TC = (data) => {
    return (dispatch) => {
        subscribeUser(data).then(res => {
            // console.log(res)
            dispatch(setUsers(res))
        })
    }
}

export { usersPageReducer }