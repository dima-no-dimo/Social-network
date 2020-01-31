import React from 'react'
import CLS from './MessageArea.module.css'
import Inputs from './Inputs/Inputs'
import { BrowserRouter, Route } from 'react-router-dom'
import CurrentDialog from './Dialog/CurrentDialog'

const MessageArea = (props) => {
    return (
        // <BrowserRouter>
            <div className={CLS['area']}>

                <Route path='/Dialogs/Dima' render={() => <CurrentDialog messages={props.messageArea.state.pageMessages.AllMessages.messagesD} />} />
                <Route path='/Dialogs/Roma' render={() => <CurrentDialog messages={props.messageArea.state.pageMessages.AllMessages.messagesR} />} />

                <Inputs dispatch={props.dispatch}  store={props.messageArea} />
            </div>
        // </BrowserRouter>
    )
}

export {MessageArea}