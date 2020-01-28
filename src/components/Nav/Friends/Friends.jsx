import React from 'react'
import Friend from './Friend'
import CLS from './Friends.module.css'


const Friends = (props) => {

    let jsxFriends = props.friends.map((item) => {
        return (
            <Friend imgURL={item.imgURL} userName={item.userName} />
        )
    });

    return (
        <div>
            <h3>
                Friends
            </h3>
            <div className={CLS.friendsWraper}> 
                {jsxFriends}
            </div>
        </div>
    )
}

export default Friends