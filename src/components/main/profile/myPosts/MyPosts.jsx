import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";
import InputPost from "./inputPost/InputPost";

export default function MyPosts({self}) {
    return (
        <div className={s.posts}>
            <div className={s.title}>
                My posts
            </div>
            <InputPost></InputPost>
            <Post content='"Im sorry...?And why... do you need that information?"' self={self}></Post>
            <Post content='Stevie looks like he can actually bench 3 Sri Lankan Elephants'self={self}></Post>
            <Post content='Will this guy ever get his date, Friday Night at 7?'self={self}></Post>
        </div>
    )
}