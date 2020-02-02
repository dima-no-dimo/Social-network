import React from  'react'
import CLS from './../MessageArea.module.css'

const Inputs = (props) => {



    return (
        <div className={CLS['inputs']}>
                <textarea onChange={props.onChangedArea} value={props.store.textareaText} />
                <button onClick={props.submitMessage}>submit</button>
        </div>
    )
}

export default Inputs