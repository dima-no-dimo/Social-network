import React from 'react'
import CLS from './../MessageArea.module.css'
import YourMessage from './yourMessage/Message'
import FriendMessage from './FriendMessage/Message'

const CurrentDialog = (props) => {
    let jsxMess = props.messages.map((item) => {
        if(item.from === 'you') {
            return <YourMessage txt={item.txt} from={item.from} imgURL={item.imgURL} />
        } else {
            return <FriendMessage txt={item.txt} from={item.from} imgURL={item.imgURL} />
        };


});
    return (
        <div className={CLS['messages']}>

                    {jsxMess}

                </div>
    )
}

export default CurrentDialog