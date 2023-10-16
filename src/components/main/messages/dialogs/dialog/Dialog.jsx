import React from "react";
import s from './Dialog.module.css';
import { NavLink } from "react-router-dom";

export default function Dialog({ img, name, lastMess, to}) {
    return (
        <NavLink className={s.navlink} to={"chats/"}>
            <div className={s.dialog}>
                <div className={s.photo}>
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <div className={s.name}>
                        {name}
                    </div>
                    <div className={s.mess}>
                        {lastMess}
                    </div>
                </div>
            </div>
        </NavLink>

    )
}