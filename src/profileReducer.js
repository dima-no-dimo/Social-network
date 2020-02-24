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

const profilePageReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_POST:{
            let newPost = {
                content: state.textareaText,
                title: `Post ${state.postData.length + 1}`
            };
            if(!state.textareaText) return state;

            // stateCopy.postData.push(newPost);
            // stateCopy.textareaText = '';
            return {
                ...state,
                postData: [...state.postData, newPost],
                textareaText: ''
            };
        }
        case CHANGE_POST_AREA:{
            /*let stateCopy = {...state};

            stateCopy.textareaText = action.letter;
            return stateCopy;*/

            return {
                ...state,
                textareaText: action.letter
            }
        }
        default: return state;
    }
};
export const createNewPostActionCreator = () => ({type: CREATE_NEW_POST,});
export const changePostAreaActionCreator = (txt) => {
    return {
        type: CHANGE_POST_AREA,
        letter: txt,
    }
};

export default profilePageReducer

