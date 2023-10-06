import React from "react";
import s from './InputPost.module.css';

export default function InputPost() {
    return (
        <div className={s.inputHolder}>
           <form action="">
                <input className={s.inMain} type="text" placeholder="your news..."/>
                <input className={s.but} type="button" value="SEND" />
           </form>
        </div>
    )
}