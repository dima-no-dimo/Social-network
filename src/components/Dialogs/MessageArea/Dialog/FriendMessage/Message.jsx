import React from 'react'
import CLS from './../../MessageArea.module.css'

const FriendMessage = (props) => {
    return (
        <div className={CLS.fr}>
            <img src={props.imgURL} className={CLS['imgDialog']} />
            <p className={CLS['txt']}>
                {props.txt}
            </p>
        </div>
    )
} 

export default FriendMessage