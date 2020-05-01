import React from "react";
import {useHistory} from 'react-router-dom';

const Music = () => {
    // let val;
/*    const request = async() => {
           try {
                await axios.get('/Music').then(data => {
                val = data
                console.log(val)
               });
           } catch(e) {
               console.log(e)
           }
    };*/
    const history = useHistory();

    function  onklickRedirect() {
        history.push('/Login')
    }

    return (
        <div>
            <h2> Music Page </h2>
            <button onClick={onklickRedirect}>redirect</button>
        </div>
    )
};

export default Music