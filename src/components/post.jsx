import React from 'react'

const Post = () => {
    return (
        <article className="content_post">
            <h3>
                New post
            </h3>
            <input type="textarea" size="40" value="type some post" />
            <br/>
            <button>Submit</button>

        </article>
    )
}

export {Post}