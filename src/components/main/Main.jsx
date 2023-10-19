import React from "react";
import s from './Main.module.css';
import Profile from "./profile/Profile";
import Messages from "./messages/Massages";
import { Route, Routes } from "react-router-dom";
import Friends from "./friends/Friends";
import Musics from "./musics/Musics";
import News from "./news/News";
import Setting from "./sitting/Setting";

export default function Main({state}) {
    return (
        <main className={s.main}>
            <Routes>
                <Route element={<Profile self={state.self}></Profile>} path="/profile"></Route>
                <Route element={<Messages mess={state.other}></Messages>} path="/messages"></Route>
                <Route Component={Friends} path="/friends"></Route>
                <Route Component={Musics} path="/music"></Route>
                <Route Component={News} path="/news"></Route>
                <Route Component={Setting} path="/setting"></Route>
            </Routes>

        </main>
    )
}