import React from 'react'
import classes from './profile.module.css'

const User = () => {
    return (
        <div className={classes.user}>
            <img className={classes.photo} src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg" />

            <div className={classes.info}>
                <h3>User Name</h3>
                <p>Age</p>
                <p>Hobbies</p>
            </div>
        </div>
    )
}

export {User}