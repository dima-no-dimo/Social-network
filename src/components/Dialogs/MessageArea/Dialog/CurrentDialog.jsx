import React from 'react'
import CLS from './../MessageArea.module.css'
import Message from './Message/Message'

class CurrentDialog extends React.Component {
    jsxMess = () => {
            return this.props.messagePage.currentMessages.map(item => {
                   return <Message key={item._id} txt={item.txt} from={item.my} imgURL={item.imgUrl} />
        })
    };

    render() {
        return (
            <div className={CLS['messages']}>
                        {this.jsxMess()}
    
                    </div>
        )
    }
}

export default CurrentDialog