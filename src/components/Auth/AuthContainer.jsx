import Auth from "./Auth";
import {
    logout_TC,
    login_registration_TC
} from "../../authReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        authPage: state.authPageReducer
    }
};

const AuthContainer = connect(mapStateToProps, {
    logout_TC, login_registration_TC
})(Auth);

export default AuthContainer