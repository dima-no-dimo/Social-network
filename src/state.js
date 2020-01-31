// let data = {
//     pageProfile: {
//         postData: [
//             {
//                 content: 'Content for first post',
//                 title: 'Post 1'
//             },
//             {
//                 content: 'Content for second post',
//                 title: 'Post 2'
//             }
//         ],
//         createPost() {
//             let newPost = {
//                 content: this.textareaText,
//                 title: `Post ${this.postData.length + 1}`
//             }
//             this.postData.push(newPost);
//             this.textareaText = '';
//             rend()
//         },
//         textareaText: 'type',
//         chengeArea (letter) {
//             this.textareaText = letter;
//             rend();
//         },
//         deleteElement (number) {
//             this.postData.splice(number,1);
//             rend();
//         },
//     },
//     friends: [
//         {
//             imgURL: 'http://community.dev.intelex.com/sites/default/files/posts/images/384A98B300000578-0-image-a-63_1473774825844.jpg',
//             userName: 'Igor'
//         },
//         {
//             imgURL: 'https://cdn.collider.com/wp-content/uploads/2017/12/jurassic-world-fallen-kingdom-slice1-600x200.jpg',
//             userName: 'Anna'
//         },
//         {
//             imgURL: 'https://avatars.mds.yandex.net/get-pdb/2886563/cc248d9b-d5f9-4374-bcf4-0c7b50228b45/s600',
//             userName: 'Kate'
//         }
//     ],
//
//     pageMessages: {
//         DialogAuthors: [
//             {
//                 authorName: "Dima",
//                 lastMessage: "Hi !",
//                 avatar: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
//             },
//             {
//                 authorName: "Roma",
//                 lastMessage: "Bye !",
//                 avatar: "https://i.pinimg.com/236x/6a/80/5e/6a805e7a764096dde0f0b4313379d0ba.jpg"
//             }
//         ],
//         addMess(text) {
//             let objMess = {
//                 txt: text,
//                 from: 'you',
//                 imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
//             }
//             data.AllMessages.messagesD.push(objMess);
//             rend();
//         },
//         textareaText: 'type',
//         chengeArea (letter) {
//             this.textareaText = letter;
//             rend();
//         },
//     },
//     AllMessages: {
//         messagesD: [
//             {
//                 txt: 'blablabla',
//                 from: 'you',
//                 imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
//             },
//             {
//                 txt: 'lalala',
//                 from: 'fr',
//                 imgURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
//             },
//             {
//                 txt: 'kokoko',
//                 from: 'fr',
//                 imgURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
//             },
//             {
//                 txt: 'hahaha',
//                 from: 'you',
//                 imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
//             },
//         ],
//         messagesR: [
//             {
//                 txt: 'hi',
//                 from: 'you',
//                 imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
//             },
//             {
//                 txt: 'kek',
//                 from: 'fr',
//                 imgURL: 'https://i.pinimg.com/236x/6a/80/5e/6a805e7a764096dde0f0b4313379d0ba.jpg'
//             },
//             {
//                 txt: 'bebebe',
//                 from: 'fr',
//                 imgURL: 'https://i.pinimg.com/236x/6a/80/5e/6a805e7a764096dde0f0b4313379d0ba.jpg'
//             },
//             {
//                 txt: 'bye',
//                 from: 'you',
//                 imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
//             }
//         ]
//     }
// }

const CREATE_NEW_POST = 'CREATE_NEW_POST';
const CHANGE_POST_AREA = 'CHANGE_POST_AREA';
const CREATE_NEW_MESSAGE = 'CREATE_NEW_MESSAGE';
const CHANGE_MESSAGE_AREA = 'CHANGE_MESSAGE_AREA';

let store = {
    _state:
        {
            pageProfile: {
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
    },
            friends: [
        {
            imgURL: 'http://community.dev.intelex.com/sites/default/files/posts/images/384A98B300000578-0-image-a-63_1473774825844.jpg',
            userName: 'Igor'
        },
        {
            imgURL: 'https://cdn.collider.com/wp-content/uploads/2017/12/jurassic-world-fallen-kingdom-slice1-600x200.jpg',
            userName: 'Anna'
        },
        {
            imgURL: 'https://avatars.mds.yandex.net/get-pdb/2886563/cc248d9b-d5f9-4374-bcf4-0c7b50228b45/s600',
            userName: 'Kate'
        }
    ],
            pageMessages: {
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
    },
        },
    get state() {
        return this._state
    },
    _subscriber() {},
    subscribe(observer) {
        this._subscriber = observer;
    },
    deleteElement (number) {
        this._state.pageProfile.postData.splice(number,1);
        this._subscriber();
    },
    lastMessage(from) {
        // let targetDialog;
        let targetAuthor;
        // this._state.pageMessages.DialogAuthors.forEach(item => {
        //     if(item.authorName === from) targetDialog = item;
        // });
        Object.values(this._state.pageMessages.AllMessages).forEach(item => {
            if(item.some(el => el.from === from)) {
                targetAuthor = item[item.length - 1].txt;
            }
        });
        return targetAuthor;
        // this._subscriber();
    },
    writeState(arg) {
      // this._state.pageMessages.currentDialog = author;
      console.log(arg);
    },
    dispatch(action) {
        if(action.type === CREATE_NEW_POST) {
            let newPost = {
                content: this._state.pageProfile.textareaText,
                title: `Post ${this._state.pageProfile.postData.length + 1}`
            };
            if(!this._state.pageProfile.textareaText) return;
            this._state.pageProfile.postData.push(newPost);
            this._state.pageProfile.textareaText = '';
            this._subscriber();
        }   if(action.type === CHANGE_POST_AREA) {
                this._state.pageProfile.textareaText = action.letter;
                this._subscriber();
        }   if (action.type === CREATE_NEW_MESSAGE) {
                let objMess = {
                    txt: this._state.pageMessages.textareaText,
                    from: 'you',
                    imgURL: 'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
                };
                // let where = this._state.pageMessages.AllMessages[action.where];
                //     where.push(objMess);
                if(!this._state.pageMessages.textareaText) return;
                this._state.pageMessages.AllMessages.messagesD.push(objMess);
                this._state.pageMessages.textareaText = '';
                this._subscriber();
        }   if (action.type === CHANGE_MESSAGE_AREA) {
                this._state.pageMessages.textareaText = action.letter;
                this._subscriber();
        }
    }
}

store.lastMessage = store.lastMessage.bind(store);
store.writeState = store.writeState.bind(store);
export const createNewPostActionCreator = () => ({type: CREATE_NEW_POST,});
export const changePostAreaActionCreator = (txt) => {
    return {
        type: CHANGE_POST_AREA,
        letter: txt,
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



export {store}