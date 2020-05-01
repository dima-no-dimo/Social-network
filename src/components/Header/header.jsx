import React from 'react'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
      <header className="header">
        <img className="header_logo" src='https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png' alt="logo" />
        <div className="header_title"><p>Social Network</p></div>

            <NavLink className="header_login"
                     activeClassName="active_link"
                     to={'/Login'} >Login
            </NavLink>

      </header>
    )
}

export default Header
