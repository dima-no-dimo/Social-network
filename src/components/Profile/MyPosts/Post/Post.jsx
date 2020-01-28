import React from 'react'
import cl from './post.module.css'

const Post = (props) => {
    return (
        <div className={cl.item}>
            <h3 className="title">{props.numP}</h3>
            <p className="desc">{props.cont}</p>
            <div className="like">
                <span>Like</span>
            </div>
        </div>
    )
}

export {Post}