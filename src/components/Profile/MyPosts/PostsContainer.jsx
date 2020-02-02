import React from 'react'
import {changePostAreaActionCreator, createNewPostActionCreator} from "../../../profileReducer";
import {Posts} from "./Posts";


const PostsContainer = (props) => {


    let postCreate = () => {
        props.dispatch(createNewPostActionCreator());
    };

    let onTextareaChange = (e) => {
        let textareaTyped = e.target.value;
        props.dispatch(changePostAreaActionCreator(textareaTyped));

    };

    return (
        <Posts profile={props.profile.profilePageReducer} onTextareaChange={onTextareaChange} postCreate={postCreate} />
    )
}

export default PostsContainer;