import React from "react";
import s from './Main.module.css';
import Profile from "./profile/Profile";

export default function Main() {
    return (
        <main className={s.main}>
            <Profile></Profile>
        </main>
    )
}