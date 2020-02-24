import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profileReducer";
import messagePageReducer from "./messageReducer";
import friendsReducer from "./friendsReducer";
import {usersPageReducer} from "./userPageReducers";

let reducers = combineReducers({
    profilePageReducer,
    messagePageReducer,
    friendsReducer,
    usersPageReducer,
});

let store = createStore(reducers);

export default store