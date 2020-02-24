import React from "react";
import User from "./User/User";
import CLS from './User/User.module.css'
import * as axios from "axios";

const Users = (props) => {
    if(props.userPageReducer.length === 0) {
        // props.setUsers([
        //     {
        //         id: 1,
        //         name: 'Dima S.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
        //         follow: 'Follow',
        //     },
        //     {
        //         id: 2,
        //         name: 'Vita K.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        //         follow: 'Follow',
        //     },
        //     {
        //         id: 3,
        //         name: 'Julia S.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        //         follow: 'Unfollow',
        //     },
        //     {
        //         id: 4,
        //         name: 'Vasil S.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://static.addtoany.com/images/dracaena-cinnabari.jpg',
        //         follow: 'Follow',
        //     },
        //     {
        //         id: 5,
        //         name: 'Karen B.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
        //         follow: 'Unfollow',
        //     },
        //     {
        //         id: 6,
        //         name: 'Artem B.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://croppola.com/croppola/example-bird2/image.jpg?algorithm=croppola&aspectRatio=1&width=500&thumbnailMaximumWidth=150',
        //         follow: 'Follow',
        //     },
        //     {
        //         id: 7,
        //         name: 'Misha M.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://www.joomlack.fr/images/demo.jpg',
        //         follow: 'Follow',
        //     },
        //     {
        //         id: 8,
        //         name: 'Kolya R.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://media.alienwarearena.com/media/32738A6E00000578-3504412-image-a-6_1458654517341-i.jpg',
        //         follow: 'Unfollow',
        //     },
        //     {
        //         id: 9,
        //         name: 'Sergei R.',
        //         description: 'Some text',
        //         liveArea: 'Kyiv, Ukraine',
        //         avatar: 'https://im.rediff.com/news/2019/dec/27insta1.jpg',
        //         follow: 'Follow',
        //     },
        // ])
        axios.get('/api').then((res) => {
            props.setUsers(res.data);
        })
    };

    let jsxUsers = props.userPageReducer.map((item) => {
        return (
            <User avatar={item.avatar} name={item.name} desc={item.description}
            live={item.liveArea} follow={item.follow} toggle={props.toggleFollow} id={item.id} key={item.id}
            />
        )
    });




    return (
        <div>
            {jsxUsers}
            <button className={CLS.showMore}>Show more</button>
        </div>
    )
};

export default Users