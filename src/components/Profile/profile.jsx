import React from 'react'
import { User } from './user'
import PostsContainer from "./MyPosts/PostsContainer";


const Profile = (props) => {
    return (
        <div>
            <User />
            <PostsContainer dispatch={props.dispatch} profile={props.profile} />
        </div>
    )
}

export default Profile