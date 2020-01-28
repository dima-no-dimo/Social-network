import React from 'react'
import { MessageArea } from './MessageArea/MessageArea'
import CLS from './Dialogs.module.css'
import {NavLink, BrowserRouter} from 'react-router-dom'
import {DialogAuthor} from './DialogAuthor/DialogAuthor'







const Dialogs = (props) => {

    let jsxAuthors = props.data.DialogAuthors.map((item) => {
        return (
            <DialogAuthor authorName={item.authorName} lastMessage={item.lastMessage} avatar={item.avatar} />
        )
    })

    return (
            <section className={CLS.sec}>
                <div>
                    {jsxAuthors}
                    {/* <DialogAuthor authorName="Dima" lastMessage="Hi!" avatar="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" />
                    <DialogAuthor authorName="Roma" lastMessage="By!" avatar="https://i.pinimg.com/236x/6a/80/5e/6a805e7a764096dde0f0b4313379d0ba.jpg" /> */}
                </div>
                <div>
                    <p>Current dialog</p>
                    <MessageArea funcMess={props.data} messages={props.dataM} />
                </div>
                <div></div>
            </section>
    )
}

export {Dialogs}