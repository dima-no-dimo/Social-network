import React from 'react'
import {NavLink} from 'react-router-dom'
import CLS from './DialogAuthor.module.css'



const DialogAuthor = (props) => {
    return (
        <NavLink onClick={() => props.click(props.id)}
        to={'/Dialogs/' + props.id}
        activeClassName={CLS.active}
        className={CLS.link}>
            <div className={CLS.display}>
                <img className={CLS.imgDialog} src={props.avatar} alt="avatar" />
                <div>
                    <p>
                        {props.authorName}
                    </p>
                </div>
            </div>
        </NavLink>
    )
}

export {DialogAuthor}