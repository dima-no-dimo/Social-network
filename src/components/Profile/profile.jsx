import React from 'react'
import { User } from './user'
import { Posts } from './MyPosts/Posts'


const Profile = (props) => {
    return (
        <div>
            <User />
            <Posts postData={props.postData} />
        </div>
    )
}

export default Profile