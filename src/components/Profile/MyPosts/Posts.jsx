import React from 'react'
import CLS from './../profile.module.css'
import { Post } from './Post/Post'

const Posts = (props) => {
    let jsxPost = props.profile.postData.map((item) => {
        return (
            <Post /*del={props.profile}*/ cont={item.content} numP={item.title} />
        )
    });

    return (
        <article className={CLS.post}>
            <h3>
                New post
            </h3>
            <textarea onChange={props.onTextareaChange} value={props.profile.textareaText} />
            <br />
            <button onClick={props.postCreate}>Submit</button>
            {jsxPost}
        </article>
    )
}

export { Posts }

