import React from 'react';
import './App.css';
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import {BrowserRouter, Route} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import AuthContainer from "./components/Auth/AuthContainer";
import Music from "./components/Music/MusicPage";
import News from "./components/News/News";



function App(props) {
  return (
    <BrowserRouter>
        <div className="app_wrapper">
        <Header />
        <Nav />
        <div className="content">
            <Route path="/Profile/:id?" render={() => <ProfileContainer />} />
            <Route path="/Dialogs" render={() => <DialogsContainer />} />
            <Route path='/Users' render={() => <UsersContainer/>} />
            <Route path='/Music' render={() => <Music />} />
            <Route path='/News' render={() => <News />} />
            <Route path='/Login' render={() => <AuthContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
