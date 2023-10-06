import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";
import InputPost from "./inputPost/InputPost";

export default function MyPosts() {
    return (
        <div className={s.posts}>
            <div className={s.title}>
                My posts
            </div>
            <InputPost></InputPost>
            <Post></Post>
            <Post></Post>
        </div>
    )
}