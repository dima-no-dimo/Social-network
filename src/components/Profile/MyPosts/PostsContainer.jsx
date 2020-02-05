import React from 'react'
import {changePostAreaActionCreator, createNewPostActionCreator} from "../../../profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";


// const PostsContainer = (props) => {
//
//
//     let postCreate = () => {
//         props.dispatch(createNewPostActionCreator());
//     };
//
//     let onTextareaChange = (e) => {
//         let textareaTyped = e.target.value;
//         props.dispatch(changePostAreaActionCreator(textareaTyped));
//
//     };
//
//     return (
//         <Posts profile={props.profile.profilePageReducer} onTextareaChange={onTextareaChange} postCreate={postCreate} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        profile: state.profilePageReducer,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        postCreate: () => dispatch(createNewPostActionCreator()),
        onTextareaChange: (e) => {
            let textareaTyped = e.target.value;
            dispatch(changePostAreaActionCreator(textareaTyped))
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;