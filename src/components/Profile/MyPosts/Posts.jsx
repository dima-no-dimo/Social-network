import React from 'react'
import CLS from './../profile.module.css'
import { Post } from './Post/Post'
import {changePostAreaActionCreator, createNewPostActionCreator} from "../../../state";




const Posts = (props) => {
    let jsxPost = props.profile.state.pageProfile.postData.map((item) => {
        return (
            <Post del={props.profile} cont={item.content} numP={item.title} />
        )
    });

    let postCreate = () => {
        props.dispatch(createNewPostActionCreator());
    };

    let onTextareaChange = (e) => {
        let textareaTyped = e.target.value;
        props.dispatch(changePostAreaActionCreator(textareaTyped));

    };

    return (
        <article className={CLS.post}>
            <h3>
                New post
            </h3>
            <textarea onChange={onTextareaChange} value={props.profile.state.pageProfile.textareaText} />
            <br />
            <button onClick={postCreate}>Submit</button>
            {jsxPost}
        </article>
    )
}

export { Posts }

