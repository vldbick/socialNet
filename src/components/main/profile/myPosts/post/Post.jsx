import React from "react";
import s from './Post.module.css';

export default function Post({self, content}) {
    return (
        <div className={s.post}>
            <div className={s.img}>
                <img src={self.picture} alt="" />
            </div>
            <div>
                <div className={s.name}>Khomenko Vladyslav</div>
                <div className={s.content}>
                    {content}
                </div>
            </div>
        </div>
    )
}