import React from 'react'
import CLS from './MessageArea.module.css'
import { BrowserRouter, Route } from 'react-router-dom'
import CurrentDialog from './Dialog/CurrentDialog'
import InputsContainer from "./Inputs/InputsContainer";

const MessageArea = (props) => {
    return (
        // <BrowserRouter>
            <div className={CLS['area']}>

                <Route path='/Dialogs/Dima' render={() => <CurrentDialog messages={props.messageArea.AllMessages.messagesD} />} />
                <Route path='/Dialogs/Roma' render={() => <CurrentDialog messages={props.messageArea.AllMessages.messagesR} />} />

                <InputsContainer dispatch={props.dispatch}  store={props.messageArea} />
            </div>
        // </BrowserRouter>
    )
}

export {MessageArea}