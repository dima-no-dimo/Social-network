import React from 'react'
import CLS from './../../MessageArea.module.css'

const YourMessage = (props) => {
    return (
        <div className={CLS[props.from]}>
            <p className={CLS['txt']}>
                {props.txt}
            </p>
            <img src={props.imgURL} className={CLS['imgDialog']} />
        </div>
    )
} 

export default YourMessage