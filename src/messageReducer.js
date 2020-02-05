const CREATE_NEW_MESSAGE = 'CREATE_NEW_MESSAGE';
const CHANGE_MESSAGE_AREA = 'CHANGE_MESSAGE_AREA';

let initialState = {
    DialogAuthors: [
        {
            authorName: "Dima",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
        },
        {
            authorName: "Roma",
            avatar: "https://i.pinimg.com/236x/6a/80/5e/6a805e7a764096dde0f0b4313379d0ba.jpg"
        }
    ],
        // currentDialog: 'r',
        textareaText: 'type',
        toWho: 'D',
        AllMessages: {
            messagesD: [
            {
                id: 'Dima',
                txt: 'blablabla',
                from: 'you',
                imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
            },
            {
                txt: 'lalala',
                from: 'Dima',
                imgURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
            },
            {
                txt: 'kokoko',
                from: 'Dima',
                imgURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
            },
            {
                txt: 'hahaha',
                from: 'you',
                imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
            },
        ],
            messagesR: [
            {
                id: 'Roma',
                txt: 'hi',
                from: 'you',
                imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
            },
            {
                txt: 'kek',
                from: 'Roma',
                imgURL: 'https://i.pinimg.com/236x/6a/80/5e/6a805e7a764096dde0f0b4313379d0ba.jpg'
            },
            {
                txt: 'bebebe',
                from: 'Roma',
                imgURL: 'https://i.pinimg.com/236x/6a/80/5e/6a805e7a764096dde0f0b4313379d0ba.jpg'
            },
            {
                txt: 'bye',
                from: 'you',
                imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
            }
        ]
    },
};

const messagePageReducer = (state=initialState, action) => {

    switch (action.type) {
        case CREATE_NEW_MESSAGE:{
            let stateCopy = { ...state,
                AllMessages: {...state.AllMessages,
                    messagesD: [...state.AllMessages.messagesD],
                    messagesR: [...state.AllMessages.messagesR],
                }
            };
            let objMess = {
                txt: stateCopy.textareaText,
                from: 'you',
                imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
            };
            if(!state.textareaText) return stateCopy;
            stateCopy.AllMessages[`messages${state.toWho}`].push(objMess);
            stateCopy.textareaText = '';

            console.log(stateCopy.toWho);

            return stateCopy;
        }
        case CHANGE_MESSAGE_AREA:{
            let stateCopy = {...state};
            stateCopy.textareaText = action.letter;
            // console.log(stateCopy, state);
            return stateCopy;
        }
        default: return state;
    }
};
export const createNewMessageActionCreator = () => {
    return {
        type: CREATE_NEW_MESSAGE,
    }
};
export const changeMessageAreaActionCreator = (txt) => {
    return {
        type: CHANGE_MESSAGE_AREA,
        letter: txt,
    }
};

export default messagePageReducer