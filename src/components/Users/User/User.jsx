import React from "react";
import CLS from './User.module.css';
import * as axios from 'axios'

const User = (props) => {




    return (
        <div className={CLS.headWrapper}>
            <div>
                <img className={CLS.img} src={props.avatar} alt=""/>
                <br/>
                <a href='#' onClick={() => props.toggle(props.id)} className={CLS.myButton}>{props.follow}</a>
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
