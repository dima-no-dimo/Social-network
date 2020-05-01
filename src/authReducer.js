import {login_registration_req} from "./DAL/requests";

const SET_ID_AND_JWT = 'SET_ID_AND_JWT';
const SET_CONTENT = 'SET_CONTENT';
const DISABLE_BUTTONS = 'DISABLE_BUTTONS';

let initialState = {
    content: {
        header: 'Registration/login page',
        article: 'please enter your info to fields below'
    },
    nameInput: '',
    loginInput: '',
    passInput: '',
    jwtToken: null,
    _userId: '',
    disableButtons: false,
};

const  authPageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_ID_AND_JWT: {
            return {
                ...state, _userId: action.data.id, jwtToken: action.data.accessToken
            }
        }
        case SET_CONTENT: {
            return {
                ...state, content: {header: action.header, article: action.article}
            }
        }
        case DISABLE_BUTTONS: {
            return {
                ...state, disableButtons: action.dis
            }
        }
        default: return state
    }
};

const setIdAndJwtAC = (data) => {
    return {
        type: SET_ID_AND_JWT,
        data
    }
};
export const setContentAC = (data) => {
    return {
        type: SET_CONTENT,
        header: data.header,
        article: data.article
    }
};
const disableButtonsAC = (dis) => {
    return {
        type: DISABLE_BUTTONS,
        dis
    }
};

export const login_registration_TC = (url, loginData) => {
    return (dispatch) => {
        dispatch(disableButtonsAC(true));
        login_registration_req(url, loginData).then(res => {
            dispatch(setIdAndJwtAC(res));
            dispatch(disableButtonsAC(false))
        })
    }
};
export const logout_TC = () => (dispatch) => {
    dispatch(disableButtonsAC(true));
    dispatch(setIdAndJwtAC({id: null, accessToken: null}));
    dispatch(disableButtonsAC(false))
};

export  default authPageReducer