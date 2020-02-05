import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profileReducer";
import messagePageReducer from "./messageReducer";
import friendsReducer from "./friendsReducer";


let reducers = combineReducers({
    profilePageReducer,
    messagePageReducer,
    friendsReducer,
});

let store = createStore(reducers);

export default store