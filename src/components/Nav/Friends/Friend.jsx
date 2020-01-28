import React from 'react'
import CLS from './Friends.module.css'

const Friend = (props) => {
    return (
        <div>
            <img src={props.imgURL} className={CLS.img} />
            <p className={CLS.userName}>
                {props.userName}
            </p>
        </div>
    )
}

export default Friend