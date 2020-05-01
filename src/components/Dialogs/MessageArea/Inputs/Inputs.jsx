import React from  'react'
import CLS from './../MessageArea.module.css'


class Inputs extends React.Component {
    state = {
        letter: ''
    };

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

    submitMessage = () => {
        if(!this.props.messagePage.textareaText) return;
        this.props.sendMessage_TC(`${this.props.myId}?toWho=${this.props.messagePage.current}`,
            {txt: this.state.letter, date: this.formatedDate(new Date)})
        this.setState({letter: ''})
    };

    onchangeTextArea = (e) => {
        this.setState({
            letter: e.target.value
        })
    };

    render() {
        return (

            <div className={CLS['inputs']}>
                    <textarea onChange={this.onchangeTextArea} value={this.state.letter} />
                    <button onClick={this.submitMessage}>submit</button>
            </div>
        )
    }
}

export default Inputs