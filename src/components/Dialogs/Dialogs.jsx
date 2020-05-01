import React from 'react'
import CLS from './MessageArea/MessageArea.module.css'
import {DialogAuthor} from './DialogAuthor/DialogAuthor'
import CurrentDialogContainer from "./MessageArea/Dialog/CurrentDialogContainer";
import InputsContainer from "./MessageArea/Inputs/InputsContainer";

class Dialogs extends React.Component {
    jsxAuthors = () => {
        if(this.props.messagePage.dialogs.length === 0) return null;
        return this.props.messagePage.dialogs.map((item) => {
            return (
                <DialogAuthor key={item.id} click={this.messagesFromServer} authorName={item.name} avatar={item.avatar} id={item.id} />
            )
        })
    };
    messagesFromServer = (id) => {
        this.props.getMessageData_TC(`${this.props.myId}?toWho=${id}`, this.props.jwt, id)
    };
    componentDidMount() {
        this.props.getMessageData_TC(this.props.myId, this.props.jwt)
    }

    render() {
        return (
            <section className={CLS.sec}>
                <div>
                    {this.jsxAuthors()}
                </div>
                <div>
                    <p>Current dialog</p>
                    <div className={CLS['area']}>
                        <CurrentDialogContainer />
                        <InputsContainer />
                    </div>

                </div>
                <div></div>
            </section>
        )
    }
}

export {Dialogs}