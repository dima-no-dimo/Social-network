import {connect} from "react-redux";
import Users from "./Users";
import {createFollowButtonAC, setUsersAC} from "../../userPageReducers";


let mapStateToProps = (state) => {
    return {
        userPageReducer: state.usersPageReducer.users,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (id) => dispatch(createFollowButtonAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;