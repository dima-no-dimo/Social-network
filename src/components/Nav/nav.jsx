import React from 'react'
import {NavLink} from 'react-router-dom'
import CLS from './nav.module.css'

const Nav = (props) => {
    return (
    <nav className="nav">
        <ul>
          <NavLink to="/Profile" activeClassName={CLS.active}>
            <li>Profile</li>
          </NavLink>
          <NavLink to="/Dialogs" activeClassName={CLS.active}>
            <li>Messages</li>
          </NavLink>
          <NavLink to="/News" activeClassName={CLS.active}>
            <li>News</li>
          </NavLink>
          <NavLink to="/Music" activeClassName={CLS.active} >
             <li>Music</li>
          </NavLink>

          <NavLink to="/Settings" activeClassName={CLS.active} >
            <li>Settings</li>
          </NavLink>

          <NavLink to={'/Users'} activeClassName={CLS.active}>
              <li>Users</li>
          </NavLink>
        </ul>
      </nav>
    )
}

export default Nav