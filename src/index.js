import * as serviceWorker from './serviceWorker';
import store from './reduxStore'
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';

let rend = () => {
    ReactDOM.render(<App store={store} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
};

rend();

store.subscribe(rend);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
