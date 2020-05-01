import React from 'react'
import Posts from "./MyPosts/Posts"
import UserInfo from './UserInfo/UserInfo'
import {Route} from "react-router-dom";

class Profile extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id || this.props.myId;
        this.props.getUserInfo_Posts_TC(userId, this.props.jwt)
    }
    render(){
        return (
            <Route>
            <div>
                <UserInfo UsInfo={this.props.profile.profileData.userData}  />
                <Posts myId={this.props.myId}
                profile={this.props.profile.profileData}
                textareaText={this.props.profile.textareaText}
                       jwt={this.props.jwt}
                       createPost_TC={this.props.createPost_TC}
                       deletePost_TC={this.props.deletePost_TC}
                />
            </div>
            </Route>
        )
    }
}

export default Profile