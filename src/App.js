import React from 'react';
import './App.css';
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import Profile from './components/Profile/profile'
import { Dialogs } from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'



function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Nav friends={props.store.getState()} />
        <div className="content">
          <Route path="/Profile" render={() => <Profile profile={props.store.getState()} dispatch={props.dispatch} />} />
          <Route path="/Dialogs" render={() => <Dialogs dialogs={props.store.getState().messagePageReducer} dispatch={props.dispatch} />} />
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
