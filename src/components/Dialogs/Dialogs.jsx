import React from 'react'
import { MessageArea } from './MessageArea/MessageArea'
import CLS from './Dialogs.module.css'
import {NavLink, BrowserRouter} from 'react-router-dom'
import {DialogAuthor} from './DialogAuthor/DialogAuthor'

const Dialogs = (props) => {

    let jsxAuthors = props.dialogs.state.pageMessages.DialogAuthors.map((item) => {
        let last = props.dialogs.lastMessage(item.authorName);
        return (
            <DialogAuthor lastMessage={last} authorName={item.authorName} avatar={item.avatar} />
        )
    })

    return (
            <section className={CLS.sec}>
                <div>
                    {jsxAuthors}
                </div>
                <div>
                    <p>Current dialog</p>
                    <MessageArea fun={props.fun} messageArea={props.dialogs} dispatch={props.dispatch} />
                </div>
                <div></div>
            </section>
    )
}

export {Dialogs}