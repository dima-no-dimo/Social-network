import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profileReducer";
import messagePageReducer from "./messageReducer";
import {usersPageReducer} from "./userPageReducers";
import authPageReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePageReducer,
    messagePageReducer,
    usersPageReducer,
    authPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store