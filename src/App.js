import React from 'react';
import './App.css';
import Header from './components/header'
import Nav from './components/nav'
import Profile from './components/profile'


function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
