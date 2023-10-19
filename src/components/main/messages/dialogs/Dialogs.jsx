import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./dialog/Dialog";



export default function Dialogs({mess}) {
    let dialogs = mess.map( (el) => {
        return <Dialog to={'f'} img={el.picture} name={el.name} lastMess={el.greeting}></Dialog>
    })
    
    return (
        <div className="dialogs">
            {dialogs}
        </div>
    )
}