import React, {useEffect} from 'react'
import CLS from './../profile.module.css'
import { Post } from './Post/Post'
import {useHttp} from "../../../hooks/http.hook";
import * as axios from "axios";



const Posts = (props) => {
    let jsxPost = props.profile.postData.map((item) => {
        return (
            <Post /*del={props.profile}*/ cont={item.content} numP={item.title} />
        )
    });

    // const {loading, error, request} = useHttp();

  /*  const handle = async () => {
        try {
            const data = await request('api/Profile', "POST", {name: 'dvs'})
            console.log(data)
        } catch (e) {}
    };*/

    /*const getUs = async () => {
        try {
            const data = await  request('/api', "GET");
            console.log('da', data)
        } catch (e) {}
    }*/
        axios.get("/api").then((res) => {
            // props.setUs(res.data.items)
            console.log(res)
        });


    return (
        <article className={CLS.post}>
            <h3>
                New post
            </h3>
            <textarea onChange={props.onTextareaChange} value={props.profile.textareaText} />
            <br />
            <button onClick={(() => console.log('sa'))}>Submit</button>
            {jsxPost}
        </article>
    )
}

export { Posts }

