import React from "react";
import s from './Post.module.css';

export default function Post() {
    return (
        <div className={s.post}>
            <div className={s.img}>
                <img src="https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div>
                <div className={s.name}>Khomenko Vladyslav</div>
                <div className={s.content}>
                    SpaceX and Tesla are pioneering the future of space exploration and sustainable transportation, and I'm thrilled to be part of these groundbreaking journeys!
                </div>
            </div>
        </div>
    )
}