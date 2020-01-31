import React from  'react'
import CLS from './../MessageArea.module.css'
import {changeMessageAreaActionCreator, createNewMessageActionCreator} from "../../../../state";


const Inputs = (props) => {
    let submitMessage = () => {
            props.dispatch(createNewMessageActionCreator());
    }

    let onChangedArea = (e) => {
        let text = e.target.value;
        props.dispatch(changeMessageAreaActionCreator(text))
    }


    return (
        <div className={CLS['inputs']}>
                <textarea onChange={onChangedArea} value={props.store.state.pageMessages.textareaText} />
                <button onClick={submitMessage}>submit</button>
        </div>
    )
}

export default Inputs