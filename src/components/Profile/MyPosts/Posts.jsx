import React from 'react'
import CLS from './../profile.module.css'
import { Post } from './Post/Post'

class Posts extends React.Component {
    state = {
        letter: ''
    }

    jsxPost = () => this.props.profile.postData.map((item) => {
        if(item === null) return;
        return (
            <Post key={item._id} id={item._id} del={this.deletePost} cont={item.content} date={item.date} />
        )
    });

    formatedDate(date) {
        const month = [
            'Jan',
            'Fer',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        let result = date.getFullYear();
        result += `:${month[date.getMonth()]}:${date.getDate()} in ${date.getHours()}:${date.getMinutes()}`;
        return result
    }

    createPost = () => {
        if(!this.state.letter) return;
        const reqBody = {
            content: this.state.letter,
            date: this.formatedDate(new Date),
            id: this.props.myId,
        };
          this.props.createPost_TC(reqBody, this.props.jwt)
        this.setState({letter: ''})
    }

    deletePost = async(postId) => {
        this.props.deletePost_TC(this.props.myId, postId, this.props.jwt)
    };

    onchangeTextArea = (e) => {
        this.setState({
            letter: e.target.value
        })
    }

    render() {
        return (
            <article className={CLS.post}>
                <h3>
                    New post
                </h3>
                <textarea onChange={this.onchangeTextArea} value={this.state.letter} />
                <br />
                <button onClick={() => this.createPost()}>Submit</button>
                {this.jsxPost()}
            </article>
        )
    }
}

export default Posts

