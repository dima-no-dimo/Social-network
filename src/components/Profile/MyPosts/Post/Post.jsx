import React from 'react'
import CLS from './post.module.css'

const Post = (props) => {

    return (
        <div className={CLS.item}>
            <div className={CLS.titleWrapper}>
                <h3 className={CLS.title}>{props.date}</h3>
            </div>
            <div className={CLS.contWrapper}>
                <p className={CLS.desc}>{props.cont}</p>
            </div>
            <div className={CLS.close} onClick={()=>{props.del(props.id)}}>x</div>
        </div>
    )
}

export {Post}