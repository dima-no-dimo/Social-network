import React from 'react'
import { User } from './user'
import { Posts } from './MyPosts/Posts'


const Profile = (props) => {
    return (
        <div>
            <User />
            <Posts dispatch={props.dispatch} profile={props.profile} />
        </div>
    )
}

export default Profile