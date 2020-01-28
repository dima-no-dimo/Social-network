import React from  'react'
import CLS from './../MessageArea.module.css'


const Inputs = (props) => {
    let mess = React.createRef();
    let submitMessagee = () => {
        props.funcMess.addMess(mess.current.value)
    }
debugger;
    return (
        <div className={CLS['inputs']}>
                <textarea ref={mess}></textarea>
                <button onClick={submitMessagee}>submit</button>
        </div>
    )
}

export default Inputs