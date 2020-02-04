const CREATE_NEW_POST = 'CREATE_NEW_POST';
const CHANGE_POST_AREA = 'CHANGE_POST_AREA';

let initialState = {
    postData: [
        {
            content: 'Content for first post',
            title: 'Post 1'
        },
        {
            content: 'Content for second post',
            title: 'Post 2'
        }
    ],
    textareaText: 'type',
};

const profielPageReducer = (state=initialState, action) => {

    switch (action.type) {
        case CREATE_NEW_POST:
            let newPost = {
                content: state.textareaText,
                title: `Post ${state.postData.length + 1}`
            };
            if(!state.textareaText) return state;
            state.postData.push(newPost);
            state.textareaText = '';
            return state;
        case CHANGE_POST_AREA:
            state.textareaText = action.letter;
            return state;
        default: return state;
    }
}
export const createNewPostActionCreator = () => ({type: CREATE_NEW_POST,});
export const changePostAreaActionCreator = (txt) => {
    return {
        type: CHANGE_POST_AREA,
        letter: txt,
    }
};

export default profielPageReducer

