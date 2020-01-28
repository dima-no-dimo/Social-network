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
        <Nav friends={props.data.friends} />
        <div className="content">
          <Route path="/Profile" render={() => <Profile postData={props.data.postData} />} />
          <Route path="/Dialogs" render={() => <Dialogs data={props.data.pageMessages} dataM={props.data.AllMessages} />} />
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
