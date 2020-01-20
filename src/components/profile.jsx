import React from 'react'
import { User } from './user'
import { Post } from './post'


const Profile = () => {
    return (
        <content className="content">
            <User />
            <Post />
        </content>
    )
}

export default Profile