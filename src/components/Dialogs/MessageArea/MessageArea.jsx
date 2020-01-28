import React from 'react'
import CLS from './MessageArea.module.css'
import Inputs from './Inputs/Inputs'
import { BrowserRouter, Route } from 'react-router-dom'
import CurrentDialog from './Dialog/CurrentDialog'

const MessageArea = (props) => {
    // debugger;
    return (
        // <BrowserRouter>
            <div className={CLS['area']}>

                <Route path='/Dialogs/Dima' render={() => <CurrentDialog messages={props.messages.messagesD} />} />
                <Route path='/Dialogs/Roma' render={() => <CurrentDialog messages={props.messages.messagesR} />} />

                <Inputs funcMess={props.funcMess} />
            </div>
        // </BrowserRouter>
    )
}

export {MessageArea}