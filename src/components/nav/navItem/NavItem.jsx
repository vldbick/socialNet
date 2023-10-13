import React from "react";
import s from './NavItem.module.css';

import { NavLink } from "react-router-dom";


export default function NavItem({ to, iconSrc, text }) {
    return (
        <NavLink to={to} className={({ isActive }) =>
            isActive ? s.linkActive : null}>
            <div className={s.itemList}>
                <div className={s.nav_icon}>
                    <img src={iconSrc} alt="" />
                </div>
                <div>
                    {text}
                </div>
            </div>
        </NavLink>
    );
}
