import {connect} from "react-redux";
import Users from "./Users";
import {
    setUsers_TC,
    subscribeTo_TC
} from "../../userPageReducers";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/authRedirect";


let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPageReducer,
        myId: state.authPageReducer._userId,
    }
};

const UsersContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {setUsers_TC, subscribeTo_TC})
)(Users);

export default UsersContainer;