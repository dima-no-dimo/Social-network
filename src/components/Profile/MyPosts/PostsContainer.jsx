// import {changePostArea, createNewPost, setPosts, deletePost} from "../../../profileReducer";
// import {withPosts} from "./Posts";
// import {connect} from "react-redux";

// let mapStateToProps = (state) => {
//     return {
//         profile: state.profilePageReducer.profileData,
//         selectedUserId: state.usersPageReducer.selectedUserId,
//         textareaText: state.profilePageReducer.textareaText
//     }
// };
// let mapDispatchToProps = (dispatch) => {
//     return {
//         createNewPost: () => dispatch(createNewPost()),
//         changePostArea: (e) => {
//             // let textareaTyped = e.target.value;
//             dispatch(changePostArea(e))
//         },
//         setPosts: (postData) => dispatch(setPosts(postData)),
//         deletePost: (id) => dispatch(deletePost(id))
//     }
// };

// const PostsContainer = connect(mapStateToProps, {
//     createNewPost, changePostArea, setPosts, deletePost
// })(withPosts);

// export default PostsContainer;