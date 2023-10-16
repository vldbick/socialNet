import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

export default function Profile(props) {
    return (
        <div>
            <div className={s.imgLogo}>
                <img src='https://bogatyr.club/uploads/posts/2023-03/thumbs/1679718702_bogatyr-club-p-gori-peizazh-vektor-foni-instagram-57.jpg' />
            </div>
            <div className={s.m_cont}>
                <ProfileInfo></ProfileInfo>
                <MyPosts></MyPosts>
            </div>
        </div>
    )
}