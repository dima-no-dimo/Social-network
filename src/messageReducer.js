import {createMessage, getMessageData} from "./DAL/requests";

const SET_CURRENT_MESSAGES = 'SET_CURRENT_MESSAGES';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_CURRENT_AUTHOR = 'SET_CURRENT_AUTHOR';

let initialState = {
        dialogs: [],
        currentMessages: [],
        current: null
};

const messagePageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MESSAGES: {
            return {
                ...state,
                currentMessages: [...action.mess],
            }
        }
        case SET_CURRENT_AUTHOR: {
            return {
                ...state, current: action.id
            }
        }
        case SET_DIALOGS: {
            return {
                ...state, dialogs: action.dialogs
            }
        }
        default: return state;
    }
};

export const setDialogs = (dialogs) => {
    return {
        type: SET_DIALOGS,
        dialogs
    }
};
export const setCurrentMessages = (mess) => {
    return {
        type: SET_CURRENT_MESSAGES,
        mess,
}
};
export const setCurrentAuthor = (id) => {
    return {
        type: SET_CURRENT_AUTHOR,
        id
    }
};

export const getMessageData_TC = (id, jwt, toWho) => {
    return (dispatch) => {
        const headers = {
            authorization: `Bearer ${jwt}`,
        };
        getMessageData(id, headers).then(data => {
            if (data.authors) {
                dispatch(setDialogs(data.authors));
            } else {
                dispatch(setCurrentMessages(data.messages, id));
            }
            if(toWho) {
                dispatch(setCurrentAuthor(toWho))
            }
        })
    }
};
export const sendMessage_TC = (id_toWho, body) => {
    return (dispatch) => {
        createMessage(id_toWho, body).then(data => {
            dispatch(setCurrentMessages(data.messages));
        })
    }
};

export default messagePageReducer