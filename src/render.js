import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';

let rend = (props) => {
    ReactDOM.render(<App data={props} />, document.getElementById('root'));
}

export {rend}