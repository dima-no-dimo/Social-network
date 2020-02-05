import React from 'react'
import CLS from './MessageArea.module.css'
import { BrowserRouter, Route } from 'react-router-dom'
import CurrentDialogContainerD from './Dialog/CurrentDialogContainerD'
import InputsContainer from "./Inputs/InputsContainer";
import CurrentDialogContainerR from "./Dialog/CurrentDialogContainerR";

const MessageArea = (props) => {
    return (
            <div className={CLS['area']}>

                <Route path='/Dialogs/Dima' render={() => <CurrentDialogContainerD />} />
                <Route path='/Dialogs/Roma' render={() => <CurrentDialogContainerR />} />

                <InputsContainer author={props.author} />
            </div>
    )
}

export {MessageArea}