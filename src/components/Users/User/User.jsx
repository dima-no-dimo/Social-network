import React from "react";
import CLS from './User.module.css';
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <div className={CLS.headWrapper}>
            <div>
                <NavLink to={`/Profile/${props.id}`}>
                    <img className={CLS.img} src={props.avatar}  alt=""/>
                </NavLink>
                <br/>
                {props.id !== props.myId ?
                    (<a href='#' onClick={(e) => props.toggle({userId: props.id,
                    follow: e.target.innerHTML})
                }
                   className={CLS.myButton}>{(props.follow && 'unfollow') || 'follow'}</a>)
                    : null}
            </div>
            <div className={CLS.wrapper}>
                
                <div className={CLS.text}>
                    <h3>
                        {props.name}
                    </h3>
                    <p>
                        {props.desc}
                    </p>
                </div>
                <div>
                    <p>
                        {props.live}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default User
