import React from 'react'
import classes from './../profile.module.css'
import { Post } from './Post/Post'

const Posts = (props) => {

    let text = React.createRef();
    let postCreate = () => {
        alert(text.current.value);

    }

    let jsxPost = props.postData.map((item) => {
        return (
            <Post cont={item.content} numP={item.title} />
        )
    })

    return (
        <article className={classes.post}>
            <h3>
                New post
            </h3>
            <textarea ref={text}></textarea>
            <br />
            <button onClick={postCreate}>Submit</button>
            {jsxPost}

        </article>
    )
}

export { Posts }

