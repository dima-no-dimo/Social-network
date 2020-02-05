import React from  'react'
import CLS from './../MessageArea.module.css'
import messagePageReducer from "../../../../messageReducer";

const Inputs = (props) => {

    return (

        <div className={CLS['inputs']}>
                <textarea onChange={props.onChangedArea} value={props.messagePage.textareaText} />
                <button onClick={props.submitMessage}>submit</button>
        </div>
    )
}

export default Inputs