import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";

export default function Profile(props) {
    return (
        <div>
            <div className={s.imgLogo}>
                <img src='https://bogatyr.club/uploads/posts/2023-03/thumbs/1679718702_bogatyr-club-p-gori-peizazh-vektor-foni-instagram-57.jpg' />
            </div>
            <div className={s.m_cont}>
                <div className={s.profile}>
                    <div className={s.pr_ph}>
                        <img src='https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj' />
                    </div>
                    <div className=''>
                        <div className={s.pdt}>Khomenko Vladyslav</div>
                        <ul className={s.pdl}>
                            <li>Date of Birth: 24 dec</li>
                            <li>City: Kiev</li>
                            <li>Edu: NUPESU</li>
                        </ul>
                    </div>
                </div>
                <MyPosts></MyPosts>
            </div>
        </div>
    )
}