import React from 'react'
import CLS from './post.module.css'

const Post = (props) => {

    let deletePost = () => {
        let num = props.numP;
        props.del.deleteElement({num})
    }

    return (
        <div className={CLS.item}>
            <div className={CLS.titleWrapper}>
                <h3 className={CLS.title}>{props.numP}</h3>
                <div onClick={deletePost} className={CLS.close}>
                    x
                </div>
            </div>
            <div className={CLS.contWrapper}>
                <p className={CLS.desc}>{props.cont}</p>
                <span>Like</span>
            </div>
        </div>
    )
}

export {Post}