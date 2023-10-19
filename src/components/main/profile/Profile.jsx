import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

export default function Profile({self}) {
    return (
        <div>
            <div className={s.imgLogo}>
                <img src={self.logo} />
            </div>
            <div className={s.m_cont}>
                <ProfileInfo self={self}></ProfileInfo>
                <MyPosts self={self}></MyPosts>
            </div>
        </div>
    )
}