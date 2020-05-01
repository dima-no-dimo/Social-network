import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => {
    return {
        jwt: state.authPageReducer.jwtToken
    }
};

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            return (this.props.jwt) ? <Component {...this.props}/> : <Redirect to='/Login' />
        }
    }
    return connect(mapStateToPropsRedirect, {})(RedirectComponent);

}