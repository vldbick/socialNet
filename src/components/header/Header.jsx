import React from "react";
import s from './Header.module.css';

export default function Header({header}) {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <a href="#">
                    <img src={header.img} />
                </a>
            </div>
        </header>
    )
}