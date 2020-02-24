import React from 'react'
import {NavLink} from 'react-router-dom'
import CLS from './nav.module.css'
import Friends from './Friends/Friends'

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
          
          <li><a href="/News">News</a></li>
          <li><a href="/Music">Music</a></li>
          <li><a href="/Settings">Settings</a></li>

            <NavLink to={'/Users'} activeClassName={CLS.active}>
                <li>Users</li>
            </NavLink>
          <li>
            <div className={CLS.friends}>
              <Friends friends={props.friends.friendsReducer} />
            </div>
          </li>
        </ul>
      </nav>
    )
}

export default Nav