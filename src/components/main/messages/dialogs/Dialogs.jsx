import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./dialog/Dialog";
import chats from "../../../../data";

export default function Dialogs(props) {

    return (
        <div className="dialogs">
            <Dialog to={'f'} img={chats[0].photo} name={chats[0].name} lastMess={chats[0].lastMess}></Dialog>
            <Dialog to={'f'} img={chats[1].photo} name={chats[1].name} lastMess={chats[1].lastMess}></Dialog>
        </div>
    )
}